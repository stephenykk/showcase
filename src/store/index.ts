// import { combineReducers, applyMiddleware, createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import userStore, { userOtherActions } from './modules/userStore'
import cartStore from './modules/cartStore'
import loggerMiddleware from './middlewares/logger'
import mainStore from './modules/mainStore'

const store = configureStore({
    reducer: {
        user: userStore.reducer,
        cart: cartStore.reducer,
        main: mainStore.reducer,
    },
    middleware(getDefaultMiddleware) {
        return [loggerMiddleware, ...getDefaultMiddleware()]
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;

const actionCreators = {
    ...userStore.actions,
    ...userOtherActions,
    ...cartStore.actions,
    ...mainStore.actions,
}

export { userStore, cartStore, actionCreators, mainStore }
