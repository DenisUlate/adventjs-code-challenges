/**
 * @param {string[][]} routes - Array of [origin, destination] pairs
 * @returns {string[]} The reconstructed route
 */
function revealSantaRoute(routes) {
	// Paso 1: Crear un Map con TODOS los segmentos para lookup O(1)
	// Clave: origen, Valor: destino
	const routeMap = new Map();
	const destinations = new Set();

	for (const [origin, destination] of routes) {
		routeMap.set(origin, destination);
		destinations.add(destination);
	}

	// Paso 2: Encontrar el verdadero punto de inicio
	// Es el origen que NO aparece como destino de ningún segmento
	let startPoint = routes[0][0]; // Default al primer elemento

	for (const [origin] of routes) {
		if (!destinations.has(origin)) {
			startPoint = origin;
			break;
		}
	}

	// Paso 3: Construir la ruta desde el punto de inicio
	const route = [startPoint];
	let currentDestination = startPoint;

	// Paso 4: Seguir la cadena mientras existan conexiones
	while (routeMap.has(currentDestination)) {
		const nextDestination = routeMap.get(currentDestination);
		route.push(nextDestination);
		currentDestination = nextDestination;
	}

	return route;
}

// Casos de prueba
console.log("Test 1:");
console.log(
	revealSantaRoute([
		["MEX", "CAN"],
		["UK", "GER"],
		["CAN", "UK"],
	])
);
// Expected: ['MEX', 'CAN', 'UK', 'GER']

console.log("\nTest 2:");
console.log(
	revealSantaRoute([
		["USA", "BRA"],
		["JPN", "PHL"],
		["BRA", "UAE"],
		["UAE", "JPN"],
		["CMX", "HKN"],
	])
);
// Expected: ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

console.log("\nTest 3:");
console.log(
	revealSantaRoute([
		["STA", "HYD"],
		["ESP", "CHN"],
	])
);
// Expected: ['STA', 'HYD']
