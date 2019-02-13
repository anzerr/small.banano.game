
class Block {

	constructor(game, id) {
		this.game = game;
		this.type = id;
	}

	can() {
		let out = [];
		(() => {
			let x = this.game.findNumber(1).x;
			let y = this.game.findNumber(1).y;
			if (this.game.isFree(y + 2, x) && this.game.isFree(y + 2, x + 1)) {
				out.push(['down', 1]);
			}
			if (this.game.isFree(y - 1, x) && this.game.isFree(y - 1, x + 1)) {
				out.push(['up', 1]);
			}
			if (this.game.isFree(y, x + 2) && this.game.isFree(y + 1, x + 2)) {
				out.push(['right', 1]);
			}
			if (this.game.isFree(y, x - 1) && this.game.isFree(y + 1, x - 1)) {
				out.push(['left', 1]);
			}
		})();
		(() => {
			let x = this.game.findNumber(2).x;
			let y = this.game.findNumber(2).y;
			if (this.game.isFree(y + 2, x) && this.game.isFree(y + 1, x + 1)) {
				out.push(['down', 2]);
			}
			if (this.game.isFree(y - 1, x) && this.game.isFree(y - 1, x + 1)) {
				out.push(['up', 2]);
			}

			if (this.game.isFree(y, x + 2) && this.game.isFree(y + 1, x + 1)) {
				out.push(['right', 2]);
			}
			if (this.game.isFree(y, x - 1) && this.game.isFree(y + 1, x - 1)) {
				out.push(['left', 2]);
			}
		})();
		(() => {
			let x = this.game.findNumber(3).x;
			let y = this.game.findNumber(3).y;
			if (this.game.isFree(y + 1, x) && this.game.isFree(y + 2, x + 1)) {
				out.push(['down', 3]);
			}
			if (this.game.isFree(y - 1, x) && this.game.isFree(y - 1, x + 1)) {
				out.push(['up', 3]);
			}
			if (this.game.isFree(y, x + 2) && this.game.isFree(y + 1, x + 2)) {
				out.push(['right', 3]);
			}
			if (this.game.isFree(y, x - 1) && this.game.isFree(y + 1, x)) {
				out.push(['left', 3]);
			}
		})();
		(() => {
			let x = this.game.findNumber(4).x;
			let y = this.game.findNumber(4).y;
			if (this.game.isFree(y + 2, x) && this.game.isFree(y + 2, x + 1)) {
				out.push(['down', 4]);
			}
			if (this.game.isFree(y - 1, x) && this.game.isFree(y, x + 1)) {
				out.push(['up', 4]);
			}
			if (this.game.isFree(y, x + 1) && this.game.isFree(y + 1, x + 2)) {
				out.push(['right', 4]);
			}
			if (this.game.isFree(y, x - 1) && this.game.isFree(y + 1, x - 1)) {
				out.push(['left', 4]);
			}
		})();
		(() => {
			let x = this.game.findNumber(5).x;
			let y = this.game.findNumber(5).y;
			if (this.game.isFree(y + 2, x) && this.game.isFree(y + 2, x - 1)) {
				out.push(['down', 5]);
			}
			if (this.game.isFree(y - 1, x) && this.game.isFree(y, x - 1)) {
				out.push(['up', 5]);
			}
			if (this.game.isFree(y, x + 1) && this.game.isFree(y + 1, x + 1)) {
				out.push(['right', 5]);
			}
			if (this.game.isFree(y, x - 1) && this.game.isFree(y + 1, x - 2)) {
				out.push(['left', 5]);
			}
		})();
		return out;
	}

	left() {
		let type = 'left' + this.type;
		if (type === 'left1') {
			let x = this.game.findNumber(1).x;
			let y = this.game.findNumber(1).y;

			if (this.game.isFree(y, x - 1) && this.game.isFree(y + 1, x - 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x + 1] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y][x] = 1;
				this.game.state[y + 1][x] = 1;
				this.game.state[y][x - 1] = 1;
				this.game.state[y + 1][x - 1] = 1;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'left2') {
			let x = this.game.findNumber(2).x;
			let y = this.game.findNumber(2).y;

			if (this.game.isFree(y, x - 1) && this.game.isFree(y + 1, x - 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y][x] = 2;
				this.game.state[y][x - 1] = 2;
				this.game.state[y + 1][x - 1] = 2;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'left3') {
			let x = this.game.findNumber(3).x;
			let y = this.game.findNumber(3).y;

			if (this.game.isFree(y, x - 1) && this.game.isFree(y + 1, x)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x + 1] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y][x - 1] = 3;
				this.game.state[y][x] = 3;
				this.game.state[y + 1][x] = 3;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'left4') {
			let x = this.game.findNumber(4).x;
			let y = this.game.findNumber(4).y;

			if (this.game.isFree(y, x - 1) && this.game.isFree(y + 1, x - 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x + 1] = 0;

				this.game.state[y][x - 1] = 4;
				this.game.state[y + 1][x - 1] = 4;
				this.game.state[y + 1][x] = 4;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'left5') {
			let x = this.game.findNumber(5).x;
			let y = this.game.findNumber(5).y;

			if (this.game.isFree(y, x - 1) && this.game.isFree(y + 1, x - 2)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x - 1] = 0;

				this.game.state[y][x - 1] = 5;
				this.game.state[y + 1][x - 1] = 5;
				this.game.state[y + 1][x - 2] = 5;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}
	}

	right() {
		let type = 'right' + this.type;
		if (type === 'right1') {
			let x = this.game.findNumber(1).x;
			let y = this.game.findNumber(1).y;

			if (this.game.isFree(y, x + 2) && this.game.isFree(y + 1, x + 2)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x + 1] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y][x + 1] = 1;
				this.game.state[y + 1][x + 1] = 1;
				this.game.state[y][x + 2] = 1;
				this.game.state[y + 1][x + 2] = 1;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'right2') {
			let x = this.game.findNumber(2).x;
			let y = this.game.findNumber(2).y;

			if (this.game.isFree(y, x + 2) && this.game.isFree(y + 1, x + 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y][x + 1] = 2;
				this.game.state[y][x + 2] = 2;
				this.game.state[y + 1][x + 1] = 2;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'right3') {
			let x = this.game.findNumber(3).x;
			let y = this.game.findNumber(3).y;

			if (this.game.isFree(y, x + 2) && this.game.isFree(y + 1, x + 2)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x + 1] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y][x + 1] = 3;
				this.game.state[y][x + 2] = 3;
				this.game.state[y + 1][x + 2] = 3;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'right4') {
			let x = this.game.findNumber(4).x;
			let y = this.game.findNumber(4).y;

			if (this.game.isFree(y, x + 1) && this.game.isFree(y + 1, x + 2)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x + 1] = 0;

				this.game.state[y][x + 1] = 4;
				this.game.state[y + 1][x + 1] = 4;
				this.game.state[y + 1][x + 2] = 4;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'right5') {
			let x = this.game.findNumber(5).x;
			let y = this.game.findNumber(5).y;

			if (this.game.isFree(y, x + 1) && this.game.isFree(y + 1, x + 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x - 1] = 0;

				this.game.state[y][x + 1] = 5;
				this.game.state[y + 1][x + 1] = 5;
				this.game.state[y + 1][x] = 5;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}
	}

	down() {
		let type = 'down' + this.type;
		if (type === 'down1') {
			let x = this.game.findNumber(1).x;
			let y = this.game.findNumber(1).y;

			if (this.game.isFree(y + 2, x) && this.game.isFree(y + 2, x + 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x + 1] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y + 1][x] = 1;
				this.game.state[y + 1 + 1][x] = 1;
				this.game.state[y + 1 + 1][x + 1] = 1;
				this.game.state[y + 1][x + 1] = 1;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'down2') {
			let x = this.game.findNumber(2).x;
			let y = this.game.findNumber(2).y;

			if (this.game.isFree(y + 2, x) && this.game.isFree(y + 1, x + 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y + 1][x] = 2;
				this.game.state[y + 1][x + 1] = 2;
				this.game.state[y + 2][x] = 2;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'down3') {
			let x = this.game.findNumber(3).x;
			let y = this.game.findNumber(3).y;

			if (this.game.isFree(y + 1, x) && this.game.isFree(y + 2, x + 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x + 1] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y + 1][x] = 3;
				this.game.state[y + 1][x + 1] = 3;
				this.game.state[y + 2][x + 1] = 3;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'down4') {
			let x = this.game.findNumber(4).x;
			let y = this.game.findNumber(4).y;

			if (this.game.isFree(y + 2, x) && this.game.isFree(y + 2, x + 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x + 1] = 0;

				this.game.state[y + 1][x] = 4;
				this.game.state[y + 1 + 1][x] = 4;
				this.game.state[y + 1 + 1][x + 1] = 4;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'down5') {
			let x = this.game.findNumber(5).x;
			let y = this.game.findNumber(5).y;

			if (this.game.isFree(y + 2, x) && this.game.isFree(y + 2, x - 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x - 1] = 0;

				this.game.state[y + 1][x] = 5;
				this.game.state[y + 1 + 1][x] = 5;
				this.game.state[y + 1 + 1][x - 1] = 5;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}
	}

	up() {
		let type = 'up' + this.type;
		if (type === 'up1') {
			let x = this.game.findNumber(1).x;
			let y = this.game.findNumber(1).y;

			if (this.game.isFree(y - 1, x) && this.game.isFree(y - 1, x + 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x + 1] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y - 1][x] = 1;
				this.game.state[y - 1][x + 1] = 1;
				this.game.state[y][x] = 1;
				this.game.state[y][x + 1] = 1;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'up2') {
			let x = this.game.findNumber(2).x;
			let y = this.game.findNumber(2).y;

			if (this.game.isFree(y - 1, x) && this.game.isFree(y - 1, x + 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y][x] = 2;
				this.game.state[y - 1][x] = 2;
				this.game.state[y - 1][x + 1] = 2;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'up3') {
			let x = this.game.findNumber(3).x;
			let y = this.game.findNumber(3).y;

			if (this.game.isFree(y - 1, x) && this.game.isFree(y - 1, x + 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x + 1] = 0;
				this.game.state[y][x + 1] = 0;

				this.game.state[y - 1][x] = 3;
				this.game.state[y - 1][x + 1] = 3;
				this.game.state[y][x + 1] = 3;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'up4') {
			let x = this.game.findNumber(4).x;
			let y = this.game.findNumber(4).y;

			if (this.game.isFree(y - 1, x) && this.game.isFree(y, x + 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x + 1] = 0;

				this.game.state[y][x] = 4;
				this.game.state[y - 1][x] = 4;
				this.game.state[y][x + 1] = 4;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}

		if (type === 'up5') {
			let x = this.game.findNumber(5).x;
			let y = this.game.findNumber(5).y;

			if (this.game.isFree(y - 1, x) && this.game.isFree(y, x - 1)) {
				this.game.state[y][x] = 0;
				this.game.state[y + 1][x] = 0;
				this.game.state[y + 1][x - 1] = 0;

				this.game.state[y][x] = 5;
				this.game.state[y - 1][x] = 5;
				this.game.state[y][x - 1] = 5;
				this.game.pathString += type + ' ';
				this.game.newc();
			}
		}
	}

}

module.exports = Block;
