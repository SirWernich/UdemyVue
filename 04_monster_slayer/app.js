new Vue({
    el: "#app",
    data: {
        gameInProgress: false,
        playerHealth: 100,
        monsterHealth: 100,
        gameEvents: [],
        eventId: 0
    },
    methods: {
        checkWin() {
            if (Math.min(this.playerHealth, this.monsterHealth) > 0) {
                return false;
            }

            this.gameInProgress = false;

            let message = '';

            if (this.playerHealth === 0) {
                message = 'Game Over! You lost!';
            } else {
                message = 'Game Over! You won!';
            }

            window.alert(message);
            return true;
        },
        calculateDamage(min, max, multiplier = 1) {
            const damage = Math.floor(Math.random() * max);

            return Math.max(damage, min) * multiplier;
        },
        attack(multiplier = 1) {
            const playerDamage = this.calculateDamage(5, 12);
            const monsterDamage = this.calculateDamage(3, 10, multiplier);

            this.gameEvents.unshift({
                id: this.generateId(),
                message: `${multiplier > 1 ? 'special attack! ': ''}monster damage: ${monsterDamage}`,
                isPlayer: true
            });
            this.monsterHealth = Math.max(this.monsterHealth - monsterDamage, 0);

            if (this.checkWin()) {
                return;
            }

            this.gameEvents.unshift({
                id: this.generateId(),
                message: `player damage: ${playerDamage}`,
                isPlayer: false
            });
            this.playerHealth = Math.max(this.playerHealth - playerDamage, 0);

            this.checkWin();
        },
        onAttack() {
            this.attack();
        },
        onSpecialAttack() {
            this.attack(2);
        },
        onHeal() {
            this.gameEvents.unshift({
                id: this.generateId(),
                message: 'player healed: +10',
                isPlayer: true
            });

            const playerDamage = this.calculateDamage(5, 12);
            this.playerHealth = Math.min(this.playerHealth + 10 - playerDamage, 100);

            this.gameEvents.unshift({
                id: this.generateId(),
                message: `player damage: ${playerDamage}`,
                isPlayer: false
            });
        },
        onGiveUp() {
            this.gameInProgress = false;
        },
        onStartGame() {
            this.gameInProgress = true;
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.gameEvents.length = 0;
        },
        generateId() {
            return this.eventId++;
        }
    }

});