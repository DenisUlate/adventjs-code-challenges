/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
	let tree = "";
	let position = 0;

	// Loop for each layer of the tree
	for (let i = 0; i < height; i++) {
		// Calculate leading spaces for centering
		const spaces = " ".repeat(height - 1 - i);

		// Calculate number of characters in this row (1, 3, 5...)
		const numChars = 2 * i + 1;

		let row = "";
		for (let j = 0; j < numChars; j++) {
			position++; // Position is cumulative across rows
			if (position % frequency === 0) {
				row += ornament;
			} else {
				row += "*";
			}
		}

		tree += spaces + row + "\n";
	}

	// Add the trunk
	const trunkSpaces = " ".repeat(height - 1);
	tree += trunkSpaces + "#";

	return tree;
}

// Example usage to verify
console.log(drawTree(5, "o", 2));
