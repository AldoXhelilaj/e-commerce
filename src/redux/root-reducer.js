import {combineReducers} from 'redux';
 import userReducer from './user/user.reducer'
 import cartReducer from './cart/cart.reducer'
 import { loadingBarReducer } from 'react-redux-loading-bar'
 import {persistReducer} from 'redux-persist';
 import storage from 'redux-persist/lib/storage'


 const persistConfig= {
     key:'root',
     storage,
     whitelist:['cartToggle']
 }
const rootReducer =combineReducers({
     user:userReducer,
     cartToggle:cartReducer,
     loadingBar: loadingBarReducer
 })

 export default persistReducer(persistConfig,rootReducer)

