// Put your custom code here
$(document).ready(function(){
	quotes = [
		[ 'Life is a journey. Time is a river. The door is ajar', 'Jim Butcher' ],
		[ 'Decide that you want it more than you are afraid of it.', 'Bill Cosby' ],
		[ 'Any fool can criticize, condemn and complain and most fools do.', 'Benjamin Franklin' ],
		[ 'If you think your teacher is tough, wait until you get a boss. He doesn\'t have tenure.', 'Bill Gates' ],
		[ 'A person who never made a mistake never tried anything new.', 'Albert Einstein' ],
		[ 'Education is the most powerful weapon which you can use to change the world.', 'Nelson Mandela' ],
		[ 'An escalator can never break: it can only become stairs. You should never see an Escalator Temporarily Out Of Order sign, just Escalator Temporarily Stairs. Sorry for the convenience.', 'Mitch Hedberg' ],
		[ 'Standing ovations have become far too commonplace. What we need are ovations where the audience members all punch and kick one another.', 'George Carlin' ],
		[ 'The truth knocks on the door and you say, "Go away, I\'m looking for the truth," and so it goes away. Puzzling.', 'Robert M. Pirsig' ],
		[ 'If you are unable to find the truth right where you are, where else do you expect to find it?', 'Dogen' ],
		[ 'When the mind is exhausted of images, it invents its own.', 'Gary Snyder' ],
		[ 'Preoccupied with a single leaf you won\'t see the tree.', 'Vagabond' ],
		[ 'The more you know, the less you need.', 'Yvon Chouinard' ]
		];
		
		$('#quote-content').loadQuote( quotes ); // ( array )
});

$.fn.loadQuote = function( quotes ) {
	return this.each( function() {
		var obj = $(this);
		var quote = random_array( quotes );
		var quote_text = quote[[0],[0]] + '<div id="quote-author">&mdash; ' + quote[[0],[1]] + '</div>';

		obj.fadeOut( 'slow', function() {
			$( this ).html( quote_text );
			obj.fadeIn( 'fast' );
		});			
	});
};
	//public function
function random_array( aArray ) {
	var rand = Math.floor( Math.random() * aArray.length + aArray.length );
	var randArray = aArray[ rand - aArray.length ];
	return randArray;
}