'use strict';
module.exports = function (app) {
    var allotissement = require('../controllers/allotissementController');

    
    // allotissement Routes
    app.route('/allotissement')
        .get(allotissement.ok);

    app.route('/allotissement/:lots')
        .get(allotissement.allotir);
};