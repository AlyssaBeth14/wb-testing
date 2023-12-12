function giveMeCat() {
    return 'cat'
}

test('giveMeCat() return cat', () => {
    expect(giveMeCat()).toBe('cat')
})