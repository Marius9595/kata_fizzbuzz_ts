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

	it('convert 3 in "buzz"', () => {
		const result = fizbuzz(3);
		expect(result).toBe('buzz');
	});

	it('convert 5 in "fizz"', () => {
		const result = fizbuzz(5);
		expect(result).toBe('fizz');
	});

	it('convert 15 in "fizzbuzz"', () => {
		const result = fizbuzz(15);
		expect(result).toBe('fizzbuzz');
	});

	it('convert any number divisible by 3 in "buzz"', () => {
		const result = fizbuzz(9);
		expect(result).toBe('buzz');
	});

	it('convert any number divisible by 5 in "fizz"', () => {
		const result = fizbuzz(20);
		expect(result).toBe('fizz');
	});

	it('convert any number divisible by 5 and 3 in "fizzbuzz"', () => {
		const result = fizbuzz(30);
		expect(result).toBe('fizzbuzz');
	});

	it('not convert numbers that are not divisible by 5 or 3', () => {
		const result = fizbuzz(7);
		expect(result).toBe(7);
	});
});
