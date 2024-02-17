"use client"
import {HStack, VStack} from "@styles/jsx";
import Image from "next/image";
import {Typography} from "@/components/Typography";
import {css, cx} from "@styles/css";
import {highlightText} from "@/helpers/highlightText";
import {useAutoCompleteContext} from "@/components/AutoComplete/AutoCompleteContext";
import {useEffect, useRef} from "react";

function AutoCompleteOption({character, isSelected = false}: MultiSelectOptionProps) {
    const {selectedItems, handleSelectItem, handleDeselectItem, inputValue} = useAutoCompleteContext()
    const isCharacterSelected = selectedItems.map(item => item.id).includes(character.id)
    const wrapperRef = useRef<HTMLDivElement>(null)

    function handleToggleCharacter() {
        if (isCharacterSelected) {
            handleDeselectItem(character.id)
        } else {
            handleSelectItem(character.id)
        }
    }

    useEffect(() => {
        if (isSelected) {
            wrapperRef.current?.scrollIntoView({block: "nearest"})
        }
    }, [isSelected])


    return (
        <HStack
            ref={wrapperRef}
            onClick={handleToggleCharacter}
            css={{
                bgColor: "white",
                w: "full",
                p: 2,
                cursor: "pointer",
                _hover: {
                    bgColor: "gray.200"
                },
            }}
            className={cx(isSelected && css({
                bgColor: "gray.200"
            }))}>

            <input type={"checkbox"}
                   checked={isCharacterSelected}
            />

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
    isSelected?: boolean
}


export {AutoCompleteOption}