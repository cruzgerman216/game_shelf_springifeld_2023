// send request to API
fetch("http://localhost:3000/board_games").then((res => res.json())).then((data) => {

    // Goal: Render data onto the page
    const boardGames = data;

    const containerIndex = document.getElementById('index');
    boardGames.forEach((boardGame) => {
        // Step 1 Create a sub-container 
        const boardgameElem = document.createElement("div");

        // Step 2
        // title
        const titleELem = document.createElement("div");
        titleELem.innerText = boardGame.title;
        // description
        const descriptionElem = document.createElement("div");
        descriptionElem.innerText = boardGame.description;

        // number of players 
        const numPlayersElem = document.createElement("div");
        numPlayersElem.innerText = boardGame.num_players;
        // genre
        const genreElem = document.createElement("div");
        genreElem.innerText = boardGame.genre;

        boardgameElem.appendChild(titleELem);
        boardgameElem.appendChild(descriptionElem);
        boardgameElem.appendChild(numPlayersElem);
        boardgameElem.appendChild(genreElem);

        // Step 3 add board game element to container Index 

        containerIndex.appendChild(boardgameElem)
    })
})

