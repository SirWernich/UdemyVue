Vue.component('i', {
  template: '<h1>Hello Component!</h1>'
})


const vm1 = new Vue({
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs.myButton);

      this.$refs.myButton.innerText = 'test';
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount("#app1");

vm1.$refs.heading.innerText = 'something else';

/*
setTimeout(() => {
  vm1.title = 'changed by timer';
  vm1.show();
}, 3000);
*/

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'the second instance'
  },
  methods: {
    onChange() {
      vm1.title = "changed"
    }
  }
});

const vm3 = new Vue({
  template: `
  <h1>Hello!</h1>
  `
});

vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);









