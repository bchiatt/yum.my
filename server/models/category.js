'use strict';

var Mongo  = require('mongodb');

function Category(o, id){
  this.name   = o.name;
  this.userId = Mongo.ObjectID(id);
}

Object.defineProperty(Category, 'collection', {
  get: function(){return global.mongodb.collection('categories');}
});

Category.create = function(o, id, cb){
  var c = new Category(o, id);
  Category.collection.save(c, cb);
};

Category.all = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Category.collection.find({userId:_id}).toArray(cb);
};

Category.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Category.collection.findOne({_id:_id}, cb);
};

module.exports = Category;
