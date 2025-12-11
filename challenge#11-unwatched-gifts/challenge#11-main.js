/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
	let contador = 0;

	const direcciones = [
		[-1, 0], // Arriba (fila - 1)
		[1, 0], // Abajo (fila + 1)
		[0, -1], // Izquierda (columna - 1)
		[0, 1], // Derecha (columna + 1)
	];

	for (let fila = 0; fila < warehouse.length; fila++) {
		for (let columna = 0; columna < warehouse[fila].length; columna++) {
			if (warehouse[fila][columna] === "*") {
				// Verificar si alguna dirección adyacente tiene cámara
				const tieneCamera = direcciones.some(([df, dc]) => {
					return warehouse[fila + df]?.[columna + dc] === "#";
				});

				// Si NO tiene cámara adyacente, incrementar contador
				if (!tieneCamera) {
					contador++;
				}
			}
		}
	}
	return contador;
}

// [".*.",    →  fila 0: . * .
//  ".#.",    →  fila 1: . # .
//  "*.*"]    →  fila 2: * . *
