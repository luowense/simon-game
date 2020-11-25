let vm = new Vue({
    el: '#app',
    data: {
      sequence: [],
      tmp: [],
      hautGauche: false,
      hautDroite: false,
      basGauche: false,
      basDroite: false,
      squareMapping: ["hautGauche", "hautDroite", "basGauche", "basDroite"],
      score: 0
    },
    methods: {
      newGame() {
        this.sequence = [];
        this.score = 0;
        this.nextTurn();
      },
      nextTurn() {
        this.addNewElemToSequence();
        this.allGray();
        this.playSequence(this.tmp[0]);
      },
      allGray() {
        this.hautGauche = false;
        this.hautDroite = false,
          this.basGauche = false,
          this.basDroite = false
      },
      selectSquare(carre) {
        if (carre === this.tmp[0]) {
          vm[carre] = true;
          setTimeout(function() {
            vm.allGray();
            vm.tmp.shift();
            if (!vm.tmp[0]) {
              vm.nextTurn();
              vm.score++;
            }
          }, 400)
        } else {
          alert('Perdu!');
        }
      },
      addNewElemToSequence() {
        this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)]);
        this.tmp = this.sequence.slice();
      },
      playSequence(carre) {
        setTimeout(function () {
          vm[carre] = true;
          setTimeout(function () {
            vm.allGray();
            vm.tmp.shift();
            if (vm.tmp[0]) {
              vm.playSequence(vm.tmp[0]);
            } else {
              vm.tmp = vm.sequence.slice();
            }
          }, 400);
        }, 400);
      }
    }
  });