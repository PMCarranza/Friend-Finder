// dependencies
// path package is needed to get the correct file path for the html

// console.log('htmlRoutes present!');

var path = require('path');

// routing

module.exports = function (app) {

    // html GET requests
    // below code handles when users 'visit' a page
    // in each of the cases the user is shown an html page of content
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
        // console.log('htmlRoutes survey path-- > ' + __dirname);
    });
    app.use('/home', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
        // console.log('htmlRoutes html path-- > ' + __dirname);
        console.log('htmlRoutes--> ' + res);
    });

    // if no matching route is found default to home
    app.use('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));

    });
};