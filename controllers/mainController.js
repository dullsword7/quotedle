/**
 * GET /
 * Homepage
 */

exports.homepage = async(req, res) => {
    const locals = {
        title: 'Quotedle',
        description: 'Quote Guessing Game'
    }

    res.render('index.ejs', locals);
}

exports.check = async(req, res) => {
    const locals = {
        title: 'check',
        description: 'checking guess'
    }
    console.log(req.body.guessTerm);
    res.render('index.ejs', locals);
}
