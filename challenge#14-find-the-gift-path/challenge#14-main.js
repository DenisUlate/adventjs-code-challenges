/**
 * @param {object} workshop - A representation of the workshop
 * @param {string|number|boolean} gift - The gift to find
 * @returns {number[]} The path to the gift
 */
function findGiftPath(workshop, gift) {
	// Code here
	for (const key of Object.keys(workshop)) {
		const value = workshop[key];
		if (value === gift) {
			return [key];
		}

		if (typeof value === "object" && value !== null) {
			const path = findGiftPath(value, gift);
			if (path.length > 0) {
				return [key, ...path];
			}
		}
	}
	return [];
}

// ========== TESTS ==========
const workshop = {
	storage: {
		shelf: {
			box1: "train",
			box2: "switch",
		},
		box: "car",
	},
	gift: "doll",
};

console.log(findGiftPath(workshop, "train")); // Esperado: ['storage', 'shelf', 'box1']
console.log(findGiftPath(workshop, "switch")); // Esperado: ['storage', 'shelf', 'box2']
console.log(findGiftPath(workshop, "car")); // Esperado: ['storage', 'box']
console.log(findGiftPath(workshop, "doll")); // Esperado: ['gift']
console.log(findGiftPath(workshop, "plane")); // Esperado: []
