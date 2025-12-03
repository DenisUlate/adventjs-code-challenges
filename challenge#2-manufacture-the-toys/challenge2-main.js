/**
 * @param {Array<{ toy: string, quantity: number }>} giftsToProduce
 * @returns {string[]} Array of manufactured gifts
 */
function manufactureGifts(giftsToProduce) {
	return giftsToProduce.flatMap((gift) => {
		const { toy, quantity } = gift;

		// Ignorar cantidades inválidas (menores o iguales a 0, o no numéricas)
		if (typeof quantity !== "number" || quantity <= 0) {
			return [];
		}

		// Crear un array con el juguete repetido 'quantity' veces
		return Array(quantity).fill(toy);
	});
}
