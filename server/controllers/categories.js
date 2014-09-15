'use strict';

var Category = require('../models/category');

exports.index = function(req, res){
  Category.all(req.user._id, function(err, categories){
    res.send({categories:categories});
  });
};

exports.create = function(req, res){
  Category.create(req.body, req.user._id, function(err, category){
    res.send({category:category});
  });
};
