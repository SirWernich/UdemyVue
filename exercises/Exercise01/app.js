new Vue({
    el: '#exercise',
    data: {
        name: 'wernich',
        age: 34,
        image: 'https://media.wired.com/photos/5a55457ef41e4c2cd9ee6cb5/master/w_2400,c_limit/Doggo-TopArt-104685145.jpg'
    },
    methods: {
        getRandomNumber() {
            return Math.random();
        }
    }
})