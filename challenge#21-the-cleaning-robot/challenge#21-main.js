/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function clearGifts(warehouse, drops) {
	// Función auxiliar: Verificar si una fila está completa
	const isRowComplete = (row) => row.every((cell) => cell === "#");

	// Función auxiliar: Eliminar filas commpletas
	const removeCompleteRows = (wh) => {
		const width = wh[0].length;
		const filteredRows = wh.filter((row) => !isRowComplete(row));
		const removedCount = wh.length - filteredRows.length;

		// Agregar filas vacías al inicio
		for (let i = 0; i < removedCount; i++) {
			filteredRows.unshift(Array(width).fill("."));
		}
		return filteredRows;
	};

	// Función auxiliar: Dropear un regalo
	const dropGift = (wh, col) => {
		for (let row = wh.length - 1; row >= 0; row--) {
			if (wh[row][col] === ".") {
				wh[row][col] = "#";
				break;
			}
		}
	};

	// Procesar cada drop
	for (const col of drops) {
		dropGift(warehouse, col);
		warehouse = removeCompleteRows(warehouse);
	}

	return warehouse;
}
