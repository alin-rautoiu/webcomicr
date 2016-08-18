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
    thumbnail: String,
    images: [{type: Schema.ObjectId, ref: 'Image'}],
    series: {type: Schema.ObjectId, ref: 'Series'}
});

var seriesSchema = new Schema({
    name: String,
    thumbnail: String,
    episodes: [{type: Schema.ObjectId, ref: 'Episode'}]
});

var Image = mongoose.model('Image', imageSchema);
var Episode = mongoose.model('Episode', episodeSchema);
var Series = mongoose.model('Series', seriesSchema);

// /* Cum ar fi ep 1 */
// var i11 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/01/1_1.jpeg"
// });
// var i12 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/01/1_2.jpeg"
// });
// var i13 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/01/1_3.jpeg"
// });
// var i14 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/01/1_4.jpeg"
// });
// var i15 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/01/1_5.jpeg"
// });
// var i16 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/01/1_6.jpeg"
// });
// var i17 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/01/1_7.jpeg"
// });
// var i18 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/01/1_8.jpeg"
// });

// var e1 = new Episode({
//     "row": "4",
//     "columns": "2",
//     "name": "Ep. 1",
//     "thumbnail": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/01/1_1.jpeg"
// });

// i11.episode = e1;
// i12.episode = e1;
// i13.episode = e1;
// i14.episode = e1;
// i15.episode = e1;
// i16.episode = e1;
// i17.episode = e1;
// i18.episode = e1;
// e1.images = [i11, i12, i13, i14, i15, i16, i17, i18];

// /** Cum ar fi ep 2 **/
// var i21 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/02/2_1.jpeg"
// });
// var i22 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/02/2_2.jpeg"
// });
// var i23 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/02/2_3.jpeg"
// });
// var i24 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/02/2_4.jpeg"
// });
// var i25 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/02/2_5.jpeg"
// });
// var i26 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/02/2_6.jpeg"
// });
// var i27 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/02/2_7.jpeg"
// });
// var i28 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/02/2_8.jpeg"
// });

// var e2 = new Episode({
//     "row": "4",
//     "columns": "2",
//     "name": "Ep. 2",
//     "thumbnail": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/02/2_1.jpeg"
// });

// i21.episode = e2;
// i22.episode = e2;
// i23.episode = e2;
// i24.episode = e2;
// i25.episode = e2;
// i26.episode = e2;
// i27.episode = e2;
// i28.episode = e2;
// e2.images = [i21, i22, i23, i24, i25, i26, i27, i28];

// /** Cum ar fi ep 3 **/
// var i31 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/03/3_1.jpeg"
// });
// var i32 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/03/3_2.jpeg"
// });
// var i33 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/03/3_3.jpeg"
// });
// var i34 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/03/3_4.jpeg"
// });
// var i35 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/03/3_5.jpeg"
// });
// var i36 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/03/3_6.jpeg"
// });
// var i37 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/02/2_7.jpeg"
// });
// var i38 = new Image({
//     "colspan": "1",
//     "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/03/3_8.jpeg"
// });

// var e3 = new Episode({
//     "row": "4",
//     "columns": "2",
//     "name": "Ep. 3",
//     "thumbnail": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/03/3_1.jpeg"
// });

// i31.episode = e3;
// i32.episode = e3;
// i33.episode = e3;
// i34.episode = e3;
// i35.episode = e3;
// i36.episode = e3;
// i37.episode = e3;
// i38.episode = e3;
// e3.images = [i31, i32, i33, i34, i35, i36, i37, i38];

// var s1 = new Series({
//     "name": "Cum ar fi ...",
//     "thumbnail": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/cum%20ar%20fi/01/1_1.jpeg"
// });

// s1.episodes = [e1, e2, e3];
// e1.series = s1;
// e2.series = s1;
// e3.series = s1;

// s1.save(function(err) {

// });
// s1.episodes.forEach(function(episode, index, array){
//     episode.save(function(err) {

//     });
//     episode.images.forEach(function(image, index, array) {
//         image.save(function(err) {

//         });
//     });
// })

/** Cum ar fi ep 3 **/
var i31 = new Image({
    "colspan": "3",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/01.png"
});
var i32 = new Image({
    "colspan": "3",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/02.png"
});
var i33 = new Image({
    "colspan": "2",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/03.png"
});
var i34 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/04.png"
});
var i35 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/05.png"
});
var i36 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/06.png"
});
var i37 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/07.png"
});
var i38 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/08.png"
});
var i39 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/09.png"
});
var i310 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/10.png"
});
var i311 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/11.png"
});
var i312 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/12.png"
});
var i313 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/13.png"
});
var i314 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/14.png"
});
var i315 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/15.png"
});
var i316 = new Image({
    "colspan": "1",
    "path": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/16.png"
});

var s231 = new Episode({
    "row": "4",
    "columns": "3",
    "name": "Ep. 1",
    "thumbnail": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/01.png"
});

var s2 = new Series({
    "name": "Olvildliu",
    "thumbnail": "https://raw.githubusercontent.com/alin-rautoiu/webcomicr/master/issues/Olvildliu/01/01.png"
});

s231.images = [i31, i32, i33, i34, i35, i36, i37, i38,
i39, i310, i311, i312, i313, i314, i315, i316];
s2.episodes = [s231];
s231.series = s2;

s2.save(function(err) {

});

s2.episodes.forEach(function(episode, index, array){
    episode.save(function(err) {

    });
    episode.images.forEach(function(image, index, array) {
        image.save(function(err) {

        });
    });
})