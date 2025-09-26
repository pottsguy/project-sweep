const rows = 8;
const columns = 10;
const minesNumber = 10;
const grid = [];

function createGrid(rows, columns) {
    for (r = 0; r < rows; r++) {
        for (c = 0; c < columns; c++) {
            grid.push([r, c, 0]);
        }
    }
    return grid;
}

function setMines(grid, minesNumber) {
    for (i = 0; i < minesNumber; i++) {
        let mineRow = Math.floor(Math.random() * rows);
        let mineColumn = Math.floor(Math.random() * columns);
        for (n = 0; n < grid.length; n++) {
            if (grid[n][0] == mineRow && grid[n][1] == mineColumn) {
                grid[n][2] = 9;
            }
        }
    }
    return grid;
}

function placeNumbers(grid) {
    for (i = 0; i < grid.length; i++) {
        if (grid[i][2] == 9) {
        }
        else {
            let currentRow = grid[i][0];
            let currentColumn = grid[i][1];
            for (n = 0; n < grid.length; n++) {
                if (grid[n][0] == currentRow -1 && grid[n][1] == currentColumn -1 && grid[n][2] == 9) {
                    grid[i][2] ++;
                }
                if (grid[n][0] == currentRow -1 && grid[n][1] == currentColumn    && grid[n][2] == 9) {
                    grid[i][2] ++;
                }
                if (grid[n][0] == currentRow -1 && grid[n][1] == currentColumn +1 && grid[n][2] == 9) {
                    grid[i][2] ++;
                }
                if (grid[n][0] == currentRow    && grid[n][1] == currentColumn -1 && grid[n][2] == 9) {
                    grid[i][2] ++;
                }
                if (grid[n][0] == currentRow    && grid[n][1] == currentColumn +1 && grid[n][2] == 9) {
                    grid[i][2] ++;
                }
                if (grid[n][0] == currentRow +1 && grid[n][1] == currentColumn -1 && grid[n][2] == 9) {
                    grid[i][2] ++;
                }
                if (grid[n][0] == currentRow +1 && grid[n][1] == currentColumn    && grid[n][2] == 9) {
                    grid[i][2] ++;
                }
                if (grid[n][0] == currentRow +1 && grid[n][1] == currentColumn +1 && grid[n][2] == 9) {
                    grid[i][2] ++;
                }
            }
        }
    }
}

function chooseCell(callback) {
    const readLine = require('readline');
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let cellRange = [];
    rl.question("Which row do you want to dig? ", function(rowAnswer) {
        for (i = 0; i < grid.length; i++) {
            if (grid[i][0] == rowAnswer) {
                cellRange.push(i);
            } else {
                continue;
            }
        }
        rl.question("Which column do you want to dig? ", function(colAnswer) {
            for (n = 0; n < cellRange.length; n++) {
                if (grid[cellRange[n]][1] != colAnswer) {
                    cellRange.splice([n], 1);
                    n--;
                } else {
                    continue;
                }
            }
            rl.close();
            let chosenCell = cellRange[0];
            let cellCode = grid[chosenCell][2];
            callback(cellCode);
        });
    });
}

function revealCell(cellCode) {
    if (cellCode != 9) {
        console.log("That patch has " + cellCode + " adjacent mines");
    } else if (cellCode == 9) {
        console.log("You hit a mine!");
    }
}

function runTurns(turns, callback) {
    if (turns > 0) {
        chooseCell(function(cellCode) {
            revealCell(cellCode);
            runTurns(turns - 1);
            callback();
        });
    }
}

function runNewGame() {
    createGrid(rows, columns, minesNumber);
    setMines(grid, minesNumber);
    placeNumbers(grid);
    console.log(grid);
    runTurns(3, function gameOverMessage() {console.log("Game Over!");});
}

runNewGame();