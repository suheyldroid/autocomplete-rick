"use client"

import {createContext, useContext} from "react";

const AutoCompleteContext = createContext<AutoCompleteStore | undefined>(undefined)

export interface BaseItem {
    id: string
    label: string
}

interface AutoCompleteStore {
    options: CharacterType[]
    inputValue: string
    selectedItems: CharacterType[]
    handleInputChange: (value: string) => void
    handleSelectItem: (id: CharacterType["id"]) => void
    handleDeselectValue: (id: CharacterType["id"]) => void
    handleShowOptions: (value: boolean) => void

    isLoading: boolean
    showOptions: boolean
}

const AutoCompleteProvider = AutoCompleteContext.Provider
const useAutoCompleteContext = () => {
    const context = useContext(AutoCompleteContext)
    if (!context) {
        throw new Error("useAutoCompleteContext must be used within a AutoCompleteProvider")
    }
    return context
}

export {AutoCompleteProvider, useAutoCompleteContext}