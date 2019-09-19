
import local from "@/utils/local.js";

let car = {
    state: {
        carlist: []
    },
    mutations: {
        selectall(state,payload){
            console.log(payload)
            state.carlist = [...state.carlist.map(e=>{
                return {
                    ...e,
                    checked: payload
                }
            })]
        },
        getcarlist(state, payload){
            state.carlist = payload
        },
        updatecar(state, obj){
            let index = -1;
            state.carlist.forEach((e, i) => {
                if(e.id===obj.id){
                    index=i
                }
            })
            if (index > -1) {
                // state.carlist[index] = { ...state.carlist[index], ...obj }
                state.carlist.splice(index,1,{ ...state.carlist[index], ...obj })
            } else {
                state.carlist.push(obj)
                console.log(state.carlist)
            }
        }
    },
    actions: {
        selectall({commit},payload){
            commit("selectall",payload)
        },
        getcarlist(conetext, payload){
            let data = local.getdata();
            data = data.map(e => {
                e.checked = false;
                return e
            })
            conetext.commit('getcarlist', data);
        },
        frontedupdate(context, payload){
            context.commit('updatecar', payload);
        },
        backupdate(context, payload){
            setTimeout(() => {
                local.updatecar(payload);
                context.commit('updatecar', payload);
            });
        }
    },
    getters:{
        isall:(state,getters)=>{
            return state.carlist.every(e=>{
                return e.checked===true;
            })
        },
        allprice:(state)=>{
            let arr = state.carlist.filter(e=>e.checked);
            let all = 0;
            arr.forEach(e=>{
                all += (e.count * e.price * 100)
            })
            return all/100;
        },
        allcount:(state)=>{
            let arr = state.carlist.filter(e => e.checked);
            let count = 0;
            arr.forEach(e => {
                count += e.count
            })
            return count;
        }
    }
}


export default car;