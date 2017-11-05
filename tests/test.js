QUnit.test( "Example test", function( assert ) {
  assert.equal( 1, "1", "String '1' and number 1 have the same value" );
});

QUnit.test( "Test function populateDeck()", function( assert ) {
  assert.notEqual( populateDeck(), null, "The Deck is not null");
});

