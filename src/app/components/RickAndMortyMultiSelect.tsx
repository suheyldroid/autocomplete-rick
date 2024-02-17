"use client"
import {useInfiniteQuery} from "react-query";
import {api} from "@/services/api";
import {useEffect, useState} from "react";
import {MultiSelect} from "@/components/MultiSelect";


function RickAndMortyMultiSelect({initialOptions}: RickAndMortyMultiSelectProps) {
    const [inputValue, setInputValue] = useState("")
    const {data, isFetching, refetch} = useInfiniteQuery<CharacterType[]>(
        "rick-and-morty-characters",
        async () => {
            const response = await api.character.list({
                name: inputValue,
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
    }, [inputValue])
    return (
        <MultiSelect options={data?.pages.flat() ?? []} loading={isFetching} onInputValueChange={setInputValue}/>
    )

}

interface RickAndMortyMultiSelectProps {
    initialOptions: CharacterType[];
}

export {RickAndMortyMultiSelect}