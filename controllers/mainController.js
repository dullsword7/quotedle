/**
 * GET /
 * Homepage
 */

exports.homepage = async(req, res) => {
    const locals = {
        title: 'Quotedle',
        description: 'Quote Guessing Game'
    }

    res.render('../views/layouts/homepage.ejs', locals);
}

exports.check = async(req, res) => {
    const locals = {
        title: 'check',
        description: 'checking guess'
    }

    res.render('../views/layouts/homepage.ejs', locals);
}
