import { fizbuzz } from '../core/fizzbuzz';

/*
Examples to test (in order)

 - 1 -> 1
 - 3 -> "buzz"
 - 5 -> "fizz"
 - 15 -> "fizzbuzz"
 - any number divisible by 3 -> "buzz"
 - any number divisible by 5 -> "fizz"
 - any number divisible by 3 and 5 -> "fizzbuzz"
 - the rest of numbers -> number
 */

describe('Fizzbuzz should', () => {
	it('do nothing with number 1', () => {
		const result = fizbuzz(1);
		expect(result).toBe(1);
	});
});
