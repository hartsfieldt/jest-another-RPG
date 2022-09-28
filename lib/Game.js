const inquirer = require("inquirer");
const Enemy = require("./Enemy");
const player = require("./Player");

function Game() {
  this.roundNumber = 0;
  this.isPlayerTurn = false;
  this.enemies = [];
  this.currentEnemy;
  this.player;
}

Game.prototype.initializeGame = function () {
  this.enemies.push(new Enemy("goblin", "sword"));
  this.enemies.push(new Enemy("orc", "baseball bat"));
  this.enemies.push(new Enemy("skeleton", "axe"));

  this.currentEnemy = this.enemies[0];

  inquirer
    .createPromptModule({
      type: "text",
      name: "name",
      message: "What is your name?",
    })
    .then(({ name }) => {
      this.player = new player(name);
      console.log(this.currentEnemy, this.player);
    });
};

module.exports = Game;
