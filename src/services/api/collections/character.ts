const character = {
    async list(params?: { name?: string }) {
        const searchParams = new URLSearchParams(params).toString()
        const response = await fetch("https://rickandmortyapi.com/api/character" + `?${searchParams}`)
        const body: { results: CharacterType[] } = await response.json()
        return body
    }
}

export {character}