import {HStack} from "@styles/jsx";
import {Typography} from "@/components/Typography";
import {Cross} from "@/assets/Cross";
import {Button} from "@/components/Button";
import {BaseItem, useAutoCompleteContext} from "@/components/MultiSelect/AutoCompleteContext";

function MultiSelectInputTag({item}: MultiSelectInputTagProps) {
    const {handleDeselectValue} = useAutoCompleteContext()

    function onRemoveCharacter() {
        handleDeselectValue(item.id)
    }

    return (
        <HStack css={{
            bgColor: "gray.200",
            px: 2,
            py: 1,
            rounded: 8,
        }}>
            <Typography>
                {item.label}
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

interface MultiSelectInputTagProps<T extends BaseItem = BaseItem> {
    item: T
}

export {MultiSelectInputTag}