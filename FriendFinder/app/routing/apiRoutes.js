// loading data
// linking the routes to the data source, in this case friends.js
// using require to import the data
console.log('apiRoutes present!');

var friendList = require('../data/friends.js');

// routing

module.exports = function(app){
    // API gets request
    // in each case below when a user visits a link the code shows JSON of the data in friendList

    app.get('/api/friends', function (req, res) {
        res.json(friendList);
        console.log('apiRoutesjs list--> ' + friendList);
        console.log('apiRoutesjs res--> ' + res);
        console.table(res);
    });

    // app.get('/api/survey', function (req, res) {
    //     res.json(friendList);
    //     console.log('apiRoutesjs list--> ' + friendList);
    //     console.log('apiRoutesjs res--> ' + res);
    //     console.table(res);
    // });
    
    app.post('/api/friends', function (req, res) {
        // the code to make the match goes here
        // the user input needs to get collected and compared to the table of friends and then the match should be displayed
        var difference = 0;
        var matchIt = {
            name: '',
            photo: '',
            friendDifference: 1000
        };
        console.log(req.body);

        // The map() method creates a new array with the results of calling a function for every array element.
        // The map() method calls the provided function once for each element in an array, in order.
        var answers = req.body.answers.map(function (item) {
            return parseInt(item, 10);
        });

        var userData = {
            name: req.body.userName,
            photo: req.body.userPhoto,
            score: answers
        };
        // var userData = JSON.stringify(req.body); 
        // var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScore = userData.score;
        console.log('apiRoutes userData--> ' + JSON.stringify(userData));
        console.log('apiRoutes userName--> ' + userName   );
        console.log('apiRoutes userPhoto--> ' + userPhoto);
        console.log('apiRoutes userScore--> ' + userScore);


        console.log('name: ' + userName);
        console.log('score: ' + userScore);

        var sum = userScore.reduce((a, b) => a + b, 0);
        console.log('=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*');
        console.log('Sum of user score ' + sum);
        console.log('match difference -> ' + matchIt.difference);
        console.log('=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*');

        // for loop to iterate through friends
        for (var i = 0; i<friendList.length; i++){
            console.log('this is at i --> ' + friendList[i].name);
            // variable difference gets assigned to zero every time loop iterates
            difference = 0;
            console.log('difference --> ' + difference);
            console.log('best match --> ' + matchIt.friendDifference);

            var bestMatch = friendList[i].score.reduce((a, b) => a + b, 0);
            console.log('Total score of matched friend --> ' + bestMatch);
            var matchDifference = 0;
            matchDifference += Math.abs(sum - bestMatch);
            console.log('this is the difference between matches --> ' + matchDifference);

            if (matchDifference <= matchIt.friendDifference) {
                matchIt.name = friendList[i].name;
                matchIt.photo = friendList[i].photo;
                matchIt.friendDifference = matchDifference;
            };
            console.log('match difference --> ' + matchDifference);
        }

        console.log('match --> ' + matchIt);
        friendList.push(userData);
        console.log('<---- adding user ---- >');
        console.log(userData);
        res.json(matchIt);
        console.log('<---- User added ---- >');
        console.table(friendList);
    });
};
