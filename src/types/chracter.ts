type CharacterType = {
    id: string
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: CharacterLocationType
    location: CharacterLocationType
    image: string
    episode: string[]
    url: string
    created: string
}

type CharacterLocationType = {
    name: string
    url: string
}