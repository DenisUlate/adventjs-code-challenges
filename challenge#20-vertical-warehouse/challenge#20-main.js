/**
 * @param {string[][]} warehouse
 * @param {number[]} drops
 * @returns {string[][]}
 */
function dropGifts(warehouse, drops) {
	// Paso 1: Procesar cada columna a dropear
	for (const col of drops) {
		// Paso 2: Buscar desde abajo hacia arriba
		for (let row = warehouse.length - 1; row >= 0; row--) {
			// Paso 3: Si encontramos espacio vacío, colocar regalo
			if (warehouse[row][col] === ".") {
				warehouse[row][col] = "#";
				break; // Solo un regalo por drop
			}
		}
	}

	// Paso 4: Retornar warehouse modificado
	return warehouse;
}
