import { Game } from './Game.js';

let game = new Game(document.getElementById('snake'));
game.drawBackground();
game.drawHead();
game.moveBottom();