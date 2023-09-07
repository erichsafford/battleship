const Ship = require('../ships')
const testDestroyer = new Ship('destroyer', 3)

test('Ship created correctly', () => {
    expect(testDestroyer.type).toBe('destroyer')
    expect(testDestroyer.length).toBe(3)
})

test('Hit tracking correct', () => {
    testDestroyer.hit()
    testDestroyer.hit()
    expect(testDestroyer.hits).toBe(2)
    expect(testDestroyer.destroyed).toBe(false)
    testDestroyer.hit()
    expect(testDestroyer.destroyed).toBe(true)
})


