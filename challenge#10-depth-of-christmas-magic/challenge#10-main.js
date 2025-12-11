/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {
	let currentDepth = 0;
	let maxDepth = 0;

	for (const char of s) {
		if (char === "[") {
			currentDepth++;
			maxDepth = Math.max(maxDepth, currentDepth);
		} else if (char === "]") {
			currentDepth--;
			if (currentDepth < 0) {
				return -1; // Unmatched closing bracket
			}
		}
	}

	// If there are unmatched opening brackets
	if (currentDepth !== 0) {
		return -1;
	}
	return maxDepth;
}
