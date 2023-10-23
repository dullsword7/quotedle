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
exports.check = async(req, res) => {
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
