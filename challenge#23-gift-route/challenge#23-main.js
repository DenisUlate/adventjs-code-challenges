/**
 * @param {string[][]} map - The town map.
 * @returns {number} - Minimum steps to deliver all gifts.
 */
function minStepsToDeliver(map) {
	let startRow = 0,
		startCol = 0;
	let totalGifts = 0;

	// Encontrar posición de Santa y contar regalos
	for (let row = 0; row < map.length; row++) {
		for (let col = 0; col < map[row].length; col++) {
			if (map[row][col] === "S") {
				startRow = row;
				startCol = col;
			}
			if (map[row][col] === "G") {
				totalGifts++;
			}
		}
	}

	// Si no hay regalos, retornar 0
	if (totalGifts === 0) return 0;

	// Configurar BFS
	const queue = [[startRow, startCol, 0]]; // [fila, columna, pasos]
	const visited = new Set([`${startRow},${startCol}`]);
	let totalSteps = 0;
	let giftsFound = 0;

	// Direcciones: arriba, abajo, izquierda, derecha
	const directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	while (queue.length > 0) {
		const [row, col, steps] = queue.shift();

		// Si encontramos un regalo
		if (map[row][col] === "G") {
			totalSteps += steps;
			giftsFound++;
		}

		// Explorar vecinos
		for (const [dRow, dCol] of directions) {
			const newRow = row + dRow;
			const newCol = col + dCol;
			const key = `${newRow},${newCol}`;

			// Verificar si es válido y no visitado
			if (
				newRow >= 0 &&
				newRow < map.length &&
				newCol >= 0 &&
				newCol < map[newRow].length &&
				map[newRow][newCol] !== "#" &&
				!visited.has(key)
			) {
				visited.add(key);
				queue.push([newRow, newCol, steps + 1]);
			}
		}
	}

	// Si no encontramos todos los regalos, son inalcanzables
	return giftsFound === totalGifts ? totalSteps : -1;
}
