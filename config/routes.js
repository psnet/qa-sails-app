/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /**
     * List of all questions
     */
    '/': '/question/all',
    'get /question/all': {
        controller: 'question',
        action: 'all',
        skipAssets: true
    },

    /**
     * Question adding form
     */
    'get /question/add': {
        view: 'question/add',
        locals: {
            menu_item: 'add'
        },
        skipAssets: true
    },

    /**
     * Add question handler
     */
    'post /question/add': {
        controller: 'question',
        action: 'add',
        skipAssets: true
    },

    /**
     * Question view form
     */
    'get r|^/question/view/(\\d+)$|id': {
        controller: 'question',
        action: 'view',
        skipAssets: true
    },

    /**
     * Response add handler
     */
    'post /answer/add': {
        controller: 'answer',
        action: 'add',
        skipAssets: true
    },

    /**
     * List of questions with answers
     */
    'get /question/with-answer': {
        controller: 'question',
        action: 'withAnswer',
        skipAssets: true
    },

    /**
     * List of unanswered questions
     */
    'get /question/without-answer': {
        controller: 'question',
        action: 'withoutAnswer',
        skipAssets: true
    }

    /***************************************************************************
    *                                                                          *
    * Custom routes here...                                                    *
    *                                                                          *
    * If a request to a URL doesn't match any of the custom routes above, it   *
    * is matched against Sails route blueprints. See `config/blueprints.js`    *
    * for configuration options and examples.                                  *
    *                                                                          *
    ***************************************************************************/

};
