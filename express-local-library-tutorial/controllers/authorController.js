var Author = require('../models/author');

exports.author_list = function(req, res, next) {

    Author.find()
      .populate('author')
      .sort([['family_name', 'ascending']])
      .exec(function (err, list_authors) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('author_list', { title: 'Author List', author_list: list_authors });
      });
  
  };

exports.author_detail = function(req, res) {
    res.send('Not Implemented: Author detail: ' + req.params.id);
}

exports.author_create_get = function(req, res) {
    res.send('Not Implemented: Author create GET');
}

exports.author_create_post = function(req, res) {
    res.send('Not Implemented: Author create POST');
}

exports.author_delete_get = function(req, res) {
    res.send('Not Implemented: Author delete GET');
}

exports.author_delete_post = function(req, res) {
    res.send('Not Implemented: Author delete post');
}
exports.author_update_get = function(req, res) {
    res.send('Not Implemented: Author update GET')
}

exports.author_update_post = function(req, res) {
    res.send('Not Implemented: Author update POST')
}