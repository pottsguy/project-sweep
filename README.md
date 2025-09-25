# Project Sweep
This is Minesweeper. The game logic will be coded in JS, the UI will be made in React, the high scores will be recorded in a PostgreSQL, and I will use GitHub for version control and to employ a CI/CD workflow. I have surveyed the programming jobs in my area and I am making this project to employ as many of them as possible and feasible.

## MINIMUM VIABLE PRODUCT
- [ ] The user sees a 10 x 8 grid. 40 of the cells contain hidden mines, the rest contain numbers corresponding to the number of mines in adjacent cells.
- [ ] The user can click a cell and reveal the hidden number or mine, or right-click a cell and place a flag on it. They can place up to 40 flags.
- [ ] If a mine is clicked, the player loses. If all of the numbered cells have been revealed, and all of the mined cells have been flagged, the player wins.
- [ ] After a game has been finished, the user is prompted to enter their name. A success or failure is logged under that name in the database.
- [ ] After the prompt, a leaderboard is shown, allowing the user to see which names have the highest success-failure ratios.

## NICE-TO-HAVES
- [ ] The grid is made to look nice, with emojis and colours, etc.
- [ ] There's a sound-effect or animation when a mine or number is clicked.
- [ ] The user is allowed to log in, ensuring that their successes and failures are attributed to them.
- [ ] Also log-out, forgot password, etc.
- [ ] There's a button allowing the user to see the leaderboard at any time.
- [ ] The game is hosted on a public server, maybe with AWS.

# WORKFLOW

## TODO
- [x] Grid with numbers & mines
    - [x] Grid
    - [x] Mine placement
    - [x] Number placement
    - [x] Make createGrid() function
    - [x] Make placeMine() function
    - [x] Make placeNumbers() function
    - [x] Make generateMinefield() function
- [ ] Revealing the numbers & mines
    - [ ] Take user input
    - [ ] Display numbers & mines
- [ ] Create end-game condition
- [ ] Flagging cells
- [ ] Create win condition
- [ ] Create lose condition
- [ ] Create user interface
- [ ] Set up database
- [ ] Add to database after each game
- [ ] Calculate leaderboard
- [ ] Display leaderboard after each game
- [ ] Convert to React UI

## DOING
- [ ] 

## DONE
- [ ] 

## STUCK
- [ ] 