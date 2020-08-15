async function getData() {
    const response =  await fetch('./data-games/data-games.json')

    return response.json()
}
