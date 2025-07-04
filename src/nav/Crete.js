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
                quantity:1

            })
        }
        localStorage.setItem("cart",JSON.stringify(state.CartItem))

    }

}
})
export default product.reducer
export const{addCart}=product.actions





























// import { createSlice } from "@reduxjs/toolkit";

// // ✅ Safe localStorage parser
// let parsedCart = [];
// try {
//   const raw = localStorage.getItem("cart");
//   const parsed = raw ? JSON.parse(raw) : [];
//   parsedCart = Array.isArray(parsed) ? parsed : [];
// } catch {
//   parsedCart = [];
// }

// // ✅ Initial state with valid array
// const initialState = {
//   CartItem: parsedCart
// };

// const product = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addCart(state, action) {
//       const newProduct = action.payload;

//       // ✅ Ensure CartItem is an array (defensive check)
//       if (!Array.isArray(state.CartItem)) {
//         state.CartItem = [];
//       }

//       const existing = state.CartItem.find(
//         (item) => item.id === newProduct.id
//       );

//       if (existing) {
//         existing.quantity += 1;
//       } else {
//         state.CartItem.push({
//           id: newProduct.id,
//           title: newProduct.title, // ✅ use 'title' not 'tittle'
//           img: newProduct.img,
//           quantity: 1
//         });
//       }

//       // ✅ Save updated cart to localStorage
//       localStorage.setItem("cart", JSON.stringify(state.CartItem));
//     }
//   }
// });

// export default product.reducer;
// export const { addCart } = product.actions;
