"use client"
import {Box, VStack} from "@styles/jsx";
import {MultiSelectOption} from "@/components/MultiSelect/MultiSelectOption";
import {useAutoCompleteContext} from "@/components/MultiSelect/AutoCompleteContext";

function MultiSelectOptionList() {
    const {options, inputValue} = useAutoCompleteContext()
    return (
        <Box css={{
            w: "full",
            position: "relative",
        }}>
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
                {options
                    .filter((option) => option.label.toLowerCase().includes(inputValue.toLowerCase()))
                    .map((option) => (
                        <MultiSelectOption key={option.id} item={option}/>
                    ))}
            </VStack>
        </Box>
    )
}

export {MultiSelectOptionList}
