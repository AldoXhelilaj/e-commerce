import {combineReducers} from 'redux';
 import userReducer from './user/user.reducer'
 import cartReducer from './cart/cart.reducer'
 import directoryReducer from '../redux/directory/directory.reducer'
 import { loadingBarReducer } from 'react-redux-loading-bar'
 import {persistReducer} from 'redux-persist';
 import storage from 'redux-persist/lib/storage'
 import shopReducer from './shop/shop.reducer'


 const persistConfig= {
     key:'root',
     storage,
     whitelist:['cartToggle']
 }
const rootReducer =combineReducers({
     user:userReducer,
     cartToggle:cartReducer,
     loadingBar: loadingBarReducer,
     directory:directoryReducer,
     shop:shopReducer
 })

 export default persistReducer(persistConfig,rootReducer)

