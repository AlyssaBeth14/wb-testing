import { isEven, sum } from "../arithmetic.js"

describe('Test the isEven function', () => {
    test('returns true for even numbers', () => {
        const response = isEven(2)

        expect(response).toBe(true)
    })

    test('returns false for odd numbers', () => {
        expect(isEven(1)).toBe(false)
    })
})

describe('Tests the sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
    test('adds 1 and -1 to equal 0', () => {
        expect(sum(1, -1)).toBe(0)
    })
})