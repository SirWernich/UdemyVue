new Vue({
  el: '#exercise',
  data: {
    elementEffect: {
      highlight: false,
      shrink: false,
    },
    secondExerciseClasses: [{one: true}, {two: true}, {three: false} ],
    userDefined: '',
    userClass: 'my-class',
    flipColour: true,
    backgroundStyle: '',
    currentProgress: 0,
    isVisible: true
  },
  methods: {
    startEffect: function() {
      this.elementEffect.highlight = true;

      setInterval(() => {
          this.elementEffect = {
            highlight: !this.elementEffect.highlight,
            shrink: !this.elementEffect.shrink
          };
      }, 2000);
    },
    startProgress() {
      const progressbarinterval = setInterval(() => {
        console.log(this.currentProgress);
        this.currentProgress += 10;
        if (this.currentProgress === 100) {
          clearInterval(progressbarinterval);
        }
      }, 2000);
    }
  }
});
