/**
 * Created by Trevor Jackson on 04-Feb-2016.
 */

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Comic = require('../models/comic.js');

/* GET /comic listing. */
router.get('/', function(req, res, next) {
    Comic.find(function (err, comic) {
        if (err) return next(err);
        res.json(comic);
    });
});


/* GET /comic/id */
router.get('/:id', function(req, res, next) {
    Comic.findById(req.params.id, function (err, post) {

        if (err) {
            res.json('Error: Cannot Find Object With That ID');
            return;
        }

        res.json(post);
    });
});

/* PUT /comic/:id */
router.put('/:id', function(req, res, next) {
    Comic.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, post) {

        if (err) {
            res.json('Error: Cannot Find Object With That ID');
            return;
        }

        res.json(post);
    });
});

/* POST /comic */
router.post('/', function(req, res, next) {

    // If the call doesn't contain the field Title then
    // call was done incorrectly, throw error
    if (req.body.toString().indexOf('Title') < 0){
        res.json("Error: Given object was not a comic");
        return
    }

    Comic.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


/* DELETE /comic/:id */
router.delete('/:id', function(req, res, next) {

    Comic.findByIdAndRemove(req.params.id, req.body, function (err, post) {

        if (err) {
            res.json('Error: Cannot Find Object With That ID');
            return;
        }

        res.json(post);
    });
});

module.exports = router;