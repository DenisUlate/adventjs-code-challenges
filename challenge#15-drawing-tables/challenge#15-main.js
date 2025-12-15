/**
 * @param {Array<Object>} data - The data to draw the table
 * @param {string} sortBy - The field to sort the table
 * @returns {string}
 */
function drawTable(data, sortBy) {
	const keys = Object.keys(data[0]);

	const sortedData = [...data].sort((a, b) => {
		const valA = a[sortBy];
		const valB = b[sortBy];

		if (typeof valA === "number") {
			return valA - valB;
		}
		return valA.localeCompare(valB);
	});

	const colWidths = keys.map((key, index) => {
		// La letra del encabezado (A, B, C...)
		const headerLetter = String.fromCharCode(65 + index);

		// Encuentra el valor más largo en esa columna
		const maxValueLength = Math.max(...sortedData.map((row) => String(row[key]).length));

		// El ancho es el mayor entre la letra y el valor más largo
		return Math.max(headerLetter.length, maxValueLength);
	});

	const separatorLine = "+" + colWidths.map((w) => "-".repeat(w + 2)).join("+") + "+";

	const headerRow =
		"|" +
		keys
			.map((_, index) => {
				const letter = String.fromCharCode(65 + index); // A, B, C...
				return " " + letter.padEnd(colWidths[index]) + " ";
			})
			.join("|") +
		"|";

	const dataRows = sortedData.map((row) => {
		return (
			"|" +
			keys
				.map((key, index) => {
					const value = String(row[key]);
					return " " + value.padEnd(colWidths[index]) + " ";
				})
				.join("|") +
			"|"
		);
	});
	return [
		separatorLine, // +----+----+
		headerRow, // | A  | B  |
		separatorLine, // +----+----+
		...dataRows, // | valor | valor |
		separatorLine, // +----+----+
	].join("\n");
}
