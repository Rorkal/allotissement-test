'use strict';

var allotissement = require('../services/allotissementService');

exports.ok = function (req, res) {
    res.json('OK');
};

exports.allotir = function (req, res) {
    var valeurRetour;
    try {
        valeurRetour = allotissement.allotir(req.params.lots);
    } catch(e){
        valeurRetour = e;
        res.status(400);
    }
    res.json(valeurRetour);
};