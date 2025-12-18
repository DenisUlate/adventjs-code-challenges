function hasFourInARow(board) {
	const rows = board.length;
	const cols = board[0]?.length || 0;

	// Definir todas las direcciones: [deltaFila, deltaColumna]
	const directions = [
		[0, 1], // Horizontal →
		[1, 0], // Vertical ↓
		[1, 1], // Diagonal ↘
		[1, -1], // Diagonal ↙
	];

	// Función helper para verificar si hay 4 celdas consecutivas iguales
	const checkDirection = (startRow, startCol, rowDelta, colDelta) => {
		const cell = board[startRow][startCol];
		if (cell === ".") return false;

		for (let i = 1; i < 4; i++) {
			const newRow = startRow + rowDelta * i;
			const newCol = startCol + colDelta * i;

			// Verificar límites del tablero
			if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
				return false;
			}

			if (board[newRow][newCol] !== cell) {
				return false;
			}
		}
		return true;
	};

	// Revisar cada celda como punto de inicio potencial
	for (let row = 0; row < rows; row++) {
		for (let col = 0; col < cols; col++) {
			// Probar todas las direcciones desde esta celda
			for (const [rowDelta, colDelta] of directions) {
				if (checkDirection(row, col, rowDelta, colDelta)) {
					return true;
				}
			}
		}
	}

	return false;
}
