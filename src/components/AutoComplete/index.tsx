"use client"
import {AutoCompleteOptionList} from "@/components/AutoComplete/AutoCompleteOptionList";
import {AutoCompleteInput} from "@/components/AutoComplete/AutoCompleteInput";
import {VStack} from "@styles/jsx";
import {AutoCompleteProvider} from "@/components/AutoComplete/AutoCompleteContext";
import {useAutoCompleteReduce} from "@/components/AutoComplete/useAutoCompleteReduce";
import {KeyboardEvent, useEffect} from "react";
import {MultiSelectBackdrop} from "@/components/AutoComplete/MultiSelectBackdrop";

export function MultiSelect({options, onInputValueChange, loading = false}: MultiSelectProps) {
    const [state, reduceState] = useAutoCompleteReduce()

    function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
        switch (event.key) {
            case "Enter":
            case "Escape":
                event.preventDefault()
                reduceState({
                    type: "SHOW_OPTIONS",
                    value: false
                })
                break
            case "ArrowDown":
                event.preventDefault()
                if (state.activeIndex === options.length - 1) return
                reduceState({
                    type: "SET_ACTIVE_INDEX",
                    value: state.activeIndex + 1
                })
                break
            case "ArrowUp":
                event.preventDefault()
                if (state.activeIndex === -1) return
                reduceState({
                    type: "SET_ACTIVE_INDEX",
                    value: state.activeIndex - 1
                })
                break
            case "Tab":
                event.preventDefault()
                if (state.activeIndex === -1) return
                const found = options[state.activeIndex]
                if (state.selectedItems.map(item => item.id).includes(found.id)) {
                    reduceState({
                        type: "DESELECT",
                        value: found.id
                    })
                } else {
                    reduceState({
                        type: "SELECT",
                        value: found
                    })
                }

                break

        }
    }

    useEffect(() => {
        reduceState({
            type: "SET_ACTIVE_INDEX",
            value: -1
        })
    }, [options])

    return (
        <AutoCompleteProvider
            value={{
                ...state,
                options,
                setInputValue: (value) => {
                    if (onInputValueChange) {
                        onInputValueChange(value)
                    }
                    reduceState({
                        type: "INPUT_CHANGE",
                        value
                    })
                },
                handleDeselectItem: (value) => {
                    reduceState({
                        type: "DESELECT",
                        value
                    })
                },
                handleSelectItem: (value) => {
                    const found = options.find((item) => item.id === value)
                    if (found) {
                        reduceState({
                            type: "SELECT",
                            value: found
                        })
                    }
                },
                setShowOptions: (value) => {
                    reduceState({
                        type: "SHOW_OPTIONS",
                        value
                    })
                },
                setActiveIndex: (value) => {
                    reduceState({
                        type: "SET_ACTIVE_INDEX",
                        value
                    })
                },
                isLoading: loading,
            }}>
            {state.showOptions && <MultiSelectBackdrop/>}
            <VStack css={{
                gap: 2, zIndex: 1001,
                w: "lg",
                maxW: "full",
            }} onKeyDown={handleKeyDown}>
                <AutoCompleteInput/>
                <AutoCompleteOptionList/>
            </VStack>
        </AutoCompleteProvider>
    )
}

interface MultiSelectProps {
    options: CharacterType[];
    onInputValueChange?: (value: string) => void;
    loading?: boolean;
}