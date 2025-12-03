/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
	if (size < 2) {
		return "";
	}

	const border = symbol.repeat(size);
	const middle = symbol + " ".repeat(size - 2) + symbol;

	const body = Array(size - 2)
		.fill(middle)
		.join("\n");

	if (body) {
		return border + "\n" + body + "\n" + border;
	}

	return border + "\n" + border;
}
