function shuffle (src) {
    const copy = [...src]
  
    const length = copy.length
    for (let i = 0; i < length; i++) {
      const x = copy[i]
      const y = Math.floor(Math.random() * length)
      const z = copy[y]
      copy[i] = z
      copy[y] = x
    }
  
    if (typeof src === 'string') {
      return copy.join('')
    }
  
    return copy
  }


const cards = [`<img src="/images/clubs.png" alt="clubs">`,
`<img src="/images/diamonds.png" alt="diamonds">`,
`<img src="/images/hearts.png" alt="hearts">`,
`<img src="/images/spades.png" alt="spades">`,
`<img src="/images/clubs.png" alt="clubs">`,
`<img src="/images/diamonds.png" alt="diamonds">`,
`<img src="/images/hearts.png" alt="hearts">`,
`<img src="/images/spades.png" alt="spades">`
]

const deck = []

let gameDifficulty = [
{
    easy: {
        text:"Easy"
    }
},
{
    medium: {
        text:"Medium"
    }
},
{
    hard: {
        text:"Hard"
    }
}]

gameDifficulty.forEach((o, i) => o.id = i + 1);

for (const card of cards) {
        deck.push({cards})
}

const game = {
    flippedCards: [],
    cards: []
}

function deal (
    numberOfCards = ((gameDifficulty.id) * 2)) {
    game.flippedCards = []
    game.cards = shuffle(deck)

    const hand = game.cards.splice(0, numberOfCards)

    $hand.innerHTML = hand.map(card => 
    `<div class="cards">
    <img src="/images/spades.png" alt="spades">
    <img src="/images/hearts.png" alt="hearts">
    <img src="/images/clubs.png" alt="clubs">
    <img src="/images/diamonds.png" alt="diamonds">
    <img src="/images/hearts.png" alt="hearts">
    <img src="/images/spades.png" alt="spades">
    <img src="/images/clubs.png" alt="clubs">
    <img src="/images/diamonds.png" alt="diamonds">
    </div>`).join('')
}

// function dealmed (numberOfCards = 8) {
//     game.selectedCards = []
//     game.cards = shuffle(deck)

//     const hand = game.cards.splice(0, numberOfCards)

//     $hand.innerHTML = hand.map(card => 
//     `<div class="cards">
//     <img src="/images/spades.png" alt="spades">
//     <img src="/images/hearts.png" alt="hearts">
//     <img src="/images/clubs.png" alt="clubs">
//     <img src="/images/diamonds.png" alt="diamonds">
//     <img src="/images/hearts.png" alt="hearts">
//     <img src="/images/spades.png" alt="spades">
//     <img src="/images/clubs.png" alt="clubs">
//     <img src="/images/diamonds.png" alt="diamonds">
//     </div>`).join('')
// }

// function dealhard (numberOfCards = 10) {
//     game.selectedCards = []
//     game.cards = shuffle(deck)

//     const hand = game.cards.splice(0, numberOfCards)

//     $hand.innerHTML = hand.map(card => 
//     `<div class="cards">
//     <img src="/images/spades.png" alt="spades">
//     <img src="/images/hearts.png" alt="hearts">
//     <img src="/images/clubs.png" alt="clubs">
//     <img src="/images/diamonds.png" alt="diamonds">
//     <img src="/images/hearts.png" alt="hearts">
//     <img src="/images/spades.png" alt="spades">
//     <img src="/images/clubs.png" alt="clubs">
//     <img src="/images/diamonds.png" alt="diamonds">
//     </div>`).join('')
// }

// var newCards = {}
// let $hand = game.cards;
var $dealer = document.getElementsByClassName('overlay');

$dealer.addEventListener('click', deal);