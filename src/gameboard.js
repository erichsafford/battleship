class GameBoard {
    constructor() {
        this.board = []
        createGrid(this.board)
    }

    placeShip(ship, orientation, startRow, startCol) {
        //Check if it fits and place it if it does
        if (orientation === 'horizontal') {
            if (startCol < (10 - ship.length)) {
                for (let col = startCol; col < startCol + ship.length; col++) {
                    if (this.board[startRow][col].taken === true) {
                        return "Can't place there!"
                    }
                }
                for (let i = startCol; i < (startCol + ship.length); i++) {
                    this.board[startRow][i].taken = true
                }
            } else {
                return "Can't place there!"
            }
        } else if (orientation === 'vertical') {
            if (startRow < (10 - ship.length)) {
                for (let row = startRow; row < startRow + ship.length; row++) {
                    if (this.board[row][startCol].taken === true) {
                        return "Can't place there!"
                    }
                }
                for (let j = startRow; j < (startRow + ship.length); j++) {
                    this.board[j][startCol].taken = true
                    console.log(this.board[j][startCol].taken)
                }
            } else {
                return "Can't place there!"
            }
        }
    }
}

class Square {
    constructor() {
        this.taken = false
        this.guessed = false
    }
}

function createGrid(board) {
    for (let i = 0; i < 10; i++) { // Creating each row
        board.push([])
        for (let j = 0; j < 10; j++) { // Creating Square objs
            board[i].push(new Square)
        }

    }
}

let testBoard = new GameBoard()

module.exports = GameBoard