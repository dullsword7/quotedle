const fetch = require('node-fetch');
var guesses = [];
var quoteObj = {
    anime: 'one piece',
    character: 'jwbrowning',
    quote: 'I would think that he\'s already seen through your heart, and is simply playing the fool to use you. He yanks on the strings of your cheap pride and you dance like a little marionette.'
}
/**
 * GET /
 * Homepage
 */

exports.homepage = async(req, res) => {
    try {
        // const quoteObj = await fetch("https://animechan.xyz/api/random")
        //     .then((response) => response.json())
        //     .then();

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
        characterGuess = req.body.guessTerm;
        guesses.push(req.body.guessTerm);

        // If the character guess is correct, redirect to success page
        if (characterGuess == quoteObj.character) {
            res.redirect('/success');
        } else {
            res.redirect('/');
        }
        console.log(guesses);
    } catch (error) {
        console.log(error);
    }
}

/**
 * GET /
 * SucessFul Guess Page
 */

exports.successfulGuess = async(req, res) => {
    res.render('successfulGuess.ejs', {
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
    res.render('index.ejs', {
        guesses,
        quoteObj,
        layout: "../views/layouts/main.ejs"
    });
}
