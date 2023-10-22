const fetch = require('node-fetch');
const guesses = [];
const quoteObj = {
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
            guesses,
            locals,
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
        guesses.push(req.body.guessTerm);
        res.redirect('/');
        console.log(guesses);
    } catch (error) {
        console.log(error);
    }
}
