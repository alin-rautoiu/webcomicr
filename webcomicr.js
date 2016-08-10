var series = [
    {
        'id': '1',
        'name': 'Cum ar fi...',
        'episodes': [
            {
                'id': '1',
                'row': '2',
                'columns': '4',
                'name': 'Ep 1',
                'images': [
                    {
                        'id': '1',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/01/1_1.jpeg'
                    },
                    {
                        'id': '2',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/01/1_2.jpeg'
                    },
                    {
                        'id': '3',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/01/1_3.jpeg'
                    },
                    {
                        'id': '4',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/01/1_4.jpeg'
                    },
                    {
                        'id': '5',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/01/1_5.jpeg'
                    },
                    {
                        'id': '6',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/01/1_6.jpeg'
                    },
                    {
                        'id': '7',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/01/1_7.jpeg'
                    },
                    {
                        'id': '8',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/01/1_8.jpeg'
                    }
                ]
            },
            {
                'id': '2',
                'row': '2',
                'columns': '4',
                'name': 'Ep 2',
                'images': [
                    {
                        'id': '1',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/02/2_1.jpeg'
                    },
                    {
                        'id': '2',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/02/2_2.jpeg'
                    },
                    {
                        'id': '3',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/02/2_3.jpeg'
                    },
                    {
                        'id': '4',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/02/2_4.jpeg'
                    },
                    {
                        'id': '5',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/02/2_5.jpeg'
                    },
                    {
                        'id': '6',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/02/2_6.jpeg'
                    },
                    {
                        'id': '7',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/02/2_7.jpeg'
                    },
                    {
                        'id': '8',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/02/2_8.jpeg'
                    }
                ]
            },
            {
                'id': '3',
                'row': '2',
                'columns': '4',
                'name': 'Ep 2',
                'images': [
                    {
                        'id': '1',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/03/3_1.jpeg'
                    },
                    {
                        'id': '2',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/03/3_2.jpeg'
                    },
                    {
                        'id': '3',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/03/3_3.jpeg'
                    },
                    {
                        'id': '4',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/03/3_4.jpeg'
                    },
                    {
                        'id': '5',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/03/3_5.jpeg'
                    },
                    {
                        'id': '6',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/03/3_6.jpeg'
                    },
                    {
                        'id': '7',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/03/3_7.jpeg'
                    },
                    {
                        'id': '8',
                        'path': 'https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum ar fi/03/3_8.jpeg'
                    }
                ]
            }
        ]
    }]

var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

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

app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/getSeries/:id', function(req, res) {
    var id = req.params.id;

    var theSeries = getSeriesById(id);
    if (theSeries == null) {
        res.send("No such series!");
        return;  
    }

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(theSeries));
    return;        
});

app.get('/getEpisodesList/:seriesId', function(req, res) {
    var seriesId = req.params.seriesId;
   
    var theSeries = getSeriesById(seriesId);
    if (theSeries == null) {
        res.send("No such series!");
        return;  
    }

    var episodeList = buildEpisodesList(theSeries);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(episodeList));
    return;      
});

app.get('/getSeriesList/', function(req, res) {   
    var episodeList = buildSeriesList();

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(episodeList));
    return;
});

var server = app.listen(process.env.PORT || 3002);

