'use strict';

exports.ok = function (req, res) {
    res.json('OK');
};

exports.allotir = function (req, res) {
    res.json('Allotir ' + req.params.lots);
};