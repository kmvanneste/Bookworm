const { json } = require("express");
const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    console.log("req.query", req.query);
    db.Book.find(req.query)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Book.findById(req.params.id)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Book.create(req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err));
  },

  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbBook => res.json(dbBook))
    .catch(err => res.json(err));
  },

  remove: function(req, res) {
    db.Book.deleteOne({
      _id: req.params.id
    })
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(404).json(err));
  }
};
