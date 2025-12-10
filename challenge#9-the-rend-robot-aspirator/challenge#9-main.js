/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
	// Dividimos el tablero en filas y quitamos la primera y última (vacías)
	const rows = board.split("\n").slice(1, -1);
	let renoRow, renoCol;
	let pickedUp = false;

	// Encontramos la posición inicial de Reno
	for (let i = 0; i < rows.length; i++) {
		const col = rows[i].indexOf("@");
		if (col !== -1) {
			renoRow = i;
			renoCol = col;
			break;
		}
	}

	// Definimos los movimientos posibles
	const directions = {
		U: [-1, 0], // arriba: fila decrece
		D: [1, 0], // abajo: fila aumenta
		L: [0, -1], // izquierda: columna decrece
		R: [0, 1], // derecha: columna aumenta
	};

	// Procesamos cada movimiento
	for (const move of moves) {
		const [dRow, dCol] = directions[move];
		renoRow += dRow;
		renoCol += dCol;

		// ¿Salió del tablero?
		if (renoRow < 0 || renoRow >= rows.length || renoCol < 0 || renoCol >= rows[renoRow]?.length) {
			return pickedUp ? "success" : "crash";
		}

		const cell = rows[renoRow][renoCol];

		// ¿Chocó con obstáculo?
		if (cell === "#") {
			return pickedUp ? "success" : "crash";
		}

		// ¿Recogió algo?
		if (cell === "*") {
			pickedUp = true;
		}
	}
	return pickedUp ? "success" : "fail";
}

// ============ PRUEBAS ============
const board = `
.....
.*#.*
.@...
.....
`;

console.log(moveReno(board, "D")); // ➞ 'fail'
console.log(moveReno(board, "U")); // ➞ 'success'
console.log(moveReno(board, "RU")); // ➞ 'crash'
console.log(moveReno(board, "RRRUU")); // ➞ 'success'
console.log(moveReno(board, "DD")); // ➞ 'crash'
console.log(moveReno(board, "UUU")); // ➞ 'success'
console.log(moveReno(board, "RR")); // ➞ 'fail'
