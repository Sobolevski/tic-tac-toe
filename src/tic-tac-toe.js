class TicTacToe {
    constructor() {
        this.current = null;
        this.gameState = null;
        this.elementIndex = 0;
        this.elements = ['x','o'];
        this.matrixSize = 3;
        this.moveCount = 0;
        this.matrix = [];
        for (let i = 0; i < this.matrixSize; i++) {
            this.matrix[i] = new Array(this.matrixSize);
        }
        for (let i = 0; i < this.matrixSize; i++)
            for (let j = 0; j < this.matrixSize; j++)
                this.matrix[i][j] = null;


    }

    getCurrentPlayerSymbol() {
        this.current = this.elements[this.moveCount % (this.elements.length)];
        return this.current;
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.getFieldValue(rowIndex, columnIndex)) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();    
            this.moveCount++;



            for(let i = 0; i < this.matrixSize; i++){
                if(this.matrix[rowIndex][i] != this.current)
                    break;
                if(i == this.matrixSize-1){
                    this.gameState = this.current;
                    return this;
                }
            }

            for(let i = 0; i < this.matrixSize; i++){
                if(this.matrix[i][columnIndex] != this.current)
                    break;
                if(i == this.matrixSize-1){
                    this.gameState = this.current;
                    return this;
                }
            }

            if(rowIndex == columnIndex){
                for(let i = 0; i < this.matrixSize; i++){
                    if(this.matrix[i][i] != this.current)
                        break;
                    if(i == this.matrixSize-1){
                        this.gameState = this.current;
                        return this;
                    }
                }
            }

            if(rowIndex + columnIndex == this.matrixSize - 1){
                for(let i = 0; i<this.matrixSize; i++){
                    if(this.matrix[i][(this.matrixSize-1)-i] != this.current)
                        break;
                    if(i == this.matrixSize-1){
                        this.gameState = this.current;
                        return this;
                    }
                }
            }

            if(this.moveCount == Math.pow(this.matrixSize, 2)) {
                this.gameState = 'DRAW';
                return this;
            }
        }
    }

    isFinished() {
        if(this.gameState == 'x' || this.gameState == 'o' || this.gameState == 'DRAW') return true
            else return false;
    }

    getWinner() {
        if(this.gameState == 'x' || this.gameState == 'o') return this.gameState;
        return null;
    }

    noMoreTurns() {
        if(this.moveCount == Math.pow(this.matrixSize, 2)) {
            return true;
        }
        return false;
    }

    isDraw() {
        if(this.gameState === 'DRAW') {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
            return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
