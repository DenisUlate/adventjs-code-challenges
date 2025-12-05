/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
	const blocks = code.match(/\[(.*?)\]/g);
	if (!blocks || blocks.length < 4) return null;

	let pin = "";

	for (const block of blocks) {
		const content = block.slice(1, -1);

		if (content === "<") {
			pin += pin.slice(-1);
			continue;
		}

		// El primer caracter es el número base
		let digit = parseInt(content[0]);

		// Recorremos el resto del string (las operaciones)
		for (let i = 1; i < content.length; i++) {
			const op = content[i];
			if (op === "+") {
				digit = (digit + 1) % 10;
			} else if (op === "-") {
				digit = (digit - 1 + 10) % 10;
			}
		}

		pin += digit;
	}

	return pin;
}
