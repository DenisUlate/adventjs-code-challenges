/**
 * @param {string[]} factory - The factory layout
 * @returns {'completed'|'broken'|'loop'} Result of the gift journey
 */
function runFactory(factory) {
	// Code here

	let x = 0,
		y = 0;
	const visited = new Set();

	while (true) {
		const key = `${x},${y}`;
		if (visited.has(key)) return "loop";
		visited.add(key);

		const cell = factory[y][x];

		if (cell === ".") {
			return "completed";
		}

		if (cell === ">") x++;
		else if (cell === "<") x--;
		else if (cell === "^") y--;
		else if (cell === "v") y++;

		const rows = factory.length;
		const cols = factory[0].length;

		if (y < 0 || y >= rows || x < 0 || x >= cols) {
			return "broken";
		}
	}
}

// Tests
console.log(runFactory([">>."]), "→ expected: completed");
console.log(runFactory([">>>"]), "→ expected: broken");
console.log(runFactory([">><"]), "→ expected: loop");
console.log(runFactory([">>v", "..<"]), "→ expected: completed");
console.log(runFactory([">>v", "<<<"]), "→ expected: broken");
console.log(runFactory([">v.", "^.."]), "→ expected: completed");
console.log(runFactory(["v.", "^."]), "→ expected: loop");
