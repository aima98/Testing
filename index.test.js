const calculator = require('./calculator');
const {stringLength, reverseString, capitalize} = require('./index');

describe('string length function', () => {
    test('return number if string length is between 1 and 10', () => {
        const str = 'AGUSTD';
        const length = str.length;
        expect(stringLength(str)).toBe(length);
    });

    test('return error if less than 1 or greater than 10', () => {
        const test = '';
        const err = 'Error: string not between 1 and 10';
        expect(stringLength(test)).toBe(err);
    })

})

describe('reverse string function', () => {
    const string = 'yoongi';

    test('return reversed string', () => {
        const reversedStr = string.split('').reverse().join('');
        expect(reverseString(string)).toBe(reversedStr);
    });

    test('check if input is a string', () => {
        expect(typeof reverseString(string) === 'string').toBeTruthy(); 
    });
})

describe('calculator class', () => {
    const operation = new calculator(6, 30);

    describe('divide method', () => {
        test('return correct value', () => {
            expect(operation.divide()).toBe(5);
        });
    
        test('returns correct value', () => {
            expect(operation.divide() !== 25).toBeTruthy();
        });

        test('returns false for incorrect value', () => {
            expect(operation.divide() === 6).toBeFalsy();
        });
    })

    describe('multiply method', () => {
		test('returns actual value', () => {
			expect(operation.multiply()).toBe(180);
		});
		test('returns actual value', () => {
			expect(operation.multiply() !== 60).toBeTruthy();
		});
		test('returns actual value', () => {
			expect(operation.multiply() === 30).toBeFalsy();
		});
	});

	describe('add method', () => {
		test('returns correct value', () => {
			expect(operation.add()).toBe(36);
		});
		test('returns correct value', () => {
			expect(operation.add() !== 3).toBeTruthy();
		});
		test('returns false for incorrect value', () => {
			expect(operation.add() === 37).toBeFalsy();
		});
    });

	describe('subtract method', () => {
		test('returns correct value', () => {
			expect(operation.subtract()).toBe(24);
		});
        test('returns correct value', () => {
			expect(operation.subtract() !== 6).toBeTruthy();
		});
		test('returns false for incorrect value', () => {
			expect(operation.subtract() === 30).toBeFalsy();
		});
	});  
})

describe('capitalize string function', () => {
    const string = 'yoongi';

    test('capitalize the first character of a string', () => {
        expect(capitalize(string)).toBe('Yoongi');
    });
    test('return a string', () => {
		expect(typeof capitalize(string) === 'string').toBeTruthy();
	});
	test('capitalize the first character of a string', () => {
		expect(capitalize(string)).not.toBe('YOONGi');
	});
});    