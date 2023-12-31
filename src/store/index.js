
//import { createStore } from "redux";
import {createSlice,configureStore} from '@reduxjs/toolkit'
 const initialCounterState={counter:0,showCounter:true}
 const counterSlice=createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        incrementBy5(state,action){
            state.counter=state.counter+action.payload;
        },
        decrement(state,action){
            state.counter=state.counter-action.payload;
        },
        toggle(state){
            state.showCounter=!state.showCounter;
        }
    }
 })
const initialAuthState={isAuthenticated:false};
 const authSlice=createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        logIn(state){
            state.isAuthenticated=true;
        },
        logOut(state){
            state.isAuthenticated=false;
        }
    }
 })

const store=configureStore({
    reducer:{counter:counterSlice.reducer,auth:authSlice.reducer}
});
export const authActions=authSlice.actions;
export const counterActions=counterSlice.actions;
export default store;
