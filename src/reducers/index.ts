import { Action } from 'redux';

export const helloMessage = (state = 'Hello, You !', action: Action) => {
    switch(action.type){
        default:
            return state;
    }
}