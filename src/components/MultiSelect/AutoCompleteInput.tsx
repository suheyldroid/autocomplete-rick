import {HStack} from "@styles/jsx";
import {AutoCompleteInputTag} from "@/components/MultiSelect/AutoCompleteInputTag";
import {Button} from "@/components/Button";
import {ArrowDown} from "@/assets/ArrowDown";
import {useAutoCompleteContext} from "@/components/MultiSelect/AutoCompleteContext";
import {css} from "@styles/css";

function AutoCompleteInput() {
    const {selectedItems, inputValue, handleInputChange, handleShowOptions, showOptions} = useAutoCompleteContext()

    function toggleOptions() {
        handleShowOptions(!showOptions)
    }

    function handleInputFocus() {
        handleShowOptions(true)
    }

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
                        <AutoCompleteInputTag character={option} key={option.id}/>
                    ))}
                <HStack flex={1} justify={"space-between"}>
                    <input className={css({
                        w: "full",
                        minW: 100,
                    })}
                           type="text"
                           value={inputValue}
                           onChange={(event) => handleInputChange(event.target.value)}
                           onFocus={handleInputFocus}
                    />
                    <Button p={2} onClick={toggleOptions}>
                        <ArrowDown style={{
                            transform: showOptions ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease-in-out"
                        }}/>
                    </Button>
                </HStack>
            </HStack>

        </HStack>
    )
}

export {AutoCompleteInput}