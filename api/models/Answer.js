/**
* Answer.js
*
* @description :: Answers for questions
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {
    id: {
      type: 'integer',
      autoIncrement: true,
      primaryKey: true
    },
    user: {
      type: 'string',
      size: 200,
      minLength: 3,
      maxLength: 200,
      required: true
    },
    text: {
      type: 'string',
      size: 2000,
      minLength: 3,
      maxLength: 2000,
      required: true
    },
    question: {
      model: 'question'
    }
  },


  beforeCreate: function(values, cb) {
    Question.findOne(values.question).then(function(item) {
      if (!item) {
        return cb('Question for answer not found');
      }
      cb();
    }).catch(function(error) {
      cb(error);
    });
  },


  afterCreate: function(newlyInsertedRecord, cb) {
    Question.findOne(newlyInsertedRecord.question).then(function(item) {
      if (!item) {
        return cb('Question for answer not found');
      }
      Question.update(item.id, {answers_count: item.answers_count + 1}).then(function(updated_item) {
        cb();
      }).catch(function(error) {
        cb(error);
      });
    }).catch(function(error) {
      cb(error);
    });
  }

};

