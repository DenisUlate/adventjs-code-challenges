/**
 * @param {string[][]} board
 * @returns {boolean}
 */
function hasFourLights(board) {
	// Code here
	// Para cada fila del tablero
	for (let row = 0; row < board.length; row++) {
		let count = 1;

		// Recorremos cada columna empezando desde la segunda
		for (let col = 1; col < board[row].length; col++) {
			const current = board[row][col];
			const previous = board[row][col - 1];

			// Si la luz actual es igual a la anterior y no es un punto
			if (current !== "." && current === previous) {
				count++;
				if (count >= 4) return true; // Si encontramos 4 luces iguales consecutivas
			} else {
				count = 1; // Reiniciamos el contador si no son iguales
			}
		}
	}

	// Para cada columna del tablero
	const numCols = board[0]?.length || 0;

	for (let col = 0; col < numCols; col++) {
		let count = 1;

		// Recorremos cada fila empezando desde la segunda
		for (let row = 1; row < board.length; row++) {
			const current = board[row][col];
			const previous = board[row - 1][col];

			// Si la luz actual es igual a la anterior y no es un punto
			if (current !== "." && current === previous) {
				count++;
				if (count >= 4) return true; // Si encontramos 4 luces iguales consecutivas
			} else {
				count = 1; // Reiniciamos el contador si no son iguales
			}
		}
	}
	return false;
}

// Horizontal (4 rojas seguidas):
// ['.', '.', '.', '.', '.']
// ['R', 'R', 'R', 'R', '.']  ← ✅ 4 'R' consecutivas
// ['G', 'G', '.', '.', '.']

// Vertical (4 verdes seguidas):
// ['.', 'G', '.', '.']
// ['.', 'G', '.', '.']   ↓
// ['.', 'G', '.', '.']   ↓ 4 'G' consecutivas ✅
// ['.', 'G', '.', '.']

// function hasFourLights(board) {
// 	// 1. Revisar horizontalmente (filas)
// 	//    - Recorrer cada fila
// 	//    - Comparar cada celda con la anterior
// 	//    - Contar consecutivas del mismo color
// 	//    - Si count >= 4, return true

// 	// 2. Revisar verticalmente (columnas)
// 	//    - Recorrer cada columna
// 	//    - Comparar cada celda con la de arriba
// 	//    - Contar consecutivas del mismo color
// 	//    - Si count >= 4, return true

// 	// 3. Si no encontramos nada
// 	return false;
// }
