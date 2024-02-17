import {VStack} from "@styles/jsx";
import {api} from "@/services/api";
import {RickAndMortyMultiSelect} from "@/app/components/RickAndMortyMultiSelect";
import {Typography} from "@/components/Typography";

export default async function Home() {
    const response = await api.character.list()

    return (
        <VStack w={"screen"} h={"screen"} p={{
            base: 8,
            md: 16,
            lg: 24
        }}>
            <Typography css={{
                textAlign: "center",
                fontSize: "2xl",
            }}>
                Rick and Morty Multi Select Autocomplete
            </Typography>
            <RickAndMortyMultiSelect initialOptions={response.results}/>
        </VStack>
    );
}
