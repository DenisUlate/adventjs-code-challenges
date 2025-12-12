/**
 * @param {string} elf1 - The moves of the first elf
 * @param {string} elf2 - The moves of the second elf
 * @return {number} - The result of the battle
 */
function elfBattle(elf1, elf2) {
	let hp1 = 3;
	let hp2 = 3;

	for (let i = 0; i < elf1.length; i++) {
		const move1 = elf1[i];
		const move2 = elf2[i];

		function calcDamege(attackerMove, defenderMove) {
			if (attackerMove === "F") return 2;
			if (attackerMove === "A" && defenderMove !== "B") return 1;
			return 0;
		}

		const damage1 = calcDamege(move2, move1);
		const damage2 = calcDamege(move1, move2);

		hp1 -= damage1;
		hp2 -= damage2;

		if (hp1 <= 0 || hp2 <= 0) break;
	}

	if (hp1 > hp2) return 1;
	if (hp2 > hp1) return 2;
	return 0;
}

// Tests
console.log(elfBattle("A", "B")); // Esperado: 0
console.log(elfBattle("F", "B")); // Esperado: 1
console.log(elfBattle("AAB", "BBA")); // Esperado: 0
console.log(elfBattle("AFA", "BBA")); // Esperado: 1
console.log(elfBattle("AFAB", "BBAF")); // Esperado: 1
console.log(elfBattle("AA", "FF")); // Esperado: 2
