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

createGrid(rows, columns, minesNumber);
setMines(grid, minesNumber);
placeNumbers(grid);