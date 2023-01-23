export const fizbuzz = (number: number) => {
	const is_divisible_by_three = number % 3 == 0;
	const is_divisible_by_five = number % 5 == 0;

	if (is_divisible_by_three && is_divisible_by_five) {
		return 'fizzbuzz';
	}
	if (is_divisible_by_three) {
		return 'buzz';
	}
	if (is_divisible_by_five) {
		return 'fizz';
	}
	return number;
};
