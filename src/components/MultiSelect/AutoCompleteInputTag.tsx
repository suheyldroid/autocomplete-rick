import {HStack} from "@styles/jsx";
import {Typography} from "@/components/Typography";
import {Cross} from "@/assets/Cross";
import {Button} from "@/components/Button";
import {useAutoCompleteContext} from "@/components/MultiSelect/AutoCompleteContext";

function AutoCompleteInputTag({character}: MultiSelectInputTagProps) {
    const {handleDeselectValue} = useAutoCompleteContext()

    function onRemoveCharacter() {
        handleDeselectValue(character.id)
    }

    return (
        <HStack css={{
            bgColor: "gray.200",
            px: 2,
            py: 1,
            rounded: 8,
        }}>
            <Typography css={{
                maxW: {
                    base:150,
                    sm: 200,
                    md: 250,
                },
                w: "fit",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
            }}>
                {character.name}
            </Typography>
            <Button onClick={onRemoveCharacter} css={{
                bgColor: "gray.400",
                rounded: 6,
                p: 1,
                color: "white"
            }}>
                <Cross/>
            </Button>
        </HStack>
    )
}

interface MultiSelectInputTagProps {
    character: CharacterType
}

export {AutoCompleteInputTag}