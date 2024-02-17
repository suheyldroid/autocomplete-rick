import {HStack} from "@styles/jsx";
import {MultiSelectInputTag} from "@/components/MultiSelect/MultiSelectInputTag";
import {css} from "@styles/css";
import {Button} from "@/components/Button";
import {ArrowDown} from "@/assets/ArrowDown";
import {useAutoCompleteContext} from "@/components/MultiSelect/AutoCompleteContext";

function MultiSelectInput() {
    const {options, selectedItems, inputValue, handleInputChange} = useAutoCompleteContext()
    return (
        <HStack css={{
            width: "lg",
            maxW: "full",
            bgColor: "white",
            p: 1,
            rounded: 10,
            borderColor: "gray.500",
            borderWidth: 1,
        }}>
            <HStack css={{
                w: "full",
                flexWrap: "wrap",
            }}>

                {selectedItems
                    .map((option) => (
                        <MultiSelectInputTag item={option} key={option.id}/>
                    ))}

                <input type="text" className={css({
                    flex: 1,
                })} value={inputValue} onChange={(event) => handleInputChange(event.target.value)}/>
            </HStack>
            <Button p={2}>
                <ArrowDown/>
            </Button>
        </HStack>
    )
}

export {MultiSelectInput}