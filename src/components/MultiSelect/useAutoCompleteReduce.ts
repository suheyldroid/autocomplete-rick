import {useReducer} from "react";

function useAutoCompleteReduce(options?: useAutoCompleteReduceOptions) {
    return useReducer((state: {
                           inputValue: string,
                           selectedItems: CharacterType[],
                           showOptions: boolean
                       }, action: {
                           type: "DESELECT" | "INPUT_CHANGE"
                           value: string
                       } | {
                           type: "SELECT"
                           value: CharacterType
                       } |
                           {
                               type: "SHOW_OPTIONS"
                               value: boolean
                           }
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
                if (options?.onInputValueChange) options.onInputValueChange(action.value)
                return {
                    ...state,
                    inputValue: action.value
                }
            case "SHOW_OPTIONS":
                return {
                    ...state,
                    showOptions: action.value
                }
            default:
                return state
        }
    }, {
        inputValue: "",
        selectedItems: [],
        showOptions: false
    })
}

interface useAutoCompleteReduceOptions {
    onInputValueChange?: (value: string) => void;
}

export {useAutoCompleteReduce}