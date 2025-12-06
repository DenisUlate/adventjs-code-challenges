/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
	const counts = {};

	// 1. Contamos cuántos guantes hay de cada color y mano
	for (const glove of gloves) {
		if (!counts[glove.color]) {
			counts[glove.color] = { L: 0, R: 0 };
		}
		counts[glove.color][glove.hand]++;
	}

	const result = [];

	// 2. Calculamos los pares y generamos el resultado
	for (const color in counts) {
		const pairs = Math.min(counts[color].L, counts[color].R);
		for (let i = 0; i < pairs; i++) {
			result.push(color);
		}
	}

	return result;
}
