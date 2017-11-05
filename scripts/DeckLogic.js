
    
var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["9830", "9829", "9824", "9827"]; // diamonds,hearts.spades,clubs
var deck = new Array();

 function populateDeck() {
    var deck = new Array();

    for (var i = 0; i < suits.length; i++) {
        var index;
        if (suits[i] === "9830") {
            index = 4;
        } else if (suits[i] === "9829") {
            index = 3;
        } else if (suits[i] === "9824") {
            index = 2;
        } else {
            index = 1;
        }

        for (var x = 0; x < cards.length; x++) {

            var order = (cards[x] === "A") ? 12 : x + 1;
            // console.log("suits[i] : \t" + cards[x]);
            // console.log("order : \t" + order);

            var card = {
                Value: cards[x],
                Suit: suits[i],
                weight: index,
                order: order
            };
            deck.push(card);

        }
    }

    return deck;
}

 function shuffle(noOfCards) {
    // Fisher-Yates shuffle
    var i = 0;
    var j = 0;
    var temp = null;

    for (i = noOfCards - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
    }

}

 function renderDeck(cards, DeckToRender) {
    if (document.getElementById("deck") != null) {
        document.getElementById("deck").innerHTML = "";
    }

    for (var i = 0; i < cards - 1; i++) {
        var card = document.createElement("div");
        var value = document.createElement("div");
        var suite = document.createElement("div");
        suite.className = "suite " + "rank" + DeckToRender[i].Value + DeckToRender[i].Suit;
        card.className = "card";
        // Implement color for value and color
        value.className = "value";
        value.innerHTML = DeckToRender[i].Value + " &#" + DeckToRender[i].Suit;
        if (document.getElementById("deck") != null) {
            card.appendChild(value);
            card.appendChild(suite);
            document.getElementById("deck").appendChild(card);
        }


    }
}


 function load() {
    deck = populateDeck();
    shuffle(52);
    renderDeck(52, deck);

}

 function getNoOfCardsToDraw() {
    var returnedVal = prompt("How many cards would you like to Draw from the Deck");
    var cards = ((returnedVal < 0) || (returnedVal > 52) || isNaN(returnedVal)) ?
        alert("Alert, Invalid input : Must contain anumber between 0 to 52") : returnedVal;
    shuffle(cards);
    var sortedDeck = sortDeck(cards);
    renderDeck(cards, sortedDeck);
    // renderSortedDeck(cards);
}

 function sortDeck(cards) {
    var cardsToSort = new Array();
    cardsToSort = deck.slice(0, cards - 1);
    // sort by suit
    cardsToSort.sort(
        function(a, b) {
            if (a.weight < b.weight)
                return -1;
            if (a.weight > b.weight)
                return 1;
            if (a.weight === b.weight) {
                // sort by value
                if (a.order < b.order)
                    return -1;
                if (a.order > b.order)
                    return 1;
                return 0;
                return 0;
            }
        });
    return cardsToSort;
}


window.onload = load;