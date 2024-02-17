"use client"

import {createContext, useContext} from "react";

const AutoCompleteContext = createContext<AutoCompleteStore | undefined>(undefined)

export interface BaseItem {
    id: string
    label: string
}

interface AutoCompleteStore {
    isLoading: boolean
    options: CharacterType[]

    showOptions: boolean
    setShowOptions: (value: boolean) => void

    inputValue: string
    setInputValue: (value: string) => void

    selectedItems: CharacterType[]
    handleSelectItem: (id: CharacterType["id"]) => void
    handleDeselectItem: (id: CharacterType["id"]) => void

    activeIndex: number
    setActiveIndex: (value: number) => void
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