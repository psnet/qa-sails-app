/**
 * AnswerController
 *
 * @description :: Server-side logic for managing answers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  add: function(req, res) {
    Answer.create({
      user: req.param('user'),
      text: req.param('text'),
      question: req.param('question_id')
    }).then(function(answer) {
      return res.redirect('/question/view/' + answer.question);
    }).catch(function(error) {
      return res.serverError(error);
    });
  }
	
};

