const fetch = require('node-fetch');

exports.fetchQuoteObject = async (gameMode) => {
    var url = fetchUrl(gameMode);
    var quoteObj = await fetch(url)
        .then((response) => response.json())
        .then()
        .catch(error => console.log(quoteObj));

    // need to customize the quote object based on which api is used
    processedQuoteObj = processQuoteObj(quoteObj, gameMode);
    return processedQuoteObj;
}

function fetchUrl(gameMode) {
    if (gameMode == 'random') {
        return 'https://animechan.xyz/api/random';
    } else if (gameMode == 'game+of+thrones') {
        return 'https://api.gameofthronesquotes.xyz/v1/random';
    } else if (gameMode == 'breaking+bad') {
        return 'https://api.breakingbadquotes.xyz/v1/quotes';
    } else {
        return 'https://animechan.xyz/api/random/anime?title=' + gameMode;
    }
}

function processQuoteObj(quoteObj, gameMode) {
    console.log(quoteObj);
    if (gameMode == 'game+of+thrones') {
        return {
            show: "Game of Thrones",
            character: quoteObj.character.name,
            quote: quoteObj.sentence,
            acceptableAnswers: [],
            hintString: ''
        };
    }
    else if (gameMode == 'breaking+bad') {
        return {
            show: "Breaking Bad",
            character: quoteObj[0].author,
            quote: quoteObj[0].quote,
            acceptableAnswers: [],
            hintString: ''
        };
    } else {
        // fetched from animechan.xyz
        return {
            show: quoteObj.anime,
            character: quoteObj.character,
            quote: quoteObj.quote,
            acceptableAnswers: [],
            hintString: ''
        }
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
    hintString = hintString.replace(/ /g, "\xa0\xa0\xa0");
    quoteObj.hintString = hintString;
    console.log(hintString);
}
