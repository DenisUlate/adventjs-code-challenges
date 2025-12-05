/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
	const parseDate = (dateStr) => {
		const cleanStr = dateStr.replace(/\*/g, "-").replace("@", "T").replace(/\|/g, ":").replace(" NP", "Z");

		return new Date(cleanStr);
	};

	const from = parseDate(fromTime);
	const takeOff = parseDate(takeOffTime);

	const diffMs = takeOff - from;

	return Math.floor(diffMs / 1000);
}

const takeoff = "2025*12*25@00|00|00 NP";

console.log(timeUntilTakeOff("2025*12*24@23|59|30 NP", takeoff)); // Debería ser 30
console.log(timeUntilTakeOff("2025*12*25@00|00|00 NP", takeoff)); // Debería ser 0
console.log(timeUntilTakeOff("2025*12*25@00|00|12 NP", takeoff)); // Debería ser -12
