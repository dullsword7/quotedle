const guesses = [];
/**
 * GET /
 * Homepage
 */

exports.homepage = async(req, res) => {
    try {
        const locals = {
            title: 'Quotedle',
            description: 'Quote Guessing Game'
        }

        res.render('index.ejs', {
            guesses,
            locals,
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
        res.render('index.ejs', {
            guesses,
            layout: "../views/layouts/main.ejs"
        });
        console.log(guesses);
    } catch (error) {
        console.log(error);
    }
}
