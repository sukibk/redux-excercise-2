import  {createSlice} from "@reduxjs/toolkit";

const initialCounter = {
    items: [],
    /* id:
    * name:
    * description:
    * price:
    * totalAmount:
    * */
    isShown: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounter,
    reducers: {
        addItem(state, action){
            if(state.items.length===0)
            state.items.push(action.payload.item)
            else{
                const index = state.items.findIndex(item => item.id === action.payload.item.id);
                const itemOnIndex = state.items[index];
                if(itemOnIndex){
                    state.items[index].totalAmount += action.payload.item.totalAmount
                }
                else
                    state.items.push(action.payload.item)
            }
        },
        removeItem(state, action){
            if(state.items.length!==0){
                const index = state.items.findIndex(item => item.id === action.payload.item.id);
                const itemOnIndex = state.items[index];
                if(itemOnIndex.totalAmount === 1){
                    state.items = state.items.filter(item => item.id !== action.payload.item.id)
                    if(state.items.length===0)
                        state.isShown = false;
                }
                else {
                    state.items[index].totalAmount -= 1;
                }
            }
            else state.isShown = false
        },

        toggleIsShown(state){
            state.isShown = !state.isShown
        }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;