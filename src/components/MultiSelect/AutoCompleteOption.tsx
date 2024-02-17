"use client"
import {HStack, VStack} from "@styles/jsx";
import Image from "next/image";
import {Typography} from "@/components/Typography";
import {css} from "@styles/css";
import {highlightText} from "@/helpers/highlightText";
import {useAutoCompleteContext} from "@/components/MultiSelect/AutoCompleteContext";

function AutoCompleteOption({character}: MultiSelectOptionProps) {
    const {selectedItems, handleSelectItem, handleDeselectValue, inputValue} = useAutoCompleteContext()
    const isCharacterSelected = selectedItems.map(item => item.id).includes(character.id)

    function handleToggleCharacter() {
        if (isCharacterSelected) {
            handleDeselectValue(character.id)
        } else {
            handleSelectItem(character.id)
        }
    }


    return (
        <HStack onClick={handleToggleCharacter} css={{
            bgColor: "white",
            w: "full",
            p: 2,
            cursor: "pointer",
            _hover: {
                bgColor: "gray.200"
            },
        }}>
            <input type={"checkbox"}
                   checked={isCharacterSelected}
                   onChange={handleToggleCharacter}/>
            <Image src={character.image} alt={character.name} width={40} height={40} className={css({
                rounded: 10
            })}/>
            <VStack css={{
                gap: 0,
                alignItems: "start"
            }}>
                <Typography css={{
                    fontSize: "lg",
                    fontWeight: 600,
                    color: "gray.500"
                }}>
                    {highlightText(character.name, inputValue)}
                </Typography>
                <Typography css={{
                    fontSize: "sm",
                    color: "gray.400",
                    fontWeight: 600
                }}>
                    {character.episode.length} Episodes
                </Typography>
            </VStack>
        </HStack>
    )
}

interface MultiSelectOptionProps {
    character: CharacterType
}


export {AutoCompleteOption}