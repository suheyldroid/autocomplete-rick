import {Box} from "@styles/jsx";
import {useAutoCompleteContext} from "@/components/AutoComplete/AutoCompleteContext";

function MultiSelectBackdrop() {
    const {setShowOptions} = useAutoCompleteContext()

    function handleCloseOptions() {
        setShowOptions(false)
    }

    return (
        <Box css={{
            pos: "absolute",
            zIndex: 1000,
            top: 0,
            left: 0,
            w: "full",
            h: "full",
        }} onClick={handleCloseOptions}/>
    )
}

export {MultiSelectBackdrop}