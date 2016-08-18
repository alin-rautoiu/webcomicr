var express = require('express');
var path = require('path');
var fs = require('fs');
var app = express();
var series = require('./model.json');
var dbURL = process.env.DATABASE_URL || '';
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:dbadmin@ds153845.mlab.com:53845/heroku_n3ql6tj0');
var Schema = mongoose.Schema;

var imageSchema = new Schema({
    colspan: Number,
    path: String,
    episode: {type: Schema.ObjectId, ref: 'Episode'}
});

var episodeSchema = new Schema({
    row: Number,
    columns: Number,
    name: String,
    images: [{type: Schema.ObjectId, ref: 'Image'}],
    series: {type: Schema.ObjectId, ref: 'Series'}
});

var seriesSchema = new Schema({
    name: String,
    episodes: [{type: Schema.ObjectId, ref: 'Episode'}]
});

var Image = mongoose.model('Image', imageSchema);
var Episode = mongoose.model('Episode', episodeSchema);
var Series = mongoose.model('Series', seriesSchema);

function buildEpisodesList(theSeries) {
    var thumbnails = [];    
    thumbnails['series_name'] = theSeries.name;

    for (var j = 0; j < theSeries.episodes.length; j++) {
        var thumbnail = {};

        thumbnail['id'] = theSeries.episodes[j].id;
        thumbnail['name'] = theSeries.episodes[j].name;
        thumbnail['thumbnail'] = theSeries.episodes[j].images[0].path;

        thumbnails.push(thumbnail);
    }

    return thumbnails;
}

function buildSeriesList() {
    var thumbnails = [];    
    
    for (var i = 0; i < series.length; i++) {
        var thumbnail = {};

        thumbnail['id'] = series[i].id;
        thumbnail['name'] = series[i].name;
        thumbnail['thumbnail'] = series[i].episodes[0].images[0].path;

        thumbnails.push(thumbnail);
    }

    return thumbnails;
}

function getSeriesById(id) {
    for (var i = 0; i < series.length; i++) {
        if (series[i].id == id) {
            return series[i];
        }
    }
}

function getEpisodeById(seriesId, episodeId) {
    var episodes = getSeriesById(seriesId).episodes;

    for (var i = 0; i < episodes.length; i++) {
        if (episodes[i].id == episodeId) {
            return episodes[i];
        }
    }
}

app.engine('html', require('ejs').renderFile);

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/getSeries/:id', function(req, res) {
    var id = req.params.id;

    Series
        .findById(id)
        .populate({
            path: 'episodes',
            populate: {
                path: 'images',
                model: 'Image'
            }
        })
        .exec(function (err, mSeries){
            if (err) { console.log(err); return;}
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(mSeries));
    return;      
    });      
});

app.get('/getEpisode/', function(req, res) {
    var episodeId = req.query.episodeId;

    Episode
        .findById(episodeId)
        .populate({
            path: 'images'
        })
        .exec(function (err, mEpisode){
            if (err) { console.log(err); return;}
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(mEpisode));
    return;      
    })      
});

app.get('/getEpisodesList/:seriesId', function(req, res) {
    var seriesId = req.params.seriesId;
   
    Series
        .findById(seriesId)
        .populate({
            path: 'episodes',
            populate: {
                path: 'images',
                model: 'Image'
            }
        })
        .exec(function (err, mSeries){
            if (err) { console.log(err); return;}
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(mSeries.episodes));
    return;      
    });
});

app.get('/getSeriesList/', function(req, res) {   
    Series
        .find({})
        .populate({
            path: 'episodes',
            populate: {
                path: 'images',
                model: 'Image'
            }
        })
        .exec(function (err, mSeries){
            if (err) { console.log(err); return;}
                res.setHeader('Content-Type', 'application/json');
                res.send(JSON.stringify(mSeries));
    return;      
    })
});


var server = app.listen(process.env.PORT || 3002);

