import {useReducer} from "react";

function useAutoCompleteReduce() {
    return useReducer((state: AutoCompleteReducerState, action: AutoCompleteReducerAction
    ) => {
        switch (action.type) {
            case "SELECT":
                return {
                    ...state,
                    selectedItems: [...state.selectedItems, action.value]
                }
            case "DESELECT":
                return {
                    ...state,
                    selectedItems: state.selectedItems.filter((value) => value.id !== action.value)
                }
            case "INPUT_CHANGE":
                return {
                    ...state,
                    inputValue: action.value
                }
            case "SHOW_OPTIONS":
                return {
                    ...state,
                    showOptions: action.value
                }
            case "SET_ACTIVE_INDEX":
                return {
                    ...state,
                    activeIndex: action.value
                }
            default:
                return state
        }
    }, {
        inputValue: "",
        selectedItems: [],
        showOptions: false,
        activeIndex: 0
    })
}


type AutoCompleteReducerState = {
    inputValue: string,
    selectedItems: CharacterType[],
    showOptions: boolean
    activeIndex: number
}

type AutoCompleteReducerAction =
    {
        type: "DESELECT" | "INPUT_CHANGE"
        value: string
    } |
    {
        type: "SELECT"
        value: CharacterType
    } |
    {
        type: "SHOW_OPTIONS"
        value: boolean
    } |
    {
        type: "SET_ACTIVE_INDEX"
        value: number
    }

export {useAutoCompleteReduce}