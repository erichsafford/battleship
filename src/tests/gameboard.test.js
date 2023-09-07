const GameBoard = require('../gameboard')
const Ship = require('../ships')

let testGameBoard
let battleship
let destroyer
let patrolBoat

beforeEach(() => {
    testGameBoard = new GameBoard()
    battleship = new Ship('battleship', 4)
    destroyer = new Ship('destroyer', 3)
    patrolBoat = new Ship('patrol boat', 2)

})

test("10 rows created", () => {
    expect(testGameBoard.board.length).toBe(10)
})

test("Verify 10 Square items in each array", () => {
    expect(testGameBoard.board[0].length).toBe(10)
    expect(testGameBoard.board[0][0].taken).toBe(false)
    expect(testGameBoard.board[9].length).toBe(10)
    expect(testGameBoard.board[9][9].taken).toBe(false)
})

test("Correctly test if a ship fits in a given starting spot", () => {
    expect(testGameBoard.placeShip(patrolBoat, "horizontal", 0, 9)).toMatch("Can't place there!")
    expect(testGameBoard.placeShip(battleship, "horizontal", 0, 7)).toMatch("Can't place there!")
    expect(testGameBoard.placeShip(patrolBoat, "vertical", 9, 0)).toMatch("Can't place there!")
    expect(testGameBoard.placeShip(battleship, "vertical", 7, 0)).toMatch("Can't place there!")
})

test("Identify if squares in intended line are already taken", () => {
    testGameBoard.placeShip(battleship, "horizontal", 0, 0)
    testGameBoard.board[0].forEach(item => console.log(item))
    expect(testGameBoard.placeShip(destroyer, "vertical", 0, 2)).toMatch("Can't place there!")
})

test("Change value of 'taken' in each square (horizontal)", () => {
    testGameBoard.placeShip(battleship, "horizontal", 0, 0)
    expect(testGameBoard.board[0][0].taken).toBe(true)
    expect(testGameBoard.board[0][1].taken).toBe(true)
    expect(testGameBoard.board[0][2].taken).toBe(true)
    expect(testGameBoard.board[0][3].taken).toBe(true)
    expect(testGameBoard.board[0][4].taken).toBe(false)
})

test("Change value of 'taken' in each square (vertical)", () => {
    testGameBoard.placeShip(battleship, "vertical", 0, 0)
    expect(testGameBoard.board[0][0].taken).toBe(true)
    expect(testGameBoard.board[1][0].taken).toBe(true)
    expect(testGameBoard.board[2][0].taken).toBe(true)
    expect(testGameBoard.board[3][0].taken).toBe(true)
    expect(testGameBoard.board[4][0].taken).toBe(false)
})