// data
// this is the list of 'frinds', I have decided to use greek mythology instead.
// in this case I am hard coding them

console.log('friends present!');

var friendList = [
    {
        name: 'Zeus',
        photo: 'https://images.app.goo.gl/zKX3n2LauZMf1X9o8',
        score: [5, 5, 1, 1, 1, 3, 4, 5, 4, 1]
        
    },
    {
        name: 'Poseidon',
        photo: 'https://images.app.goo.gl/zzDrNj7ZUU2Q5PZ49',
        score: [4, 4, 3, 1, 3, 3, 1, 4, 3, 3]
    }, 
    {
        name: 'Hades',
        photo: 'https://images.app.goo.gl/hDax8JtAP4ubtYZP9',
        score: [5, 1, 3, 4, 2, 1, 3, 1, 4, 3]
    },
    {
        name: 'Hera',
        photo: 'https://images.app.goo.gl/9x3D2Sxk4Hpo6iT3A',
        score: [5, 4, 4, 4, 3, 3, 3, 3, 5, 3]
    },
    {
        name: 'Hestia',
        photo: 'https://images.app.goo.gl/159rckoatdLEhmPF7',
        score: [3, 2, 4, 5, 4, 3, 3, 1, 2, 3]
    },
    {
        name: 'Athena',
        photo: 'https://images.app.goo.gl/YVBz2kA9J3wDUSfd6',
        score: [4, 1, 4, 2, 2, 3, 3, 3, 2, 5]
    },
    {
        name: 'Artemis',
        photo: 'https://images.app.goo.gl/YvPU3mwUThPmCnX79',
        score: [5, 1, 4, 4, 3, 4, 2, 5, 4, 3]
    },
    {
        name: 'Apollo',
        photo: 'https://images.app.goo.gl/ffUYm134B9GfxKDY8',
        score: [3, 5, 2, 1, 2, 4, 2, 5, 4, 3]
    },
    {
        name: 'Hermes',
        photo: 'https://images.app.goo.gl/geHvyCPpzUX3hrcP8',
        score: [3, 3, 5, 1, 4, 3, 2, 5, 2, 5]
    },
    {
        name: 'Persephone',
        photo: 'https://images.app.goo.gl/Lr5o41EDXfPHkyLN6',
        score: [3, 4, 3, 3, 3, 3, 4, 3, 4, 2]
    },
];

// exporting array of objects to make it accessible to other files using require

module.exports = friendList;
