'use strict';

var allotissement = require('../services/allotissementService');

exports.ok = function (req, res) {
    res.json('OK');
};

exports.allotir = function (req, res) {
    res.json(allotissement.allotir(req.params.lots));
};