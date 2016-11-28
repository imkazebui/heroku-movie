var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
  titleVi: {type:String, required:'{PATH} is required!'},
  titleEng: String,
  content: {type:String, required:'{PATH} is required!'},
  source: String,
  trailer: String,
  imdbScore: String,
  imdbVotes: String,
  poster: [],
  type: [String],
  director: [String],
  time: Date,
  year: Number,
  region: [String],
  tags: [String],
  actor: [String],
  trailer: String,
  rate: {},
  view: { type: Number },
  like: { type: Number },
  comment: { type: Number }
});
var Movie = mongoose.model('Movie', movieSchema);

function createDefaultMovie() {
  Movie.find({}).exec(function(err, collection) {
    if(collection.length === 0) {
      Movie.create({type: ["comming", "hanhdong", "hoathinh", "vientuong", "tailieu"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2016, titleEng: 'Name default 1', titleVi: 'Name default 1', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["comming", "hanhdong", "hoathinh", "vientuong", "tailieu"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2015, titleEng: 'Name default 2', titleVi: 'Name default 2', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["comming", "hanhdong", "hoathinh", "vientuong", "tailieu"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2014, titleEng: 'Name default 3', titleVi: 'Name default 3', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["comming", "hanhdong", "hoathinh", "vientuong", "tailieu"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2013, titleEng: 'Name default 4', titleVi: 'Name default 4', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["comming", "hanhdong", "hoathinh", "vientuong", "tailieu"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2012, titleEng: 'Name default 5', titleVi: 'Name default 5', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["comming", "hanhdong", "hoathinh", "vientuong", "tailieu"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2011, titleEng: 'Name default 6', titleVi: 'Name default 6', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});

      Movie.create({type: ["suggest", "trungquoc", "nhat", "nga", "my"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2010, titleEng: 'Name default 1', titleVi: 'Name default 1', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["suggest","trungquoc", "nhat", "nga", "my"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2019, titleEng: 'Name default 2', titleVi: 'Name default 2', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["suggest","trungquoc", "nhat", "nga", "my"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2018, titleEng: 'Name default 3', titleVi: 'Name default 3', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["suggest","trungquoc", "nhat", "nga", "my"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2017, titleEng: 'Name default 4', titleVi: 'Name default 4', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["suggest","trungquoc", "nhat", "nga", "my"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2016, titleEng: 'Name default 5', titleVi: 'Name default 5', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["suggest","trungquoc", "nhat", "nga", "my"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2015, titleEng: 'Name default 6', titleVi: 'Name default 6', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});

      Movie.create({type: ["trichdoan", "trungquoc", "nhat", "nga", "my"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2014, titleEng: 'Name default 1', titleVi: 'Name default 1', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["trichdoan", "trungquoc", "nhat", "nga", "my"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2013, titleEng: 'Name default 2', titleVi: 'Name default 2', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["trichdoan", "trungquoc", "nhat", "nga", "my"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2012, titleEng: 'Name default 3', titleVi: 'Name default 3', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["trichdoan", "hanhdong", "hoathinh", "vientuong", "tailieu"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2011, titleEng: 'Name default 4', titleVi: 'Name default 4', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["trichdoan", "hanhdong", "hoathinh", "vientuong", "tailieu"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2010, titleEng: 'Name default 5', titleVi: 'Name default 5', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
      Movie.create({type: ["trichdoan", "hanhdong", "hoathinh", "vientuong", "tailieu"], source: "https://www.youtube.com/embed/DS4DAx1Emm0", trailer: "https://www.youtube.com/embed/DS4DAx1Emm0", year: 2019, titleEng: 'Name default 6', titleVi: 'Name default 6', content: "content default", view: 5, like: 5, comment: 5, poster: ["/img/2.jpg"]});
    }
  })
}

exports.createDefaultMovie = createDefaultMovie;