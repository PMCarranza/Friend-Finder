// data
// this is the list of 'frinds', I have decided to use greek mythology instead.
// in this case I am hard coding them

// console.log('friends present!');

var friendList = [
    {
        name: 'Zeus',
        photo: 'images/zeus.jpeg',
        score: [5, 5, 1, 1, 1, 3, 4, 5, 4, 1]
        
    },
    {
        name: 'Poseidon',
        photo: 'images/poseidon.jpeg',
        score: [4, 4, 3, 1, 3, 4, 1, 4, 3, 4]
    }, 
    {
        name: 'Hades',
        photo: 'images/hades.jpeg',
        score: [5, 1, 2, 5, 2, 1, 4, 1, 4, 4]
    },
    {
        name: 'Hera',
        photo: 'images/hera.jpeg',
        score: [5, 5, 4, 4, 2, 4, 4, 3, 5, 4]
    },
    {
        name: 'Hestia',
        photo: 'images/hestia.jpeg',
        score: [2, 3, 4, 5, 3, 4, 2, 1, 2, 4]
    },
    {
        name: 'Athena',
        photo: 'images/athena.jpeg',
        score: [4, 1, 5, 2, 2, 3, 2, 3, 2, 5]
    },
    {
        name: 'Artemis',
        photo: 'images/artemis.jpeg',
        score: [5, 1, 4, 2, 2, 4, 2, 5, 4, 4]
    },
    {
        name: 'Apollo',
        photo: 'images/apollo.jpeg',
        score: [3, 5, 2, 1, 2, 4, 2, 5, 4, 3]
    },
    {
        name: 'Hermes',
        photo: 'images/hermes.jpeg',
        score: [3, 4, 5, 1, 4, 3, 1, 5, 2, 5]
    },
    {
        name: 'Persephone',
        photo: 'images/persephone.jpeg',
        score: [3, 5, 3, 3, 3, 3, 4, 3, 4, 2]
    },
];

// exporting array of objects to make it accessible to other files using require

module.exports = friendList;
