
const Block = require('./block.js');

class Game {

	constructor() {
		this.count = -1;
		this.state = [
			[],
			[],
			[],
			[],
			[],
			[]
		];
		this.done = false;
		this.blocks = {
			1: new Block(this, 1),
			2: new Block(this, 2),
			3: new Block(this, 3),
			4: new Block(this, 4),
			5: new Block(this, 5),
		};
	}

	save() {
		let _s = {state: []};
		for (let v = 0; v < this.state.length; v++) {
			if (!_s.state[v]) {
				_s.state[v] = [];
			}
			for (let j = 0; j < this.state[v].length; j++) {
				_s.state[v][j] = this.state[v][j];
			}
		}
		_s.count = this.count;
		_s.pathString = this.pathString;
		_s.done = this.done;
		return _s;
	}

	restore(_s) {
		for (let i in _s.state) {
			for (let x in _s.state[i]) {
				this.state[i][x] = _s.state[i][x];
			}
		}
		this.count = _s.count;
		this.pathString = _s.pathString;
		this.done = _s.done;
		return this;
	}

	getHash() {
		let h = '';
		for (let i in this.state) {
			h += this.state[i].join('.') + ' ';
		}
		return h;
	}

	can() {
		return this.blocks[1].can();
	}

	countUp() {
		this.count = this.count + 1;
	}

	init() {
		this.count = -1;
		this.pathString = '';
		this.done = false;

		for (let i = 0; i < this.state.length; i++) {
			this.state[i] = new Array(4).fill(0);
		}

		this.state[0][0] = 2;
		this.state[0][1] = 2;
		this.state[0][2] = 3;
		this.state[0][3] = 3;

		this.state[1][0] = 2;
		this.state[1][1] = 1;
		this.state[1][2] = 1;
		this.state[1][3] = 3;

		this.state[2][0] = 4;
		this.state[2][1] = 1;
		this.state[2][2] = 1;
		this.state[2][3] = 5;

		this.state[3][0] = 4;
		this.state[3][1] = 4;
		this.state[3][2] = 5;
		this.state[3][3] = 5;

		this.newc();
		return this;
	}

	finished() {
		if (!(this.state[0][0] === 2 && this.state[0][1] === 2 && this.state[0][2] === 3 && this.state[0][3] === 3)) {
			return false;
		}

		if (!(this.state[1][0] === 2 && this.state[1][1] === 0 && this.state[1][2] === 0 && this.state[1][3] === 3)) {
			return false;
		}

		if (!(this.state[2][0] === 4 && this.state[2][1] === 0 && this.state[2][2] === 0 && this.state[2][3] === 5)) {
			return false;
		}

		if (!(this.state[3][0] === 4 && this.state[3][1] === 4 && this.state[3][2] === 5 && this.state[3][3] === 5)) {
			return false;
		}

		if (!(this.state[4][0] === 0 && this.state[4][1] === 1 && this.state[4][2] === 1 && this.state[4][3] === 0)) {
			return false;
		}

		// console.log((this.state[5][0] === 0 && this.state[5][1] === 1 && this.state[5][2] === 1 && this.state[5][3] === 0));
		if (!(this.state[5][0] === 0 && this.state[5][1] === 1 && this.state[5][2] === 1 && this.state[5][3] === 0)) {
			return false;
		}

		return true;
	}

	newc() {
		if (!this.done) {
			this.countUp();
			if (this.finished()) {
				console.log('You made it! If you are confident with your solution, hit the COPY SOLUTION button and sent it to not_idol#5004');
				this.done = true;
			}
		}
	}

	findNumber(v) {
		for (let i = 0; i < this.state.length; i++) {
			for (let j = 0; j < this.state[i].length; j++) {
				if (this.state[i][j] === v) {
					let x = j;
					let y = i;
					return {x: x, y: y};
				}
			}
		}
	}

	isFree(a, b) {
		if (a >= 6 || b >= 4 || a < 0 || b < 0) {
			return false;
		}
		return (this.state[a][b] === 0);
	}

}

module.exports = Game;
