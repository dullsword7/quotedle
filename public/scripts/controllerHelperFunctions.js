const fetch = require('node-fetch');

exports.fetchQuoteObject = async (gameMode) => {
    var url = fetchUrl(gameMode);
    var quoteObj = await fetch(url)
        .then((response) => response.json())
        .then()
        .catch(error => console.log(quoteObj));
    return quoteObj;
}

function fetchUrl(gameMode) {
    if (gameMode == 'random') {
        return 'https://animechan.xyz/api/random';
    } else {
        return 'https://animechan.xyz/api/random/anime?title=' + gameMode;
    }
}

exports.generateHintString = (characterName, quoteObj) => {
    // Create a hint string randomly inserting '_'
    randomNumberArray = []
    for (let index = 0; index < characterName.length / 2 + 1; index++) {
        randomNumberArray.push(Math.floor(Math.random() * characterName.length));
    }

    hintString = "";
    for (let index = 0; index < characterName.length; index++) {
        // If current character is not an empty space and the index is in the array of random numbers
        if ((characterName[index] != " ") && randomNumberArray.includes(index)) {
            hintString += '_';
        }
        else {
            hintString += characterName[index];
        }
    }
    hintString = hintString.replace(" ", "\xa0\xa0\xa0");
    quoteObj.hintString = hintString;
    console.log(hintString);
}
