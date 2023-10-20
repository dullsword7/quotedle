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
