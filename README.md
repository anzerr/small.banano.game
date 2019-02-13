
### `Intro`
not_idol#5004 made a puzzle so I made a bot to find the solution

### `Solution`
The smallest moveset solution is 47
``` text
down5 down5 down4 down1 down3 right2 down4 left1 down3 right2 up1 up1 left3 left3 up5 up5 down3 up5 right3 down3 right3 down5 left5 left5 up3 right4 right4 down5 down1 up3 up4 down5 down1 left2 up3 up4 right5 down1 right5 down1 left4 left4 left2 up3 up5 up5 right1
```
Here's a script that will play it back on the puzzle
``` javascript
(() => {
	let a = 'down5 down5 down4 down1 down3 right2 down4 left1 down3 right2 up1 up1 left3 left3 up5 up5 down3 up5 right3 down3 right3 down5 left5 left5 up3 right4 right4 down5 down1 up3 up4 down5 down1 left2 up3 up4 right5 down1 right5 down1 left4 left4 left2 up3 up5 up5 right1'
	a = a.split(' ');
	let run = () => {
		let c = a.splice(0, 1)[0];
		if (c) {
			document.getElementById(c).click();
			setTimeout(() => run(), 1000);
		}
	}
	run();
})();
```

### `The Bot`
The bot works by forking every valid action and killing the forks off if they lead to a map state that has already been visited.

you can run it with this like this it should take less than a second
``` bash
node index.js
```