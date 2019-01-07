new Vue({
  el: '#exercise',
  data: {
    hidden: false,
    shown: true,
    array: ['Max', 'Anna', 'Chris', 'Manu'],
    myObject: {
      title: 'Lord of the Rings',
      author: 'J.R.R. Tolkiens',
      books: '3'
    },
    testData: {
      name: 'TESTOBJECT', 
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    }
  },
  methods: {
    onToggle() {
      this.hidden = !this.hidden;
      this.shown = !this.shown;
    }
  }
});
