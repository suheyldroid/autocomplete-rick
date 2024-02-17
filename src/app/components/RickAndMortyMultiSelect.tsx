"use client"
import {useInfiniteQuery} from "react-query";
import {api} from "@/services/api";
import {useEffect, useState} from "react";
import {MultiSelect} from "@/components/AutoComplete";
import {useDebounce} from "@uidotdev/usehooks";


function RickAndMortyMultiSelect({initialOptions}: RickAndMortyMultiSelectProps) {
    const [inputValue, setInputValue] = useState("")
    const debouncedInputValue = useDebounce(inputValue, 500)
    const {data, isFetching, refetch} = useInfiniteQuery<CharacterType[]>(
        "rick-and-morty-characters",
        async () => {
            const response = await api.character.list({
                name: debouncedInputValue,
            })
            if (response.results) {
                return response.results
            }
            return []
        },
        {
            initialData: {
                pages: [initialOptions],
                pageParams: [],
            },
        })

    useEffect(() => {
        refetch()
    }, [debouncedInputValue])
    return (
        <MultiSelect options={data?.pages.flat() ?? []} loading={isFetching} onInputValueChange={setInputValue}/>
    )

}

interface RickAndMortyMultiSelectProps {
    initialOptions: CharacterType[];
}

export {RickAndMortyMultiSelect}