var express = require('express');
var router = express.Router();
var db = require('../database');

router.get("/all", function(req, res) {
    db.Clown.findAll()
        .then( clowns => {
            res.status(200).send(JSON.stringify(clowns));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/:id", function(req, res) {
    db.Clown.findByPk(req.params.id)
        .then( clowns => {
            res.status(200).send(JSON.stringify(clown));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.put("/", function(req, res) {
    db.Clown.create({
        clownName: req.body.clownName,
        shoeSize: req.body.shoeSize,
        id: req.body.id
        })
        .then( clown => {
            res.status(200).send(JSON.stringify(clown));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/:id", function(req, res) {
    db.Clown.destroy({
        where: {
            id: req.params.id
        }
        })
        .then( () => {
            res.status(200).send();
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = router;
