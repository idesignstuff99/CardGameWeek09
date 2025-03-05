// What do we need for a card game?

/* 
*   Deck
*   52 cards (should each card be its own class? Should it be object with 3 values?)
    Rank ("name value")
    Suit (heart/spade/clubs/diamonds)
    Values
    a way to shuffle
    a way to pass the cards to the players (should this be in my deck? Or my game logic?)
    Name?
    Score
    Hand

    Logic to actually play the game... we can use a deck in any card games
    but we're playing a specific one
    Ways to compare the cards... number values on each card


    DECK CLASS
    Should have:
    An Array to store the cards
    An Array to store all the cards rank
    An Array to store all the cards suits
*
*
*/


class Deck {
    constructor() {
        this.deck = [];
        this.ranks = [
            "Ace",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "Jack",
            "Queen",
            "king"
        ];
        this.suits = ["hearts ♥", "Diamonds ♦", "Spades ♠", "Clubs ♣"]
    }

    //A method to create a deck... iterate over our rank/suits
    //push a new card... (as an object) into our constructors this.deck

    createDeck() {
        for (let i = 0; i < this.suits.length; i++) {
            for (let j = 0; j < this.ranks.length; j++) {
                let card = {
                    name: `${this.ranks[j]} of ${this.suits[i]}` ,
                    value: j + 1
                }

                this.deck.push(card)
            }
        }
    }

        shuffleDeck() {
            for (let i = this.deck.length - 1; i > 0; i--) {

                const j = Math.floor(Math.random() * (i + 1));
        
                [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
            }
        }
    }


// Class for a Game (Specifically our WAR game)
/** Needs:
 * 
 * A deck... instantiate a new Deck inside of our Game class
 * 
 * Create the deck, shuffle the deck, and pass the deck...
 * 
 * Logic to play the game
 *  -Turn based, how many turns?
 *  -Do our players have a habd yet?
 *  -Control flow statement logic to decide to win?
 * 
 * 2 players
 *  -Hand
 *  -Score
 *  -Name
 */


class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        }
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        }
    }

    //Methos to play the game
    /**
     * Pass out cards to our players
     * Take x amount of turns...
     * as long as players have cards (or the number of cards they have)
     * Award points based on card.value
     * Log the winner
     */

    playGame() {
        // Instantiate a new deck, create a deck, then shuffle the deck
        const deck = new Deck
        deck.createDeck()
        deck.shuffleDeck()

        while (deck.deck.length !== 0) {

            this.player1.hand.push(deck.deck.shift())
            this.player2.hand.push(deck.deck.shift())
        }

     //Actually playing the game... how many turns do I need?

     for (let i = 0; i < this.player1.hand.length; i++) {

        // Conditional logic to award points based on comparing the card values
        if (this.player1.hand[i].value > this.player2.hand[i].value) {
            this.player1.score ++
            console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 1 wins a point!
                Current Score: p1: ${this.player1.score}, p2 ${this.player2.score}
                `);
        } else if (this.player2.hand[i].value > this.player1.hand[i].value) {
            this.player2.score ++
            console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Player 2 wins a point!
                Current Score: p1: ${this.player1.score}, p2 ${this.player2.score}
                `);
        } else {
            console.log(`
                P1 Card: ${this.player1.hand[i].name}
                P2 Card: ${this.player2.hand[i].name}
                Tie: No points awarded!
                Current Score: p1: ${this.player1.score}, p2 ${this.player2.score}
                `);
            }
     }
        

     if (this.player1.score > this.player2.score) {
        console.log(`Player 1 wins!
            Final Score: p1: ${this.player1.score}
                        p2: ${this.player2.score}
            `)
     } else if (this.player2.score  > this.player1.score) {
        console.log(`Player 2 wins!
            Final Score: p1: ${this.player1.score}
                        p2: ${this.player2.score}
            `)
     } else {
        console.log('Tie');
        
     }
    }

}

const game = new Game
game.playGame()


