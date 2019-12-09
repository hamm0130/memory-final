// pseudo code:

// 3 difficulties with 3 values each (number of tiles) 
// use a for loop to iterate the number of tiles to create with random positions for the icons;
// easy difficulty = 4 tiles, medium = 8 tiles, hard = 12 tiles
// selecting difficulty should reveal the corresponding number of tiles
// tiles need to be laid out in responsive and user-friendly manner (display grid with breakpoints for screen sizes (mobile, desktop))
// push the tiles with js into a container div
// each tile needs to have a pattern that is hidden from player (ie blank square)
// make sure each starting tile has a flipped status, and make a function on click to flip/reveal the tile
// use david walsh css flip animation tutorial
// use font awesome icons
// if the second tile matches the first one, there should be an action/animation with it the match
// > ie stay open, fade out, disappear,
// if tiles do not match, tiles should flip back/hide tiles again and must be animated
// when all the cards have been matched, ending must be animated with css
// at the end the player should be presented with the option to play again 
// if "play again" has been chosen, hide everything and revert back to the difficulty selection screen

// start level (number)
// Game.totalmatches=number
// game.matches++

// if (game.matches === game.totalmatches) {
//     end game, play again option
// }

// use shuffle to randomize cards displayed before they are pushed into the card container on the page

