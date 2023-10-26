const fetch = require('node-fetch');
var guesses = [];
var quoteObj = {
    anime: 'one piece',
    character: 'jwbrowning',
    quote: 'I would think that he\'s already seen through your heart, and is simply playing the fool to use you. He yanks on the strings of your cheap pride and you dance like a little marionette.'
}
var wrongGuessCount = 0;
// var quoteObj = {};
var start = true;

/**
 * GET /
 * Homepage
 */

exports.homepage = async(req, res) => {
    try {

        // Handles initializing the quote for the first time only
        if (start) {
            // quoteObj = await fetch("https://animechan.xyz/api/random")
            //     .then((response) => response.json())
            //     .then()
            //     .catch(error => console.log(quoteObj));

            // Splits the character's name on white spaces into an array
            var nameArray = quoteObj.character.split(/\b\s+/);

            // Convert every word to lower case
            quoteObj.acceptableAnswers = nameArray.map(x => x.toLowerCase());

            // Create a hint string randomly inserting '_'
            var characterName = quoteObj.character;
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
            quoteObj.hintString = hintString;
            console.log(hintString);

            console.log(`Character: ${quoteObj.character}`);
            console.log(`Anime: ${quoteObj.anime}`);
            start = false;
        }

        const locals = {
            title: 'Quotedle',
            description: 'Quote Guessing Game'
        }

        res.render('index.ejs', {
            locals,
            guesses,
            quoteObj,
            layout: "../views/layouts/main.ejs"
        });
    } catch (error) {
        console.log(error);
    }
}

/**
 * POST /
 * Homepage
 */
exports.check = async(req, res, next) => {
    try {
        characterGuess = req.body.guessTerm.toLowerCase();
        guesses.push(req.body.guessTerm);

        // If the character guess is correct, redirect to success page
        if (quoteObj.acceptableAnswers.includes(characterGuess)) {
            res.redirect('/success');
        } else {
            wrongGuessCount += 1;
            if (wrongGuessCount >= 3) {
                res.redirect('/failure');
            }
            else {
                res.redirect('/');
            }
        }
        console.log(guesses);
    } catch (error) {
        console.log(error);
    }
}

/**
 * GET /
 * Guess Successful Page
 */

exports.guessSuccessful = async(req, res) => {
    res.render('guessSuccessful.ejs', {
        guesses,
        quoteObj,
        layout: "../views/layouts/main.ejs"
    });
}

/**
 * GET /
 * Guess Failure Page
 */

exports.guessFailure = async(req, res) => {
    res.render('guessFailure.ejs', {
        guesses,
        quoteObj,
        layout: "../views/layouts/main.ejs"
    });
}
/**
 * GET /
 * Play Again Page
 */

exports.playAgain = async(req, res) => {
    guesses = [];
    wrongGuessCount = 0

    // quoteObj = await fetch("https://animechan.xyz/api/random")
    //     .then((response) => response.json())
    //     .then()
    //     .catch(error => console.log(quoteObj));

    // Splits the character's name on white spaces into an array
    var nameArray = quoteObj.character.split(/\b\s+/);

    // Convert every word to lower case
    quoteObj.acceptableAnswers = nameArray.map(x => x.toLowerCase());

    console.log(`Character: ${quoteObj.character}`);
    console.log(`Anime: ${quoteObj.anime}`);
    res.redirect('/');
}
