"use client"
import {AutoCompleteOptionList} from "@/components/MultiSelect/AutoCompleteOptionList";
import {AutoCompleteInput} from "@/components/MultiSelect/AutoCompleteInput";
import {Box, VStack} from "@styles/jsx";
import {AutoCompleteProvider} from "@/components/MultiSelect/AutoCompleteContext";
import {useAutoCompleteReduce} from "@/components/MultiSelect/useAutoCompleteReduce";


export function MultiSelect({options, onInputValueChange, loading = false}: MultiSelectProps) {
    const [state, reduceState] = useAutoCompleteReduce({
        onInputValueChange
    })

    return (
        <AutoCompleteProvider value={{
            ...state,
            options,
            handleInputChange: (value) => {
                reduceState({
                    type: "INPUT_CHANGE",
                    value
                })
            },
            handleDeselectValue: (value) => {
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
            handleShowOptions: (value) => {
                reduceState({
                    type: "SHOW_OPTIONS",
                    value
                })
            },
            isLoading: loading,
        }}>
            {state.showOptions &&
                <Box css={{
                    pos: "absolute",
                    zIndex: 1000,
                    top: 0,
                    left: 0,
                    w: "full",
                    h: "full",
                }} onClick={() => {
                    reduceState({
                        type: "SHOW_OPTIONS",
                        value: false
                    })
                }}/>}
            <VStack css={{
                gap: 2, zIndex: 1001,
                w: "lg",
                maxW: "full",
            }}>
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