/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
	const counts = {};

	for (const char of toy) {
		const key = char.toLowerCase();
		counts[key] = (counts[key] || 0) + 1;
	}

	for (const char of toy) {
		const key = char.toLowerCase();
		if (counts[key] === 1) return char;
	}

	return "";
}
