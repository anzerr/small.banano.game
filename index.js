
const Game = require('./src/game.js');

let g = [new Game().init()];

let invert = {
	down: 'up',
	up: 'down',
	left: 'right',
	right: 'left'
};

const hash = {},
	NS_PER_SEC = 1e9,
	start = process.hrtime();

let done = false, count = 0, hashes = 0, tick = 0;
while(!done && g.length !== 0) {
	let add = [];
	for (let i in g) {
		count = Math.max(count, g[i].count);
		if (g[i].done) {
			const diff = process.hrtime(start);
			console.log(g[i]);
			console.log(`found in ${((diff[0] * NS_PER_SEC + diff[1]) / NS_PER_SEC).toFixed(3)} seconds`);
			done = false;
			g[i].kill = true;
		}
		if (g[i].count > 100) {
			g[i].kill = true;
		}
		if (!g[i].kill) {
			let can = g[i].can(), runs = 0, cc = [];
			for (let x in can) {
				if (can[x].join('') !== g[i].skip) {
					cc.push(can[x]);
				}
			}
			if (cc.length === 0) {
				g[i].kill = true;
			}
			for (let x in cc) {
				if (runs === cc.length - 1) {
					g[i].blocks[cc[x][1]][cc[x][0]]();
					g[i].skip = invert[cc[x][0]] + cc[x][1];
					let h1 = g[i].getHash();
					if (!hash[h1]) {
						hashes += 1;
						hash[h1] = g[i].pathString;
					} else {
						g[i].kill = true;
					}
				} else {
					let ng = new Game().restore(g[i].save());
					ng.blocks[cc[x][1]][cc[x][0]]();
					ng.skip = invert[cc[x][0]] + cc[x][1];
					let h2 = ng.getHash();
					if (!hash[h2]) {
						hashes += 1;
						hash[h2] = ng.pathString;
						add.push(ng);
					}
				}
				runs += 1;
			}
		}
	}
	for (let i in g) {
		if (!g[i].kill) {
			add.push(g[i]);
		}
	}
	g = add;
	console.log(g.length, count, hashes, tick);
	tick++;
}
