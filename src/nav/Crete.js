import{createSlice} from"@reduxjs/toolkit"

const storedItem =localStorage.getItem("cart")
const initialState={
    CartItem:storedItem?JSON.parse(storedItem):[]
}
const product=createSlice({
    name:"cart",
    initialState,
    
reducers:{
    addCart(state,action){
        const newproduct=action.payload
        const exting=state.CartItem.find((item)=>item.id===newproduct.id)

        if(exting){
            exting.quantity+=1
        }
        else{
            state.CartItem.push({
                id:newproduct.id,
                title:newproduct.title,
                img:newproduct.img,
                price:newproduct.price,
                quantity:1

            })
        }
        localStorage.setItem("cart",JSON.stringify(state.CartItem))

    },
    deleteTocart(state,action){
        const idTodel=action.payload
        state.CartItem=state.CartItem.filter(item =>item.id!==idTodel)
            localStorage.setItem("cart", JSON.stringify(state.CartItem));


    }

}
})
localStorage.clear()

export default product.reducer
export const{addCart,deleteTocart}=product.actions