// loading data
// linking the routes to the data source, in this case friends.js
// using require to import the data
console.log('apiRoutes present!');

var friendTable = require('../data/friends');

// routing

module.exports = function(app){
    // API gets request
    // in each case below when a user visits a link the code shows JSON of the data in friendTable

    app.get('/api/friends', function (req, res) {
        res.json(friendTable);
        console.log('apiRoutesjs list--> ' + friendTable);
        console.log('apiRoutesjs res--> ' + res);
        console.table(res);
    });

    app.get('/api/survey', function (req, res) {
        res.json(friendTable);
        console.log('apiRoutesjs list--> ' + friendTable);
        console.log('apiRoutesjs res--> ' + res);
        console.table(res);
    });
    
    app.post('/api/friends', function (req, res) {
        // the code to make the match goes here
        // the user input needs to get collected and compared to the table of friends and then the match should be displayed
        var difference = 0;
        var matchIt = {
            name: '',
            photo: '',
            friendDifference: 1000
        };
        var userData = req.body;
        var userName = userData.name;
        var userScore = userData.score;

        var answers = userScore.map(function (item) {
            return parseInt(item, 10);
        });
        userData = {
            name: req.body.name,
            photo: req.body.photo,
            score: answers
        };
        console.log('name: ' + userName);
        console.log('score: ' + userScore);

        var sum = score.reduce((a, b) => a + b, 0);
        console.log('=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*');
        console.log('Sum of user score ' + sum);
        console.log('match difference -> ' + matchIt.difference);
        console.log('=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*');

        // for loop to iterate through friends
        for (var i = 0; i<friendList.length; i++){
            console.log('this is at i --> ' + friendTable[i].name);
            // variable difference gets assigned to zero every time loop iterates
            difference = 0;
            console.log('difference --> ' + difference);
            console.log('best match --> ' + matchIt.friendDifference);

            var bestMatch = friendList[i].score.reduce((a, b) => a + b, 0);
            console.log('Total score of matched friend --> ' + bestMatch);
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

    });
};