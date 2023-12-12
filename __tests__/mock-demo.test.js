import {jest} from '@jest/globals'

//example of API mock
jest.unstable_mockModule('axios', () => {
    return {
        default: {
            get: jest.fn().mockResolvedValue({
                data:{
                    results: [{name: 'pokemon1'}, {name: 'pokemon2'}]
                }
            })
        }
    }
})

//example of local lodash random mock
const mockRandom = jest.fn()
jest.unstable_mockModule('lodash', () => {
    return {
        default: {
            random: mockRandom
        }
    }
}
)

const { getNthPokemon, doSkillCheck } = await import("../mock-demo.js");

test('getNthPokemon returns pokemon2 when n = 2', async () => {
    const pokemon = await getNthPokemon(2)
    expect(pokemon).toEqual({name: 'pokemon2'})
})

describe('Testing the doSkillCheck function', () => {
    test('returns false for rolls of 1-9', () => {
        for(let i = 0; i<10; i++){
            mockRandom.mockReturnValue(i)
            expect(doSkillCheck()).toBeFalsy()
        }
    })

    test('returns true for rolls of 10-20', () => {
        for(let i = 10; i<=20; i++){
            mockRandom.mockReturnValue(i)
            expect(doSkillCheck()).toBeTruthy()
        }
    })
})