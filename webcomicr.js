var series = [
    {
        'id': 1,
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

