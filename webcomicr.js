var dogDir = "dogs";
var basePictureUrl = 'https://raw.githubusercontent.com/alin-rautoiu/corgr/master';
var series = [
    {
        'id': 1,
        'name': 'Cum ar fi...',
        'folder': '/cum ar fi',
        'episodes': [
            {
                'id': '1',
                'row': '2',
                'columns': '4',
                'name': 'Ep 1',
                'folder': '/01',
                'images': [
                    {
                        'id': '1',
                        'path': '/1_1.jpeg'
                    },
                    {
                        'id': '2',
                        'path': '/1_2.jpeg'
                    },
                    {
                        'id': '3',
                        'path': '/1_3.jpeg'
                    },
                    {
                        'id': '4',
                        'path': '/1_4.jpeg'
                    },
                    {
                        'id': '5',
                        'path': '/1_5.jpeg'
                    },
                    {
                        'id': '6',
                        'path': '/1_6.jpeg'
                    },
                    {
                        'id': '7',
                        'path': '/1_7.jpeg'
                    },
                    {
                        'id': '8',
                        'path': '/1_8.jpeg'
                    }
                ]
            }
        ]
    }]

var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/getSeries/:id', function(req, res) {
    var id = req.params.id;

    for (var i = 0; i < series.length; i++) {
        if(series[i].id == id) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(series[i]));
            return;
        }
    }

    res.send("No such series!");
    return;    
});

var server = app.listen(process.env.PORT || 3002);

