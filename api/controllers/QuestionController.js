/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  all: function(req, res) {
    Question.find().sort('id desc').then(function(questions) {
      return res.view({
        menu_item: 'all',
        questions: questions
      });
    }).catch(function(error) {
      return res.negotiate(error);
    })
  },


  add: function(req, res) {
    Question.create({
      user: req.param('user'),
      title: req.param('title'),
      description: req.param('description')
    }).then(function(question) {
      return res.redirect('/question/view/' + question.id);
    }).catch(function(error) {
      return res.serverError(error);
    });
  },


  view: function(req, res) {
    Question.findOne(req.param('id')).populate('answers', {sort: 'id desc'}).then(function(question) {
      if (!question) {
        return res.notFound();
      }
      return res.view({
        menu_item: 'view',
        question: question
      });
    }).catch(function(error) {
      return res.negotiate(error);
    });
  },


  withAnswer: function(req, res) {
    Question.find({answers_count: {'>': 0}}).sort('id desc').then(function(questions) {
      return res.view({
        menu_item: 'wa',
        questions: questions
      });
    }).catch(function(error) {
      return res.negotiate(error);
    })
  },


  withoutAnswer: function(req, res) {
    Question.find({answers_count: 0}).sort('id desc').then(function(questions) {
      return res.view({
        menu_item: 'woa',
        questions: questions
      });
    }).catch(function(error) {
      return res.negotiate(error);
    })
  }
	
};

