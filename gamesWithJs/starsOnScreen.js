function delayTime(seconds) {
	for (let count = 0; count < 8e8 * seconds; count++) { }
}

function randomNum(lowerLimit, upperLimit) {
	return (Math.floor(Math.random() * (upperLimit - lowerLimit))) + lowerLimit;
}

function addColor(string) {
	const colorNo = Math.floor(Math.random() * 256);
	return `\x1B[38;5;${colorNo}m ${string} \x1B[0m`;
}

function getLimit(index) {
	const limits = [[0, 35], [36, 60], [61, 90], [91, 128]];
	return limits[index % limits.length];
}

function padLeftRandom(string, index) {
	const limit = getLimit(index);
	const lowerLimit = limit[0];
	const upperLimit = limit[1];

	return string.padStart(randomNum(lowerLimit, upperLimit), " ");
}

function wavePattern(index) {
	const waveTypes = ["\n", "\n ", " \n "];
	return waveTypes[index % waveTypes.length];
}

function displayType(type, index) {

	switch (type) {
		case 'straight':
			return "\n";
		case 'wave':
			return wavePattern(index);
	}

}

function generatePattern(symbol) {
	let pattern = [];

	for (let index = 0; index < 100; index++) {
		const coloredSymbol = addColor(symbol);
		const symPosition = padLeftRandom(coloredSymbol, index);
		pattern.push(symPosition);
	}

	return pattern;
}

function displayPattern(array, type) {
	console.clear();
	const pattern = array;

	for (let index = array.length; index > 47; index--) {
		const movingPattern = pattern.join(displayType(type, index))
		console.log(movingPattern);
		delayTime(1);
		pattern.pop();
		console.clear();
	}

}

function start(args) {
	const symbol = args[0] || "*";
	const displayType = args[1] || "straight";
	const pattern = generatePattern(symbol);
	displayPattern(pattern, displayType);
}

start(Deno.args);
