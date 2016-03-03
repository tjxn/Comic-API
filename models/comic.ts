/**
 * Created by Trevor Jackson on 04-Feb-2016.
 */
/// <reference path="../typings/browser/ambient/mongoose/mongoose.d.ts"/>

import mongoose = require('mongoose');

var ComicSchema = new mongoose.Schema({
    "Title": String,
    "Public": Boolean,
    "Contributors": {
        "Contributor_1": String,
        "Contributor_2": String,
        "Contributor_3": String,
        "Contributor_4": String,
        "Contributor_5": String
    },
    "Panels": {
        "Panel_1": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_2": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_3": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_4": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_5": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_6": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_7": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_8": {
            "Image_URL": String,
            "Text": String
        },
        "Panel_9": {
            "Image_URL": String,
            "Text": String
        }
    }
});
export = mongoose.model('Comic', ComicSchema);
//module.exports = mongoose.model('Comic', ComicSchema);
