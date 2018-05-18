import { Action } from "redux";

export default function reducer(state = "Hello, You !", action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}
