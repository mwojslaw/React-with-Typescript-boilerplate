import { Action } from "redux";

export const helloMessage = (state = "Hello, You !", action: Action) => {
    switch(action.type){
        default:
            return state;
    }
}

const _usedTechnologies: {href: string, name: string}[] = [
    {
        href: "",
        name: "react"
    },
    {
        href: "",
        name: "redux"
    },
    {
        href: "",
        name: "typescript"
    },
    {
        href: "",
        name: "storybook"
    },
    {
        href: "",
        name: "jest"
    }
];

export const usedTechnologies = (state = _usedTechnologies, action: Action) => {
    switch(action.type){
        default:
            return state;
    }
}