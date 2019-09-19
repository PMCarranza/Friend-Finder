// dependencies
// path package is needed to get the correct file path for the html

var path = require('path');

// routing

module.exports = function (app) {

    // html GET requests
    // below code handles when users 'visit' a page
    // in each of the cases the user is shown an html page of content
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
        console.log('htmlRoutes survey path-- > ' + __dirname);
    });
    app.get('/home', function (req, res) {
        res.senFile(path.join(__dirname, '../public/home.html'));
        console.log('htmlRoutes html path-- > ' + __dirname);

    });
    
    // if no matching route is found default to home
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
        console.log('htmlRoutes default path-- > ' + __dirname);

    });
};