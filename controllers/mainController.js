const helpers = require('../public/scripts/controllerHelperFunctions');
var guesses = [];
var quoteObj = {
    anime: 'One Piece',
    character: 'Jwbrowning',
    quote: 'I would think that he\'s already seen through your heart, and is simply playing the fool to use you. He yanks on the strings of your cheap pride and you dance like a little marionette.'
}
var wrongGuessCount = 0;
var hint1 = false;
var hint2 = false;

var quoteObj = {
    show: '',
    character: '',
    quote: '',
    acceptableAnswers: [],
    hintString: ''
};

var start = true;
var gameMode = 'random';
var animeToggled = true;

/**
 * GET /
 * Homepage
 */

exports.homepage = async(req, res) => {
    try {

        // Handles initializing the quote for the first time only
        if (start) {
            // quoteObj = await helpers.fetchQuoteObject(gameMode);

            // Splits the character's name on white spaces into an array
            var nameArray = quoteObj.character.split(" ");

            // Convert every word to lower case
            quoteObj.acceptableAnswers = nameArray.map(x => x.toLowerCase());
            quoteObj.acceptableAnswers.push(quoteObj.character.toLowerCase());

            helpers.generateHintString(quoteObj.character, quoteObj);

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
            hint1,
            hint2,
            animeToggled,
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
        guesses.unshift(req.body.guessTerm);

        // If the character guess is correct, redirect to success page
        if (quoteObj.acceptableAnswers.includes(characterGuess)) {
            res.redirect('/success');
        } else {
            wrongGuessCount += 1;
            if (wrongGuessCount >= 6) {
                res.redirect('/failure');
            } else {
                if (wrongGuessCount >= 4) {
                    hint2 = true;
                }
                if (wrongGuessCount >= 2) {
                    hint1 = true;
                }
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
    wrongGuessCount = 0;
    hint1 = false;
    hint2 = false;

    // quoteObj = await helpers.fetchQuoteObject(gameMode);

    // Splits the character's name on white spaces into an array
    var nameArray = quoteObj.character.split(" ");

    // Convert every word to lower case
    quoteObj.acceptableAnswers = nameArray.map(x => x.toLowerCase());
    quoteObj.acceptableAnswers.push(quoteObj.character.toLowerCase());

    helpers.generateHintString(quoteObj.character, quoteObj);

    console.log(`Character: ${quoteObj.character}`);
    console.log(`Anime: ${quoteObj.anime}`);
    res.redirect('/');
}

/**
 * POST /
 * Change Mode
 */
exports.changeMode = async(req, res) => {
    gameMode = req.body.gameMode;

    res.redirect('/playAgain');
}

/**
 * POST /
 * Change To Anime
 */

exports.changeToAnime = async(req, res) => {
    animeToggled = true;
    res.redirect('/');

}

/**
 * POST /
 * Change To Shows
 */
exports.changeToShows = async(req, res) => {
    animeToggled = false;
    res.redirect('/');
}
