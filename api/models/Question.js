/**
* Question.js
*
* @description :: Questions
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
        title: {
            type: 'string',
            size: 500,
            minLength: 3,
            maxLength: 500,
            required: true
        },
        description: {
            type: 'text',
            minLength: 3,
            maxLength: 2000,
            required: true
        },
        answers_count: {
            type: 'integer',
            defaultsTo: 0
        },
        answers: {
            collection: 'answer',
            via: 'question'
        },


        /**
         * Get URL to view question
         *
         * @return {string}
         */
        getUrl: function () {
            return '/question/view/' + this.id;
        }

    }


};

