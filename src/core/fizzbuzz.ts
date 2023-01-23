export const fizbuzz = (number: number) => {
	if (number == 15) {
		return 'fizzbuzz';
	}
	if (number % 3 == 0) {
		return 'buzz';
	}
	if (number % 5 == 0) {
		return 'fizz';
	}
	return 1;
};
