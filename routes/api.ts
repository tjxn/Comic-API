/**
 * Created by Trevor Jackson on 3/3/2016.
 */
/// <reference path="../typings/browser/ambient/mongoose/mongoose.d.ts"/>
/// <reference path="../typings/browser/ambient/express/express.d.ts"/>

/**
 * Created by Trevor Jackson on 04-Feb-2016.
 */

import express = require('express');
var router = express.Router();

import mongoose = require('mongoose');
import Comic = require('../models/comic');



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
    var text = JSON.stringify(req.body);
    console.log(req.body)
    if (text.indexOf('Title') < 0){
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