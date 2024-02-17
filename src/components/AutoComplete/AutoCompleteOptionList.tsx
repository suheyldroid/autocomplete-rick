"use client"
import {Box, VStack} from "@styles/jsx";
import {AutoCompleteOption} from "@/components/AutoComplete/AutoCompleteOption";
import {useAutoCompleteContext} from "@/components/AutoComplete/AutoCompleteContext";
import {Typography} from "@/components/Typography";

function AutoCompleteOptionList() {
    const {
        options,
        isLoading,
        inputValue,
        showOptions,
        activeIndex
    } = useAutoCompleteContext()

    const filteredOptions = options
        .filter((option) =>
            option.name
                .toLowerCase()
                .includes(inputValue.toLowerCase()))

    return (
        <Box css={{
            w: "full",
            position: "relative",
        }}>
            {showOptions &&
                <VStack css={{
                    gap: "1px",
                    borderWidth: 1,
                    borderColor: "gray.700",
                    bgColor: "gray.700",
                    rounded: 16,
                    overflow: "auto",
                    maxH: 400,
                    position: "absolute",
                    w: "full",
                    top: 0,
                }}>

                    {
                        isLoading ?
                            <Typography css={{
                                w: "full",
                                bgColor: "white",
                                p: 2,
                                color: "gray.500",
                                textAlign: "center",
                                fontWeight: 600
                            }}>
                                Loading...
                            </Typography>
                            :
                            <>
                                {
                                    filteredOptions.map((option, index) => (
                                        <AutoCompleteOption
                                            isSelected={index === activeIndex}
                                            key={option.id}
                                            character={option}/>
                                    ))}
                                {filteredOptions.length === 0 &&
                                    <Typography css={{
                                        w: "full",
                                        bgColor: "white",
                                        p: 2,
                                        color: "gray.500",
                                        textAlign: "center",
                                        fontWeight: 600
                                    }}>
                                        No results found
                                    </Typography>
                                }
                            </>
                    }
                </VStack>
            }
        </Box>
    )
}

export {AutoCompleteOptionList}
