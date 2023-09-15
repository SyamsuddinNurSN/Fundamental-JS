class Player {
    constructor(name) {
      this.name = name;
      this.health = 100;
      this.power = 10;
    }
  
    hit(power) {
      this.health -= power;
      if (this.health < 0) {
        this.health = 0;
      }
    }
  
    useItem(item) {
      this.health += item.health;
      this.power += item.power;
    }
  
    showStatus() {
      console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
  }
  
  class ShootingGame {
    constructor(player1, player2) {
      this.player1 = player1;
      this.player2 = player2;
    }
  
    getRandomItem() {
      const health = Math.random() < 0.5 ? 0 : 10;
      const power = Math.random() < 0.5 ? 0 : 10;
      
      return { health, power };
    }
  
    start() {
      while (true) {
        console.log("Player sebelum mendapatkan item:");
        this.player1.showStatus();
        this.player2.showStatus();
  
        const item1 = this.getRandomItem();
        const item2 = this.getRandomItem();
  
        this.player1.useItem(item1);
        this.player2.useItem(item2);
  
        console.log("Player mendapatkan item:");
        this.player1.showStatus();
        this.player2.showStatus();
  
        this.player2.hit(this.player1.power);
  
        console.log(`${this.player1.name} menembak ${this.player2.name} dengan power ${this.player1.power}`);
        console.log("Status player setelah pertempuran:");
        this.player1.showStatus();
        this.player2.showStatus();
  
        if (this.player2.health <= 0) {
          console.log(`${this.player1.name} wins!`);
          break;
        } 
  
        [this.player1, this.player2] = [this.player2, this.player1];
      }
    }
  }
  
const Andi = new Player("Andi");
const Budi = new Player("Budi");
  
const game = new ShootingGame(Andi, Budi);
game.start();
  