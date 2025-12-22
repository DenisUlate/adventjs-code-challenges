/**
 * @param {string[][]} maze
 * @returns {boolean}
 */
function canEscape(maze) {
	// Encontrar posición inicial de Santa
	let startRow = -1,
		startCol = -1;
	for (let i = 0; i < maze.length; i++) {
		for (let j = 0; j < maze[i].length; j++) {
			if (maze[i][j] === "S") {
				startRow = i;
				startCol = j;
				break;
			}
		}
		if (startRow !== -1) break;
	}

	// BFS
	const queue = [[startRow, startCol]];
	const visited = new Set([`${startRow},${startCol}`]);
	const directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	while (queue.length > 0) {
		const [row, col] = queue.shift();

		if (maze[row][col] === "E") {
			return true;
		}

		for (const [dr, dc] of directions) {
			const newRow = row + dr;
			const newCol = col + dc;
			const key = `${newRow},${newCol}`;

			if (
				newRow >= 0 &&
				newRow < maze.length &&
				newCol >= 0 &&
				newCol < maze[0].length &&
				maze[newRow][newCol] !== "#" &&
				!visited.has(key)
			) {
				visited.add(key);
				queue.push([newRow, newCol]);
			}
		}
	}

	return false;
}
