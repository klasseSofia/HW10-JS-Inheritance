/**
 * Created by Super on 13.07.2017.
 */
    var Gladiators = function () {
        this.name = 'not name';
        this.attack = 0;
        this.hitpoints = 0;

    this.setAttack = function () {
        this.attack = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    };

    this.setHitpoints = function () {
        this.hitpoints = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    };

    this.fight = function (enemy) {
            this.setHitpoints();
            enemy.setHitpoints();

          while (this.hitpoints != 0 || enemy.hitpoints != 0) {
              this.setAttack();
              enemy.setAttack();

              if (this.attack > enemy.attack) {
                  enemy.hitpoints -= enemy.attack;
              } else {
                  this.hitpoints -= this.attack;
              }
          }
          if(this.hitpoints === 0) {
              console.log('You died')
          } else {console.log('Your enemy died')}
        };
    };

    var Champion = function () {
        this.name = 'champion';
    };

    var Monster = function () {
        this.name = 'monster';
    };

    Champion.prototype = new Gladiators();
    Monster.prototype = new Gladiators();

    var heracles = new Champion();
    var boar = new Monster();

    console.log(heracles.fight(boar));