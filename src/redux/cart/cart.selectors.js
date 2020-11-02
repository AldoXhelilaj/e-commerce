import { createSelector } from 'reselect'



const selectCart=state=>state.cartToggle


export const selectCartItems= createSelector(
    [selectCart],
    cartToggle=>cartToggle.cartItem
)


export const selectCartItemsCounts= createSelector(
    [selectCartItems],
    cartItem=>cartItem.reduce(function(a, b){
        return a + b.quantity;
    }, 0)
)

export const selectcartTotal= createSelector(
    [selectCartItems],
    cartItem=>cartItem.reduce(function(a, b){
        
        return a + b.quantity  * b.price;
    }, 0)
)