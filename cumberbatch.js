/**
 * Cumberbatch
 *
 * @author Schascha
 * @url https://github.com/Schascha/cumberbatch
 *
 * MIT License
 */
(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory)
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory()
	} else {
		root.Cumberbatch = factory()
	}
}(this, function() {
	'use strict'

	var Cumberbatch = function Cumberbatch(options) {

		// Global variable
		var
			options = options || {},
			el = document.querySelector(options.el || 'h1'),
			names = {
				first: [
					"Babadook", "Bacardi", "Backitup", "Bagelbread", "Bagleface", "Bagworm", "Bakery", "Bandaid", "Bandersnatch", "Bandicoot", "Barberclub", "Barbituate", "Barister", "Barliman", "Barnabus", "Barnacle", "Barnoldswick", "Baseballbat", "Baseballmitt", "Bassdrop", "Battlefield", "Beachbody", "Beanbag", "Bedbug", "Bedlington", "Beetlejuice", "Beezlebub", "Bellybutton", "Benadryl", "Benchthis", "Bendandsnap", "Bendydick", "Bendystick", "Bendytoots", "Benedick", "Benefit", "Benetton", "Bengaltiger", "Benjamin", "Bentobox", "Berrywinkle", "Bettyboop", "Billiardball", "Billybong", "Billyboy", "Billyray", "Blasphemy", "Blenderdick", "Blubberbutt", "Blubberdick", "Blubberwhale", "Blueberry", "Blunderbrick", "Bobafett", "Bobbypin", "Bodybuild", "Boilerdang", "Bombadil", "Bonaparte", "Bonerhard", "Booblesnoot", "Boobytrap", "Boppinstick", "Brasilberg", "Bridgetjones", "Brodyquest", "Brokenbrick", "Botany", "Bottleneck", "Bouillabaisse", "Bourgeoisie", "Brandenburg", "Brandybuck", "Brandydrink", "Brendadirk", "Brewery", "Broccoli", "Brownbear", "Bubblebath", "Bubblesnatch", "Buckingham", "Buckminster", "Buckyball", "Budapest", "Buffalo", "Bukkake", "Bulbasaur", "Bumberstump", "Bumblebee", "Bumblebee", "Bumbleshack", "Bumblesniff", "Bumblesnuff", "Bumfuzzle", "Bumpitty", "Bunsenburner", "Burberry", "Burgerking", "Burlington", "Buttercup", "Butterfree", "Buttermilk", "Butternut", "Butterscotch", "Cadbury", "Canterbury", "Carpettrip", "Cheesecake", "Choclaitchip", "Cockapoo", "Cogglesnatch", "Congleton", "Cordula", "Danglerack", "Dinglebird", "Dorling", "Duckface", "Dumbledore", "Dufftown", "Engelbert", "Fiddlestick", "Fragglerock", "Freckleface", "Gobbledygook", "Guiltyverdict", "Handpicked", "Hodgepodge", "Honkytonk", "Hullabaloo", "Hummingbird", "Igglybuff", "Johnnycash", "Lemongrab", "Lemontree", "Liverswort", "Longdong", "Massachusetts", "Miss Issippi", "Mississippi", "Muffintop", "Oscarbait", "Pallettown", "Pinecone", "Poppycock", "Quitsack", "Ragnarök", "Rinkydink", "Ronald", "Rumblesack", "Scissorkick", "Singlehandedly", "Snorkeldink", "Snozzlebert", "Stinkyfruit", "Stinkytoe", "Sunbreeze", "Syphilis", "Taradiddle", "Tiddleywomp", "Timothy", "Wellington", "Whippersnatch", "Widdershins", "Wimbledon"
				],
				last: [
					"Ampersand", "Anglerfish", "Animorph", "Banglesnatch", "Battleship", "Bellyrub", "Blackberry", "Bumbersplat", "Butterbur", "Cabbagepatch", "Cabbagewank", "Caddyshack", "Calldispatch", "Camelback", "Cameltoe", "Camouflage", "Candlestick", "Candycrush", "Candygram", "Candywrap", "Cankersore", "Capncrunch", "Carrotpatch", "Carrotstick", "Catchlebears", "Caterpillar", "Centipede", "Charizard", "Charmander", "Cheddarcheese", "Chesterfield", "Chickenbroth", "Chickenstrips", "Chimichanga", "Chimichurri", "Chowderpants", "Chuckecheese", "Chunkybap", "Claritin", "Clavichord", "Clombyclomp", "Cobblestones", "Cockletit", "Coddlfeswort", "Coggleswort", "Collywog", "Colonist", "Columbo", "Combyourthatch", "Comedicmismatch", "Comelycat", "Commonwealth", "Compasstrap", "Concubine", "Contactform", "Coochierash", "Coochyrash", "Copperwire", "Cottagecheese", "Counterstrike", "Countryside", "Covergirl", "Covertrack", "Crackerdong", "Crackerjack", "Crackersprout", "Cragglethatch", "Cramplesnutch", "Creamsicle", "Crimpysnitch", "Cricketbat", "Crinklefries", "Crucifix", "Crumblebread", "Crumbletop", "Crumplebutt", "Crumplehorn", "Crumplesack", "Crumplezone", "Crunchypants", "Cuckatoo", "Cuckooclock", "Cucumberbatch", "Cul-de-sac", "Cumberbitch", "Cumberbund", "Cumbercooch", "Cumberfinch", "Cumbersnatch", "Cumbersniff", "Cumbersome", "Cuminmysnatch", "Cummerbund", "Cunningscratch", "Cunningsnatch", "Cupboardlatch", "Curdledmilk", "Curdledong", "Curdlemilk", "Curdlesnoot", "Custardbath", "Cuttlefish", "Denimhair", "Derbybeef", "Diabeetus", "Flubbercrack", "Fluffeluff", "Frumblesnatch", "Fullerene", "Fungusspore", "Goblinface", "Handkerchief", "Horseshoe", "Humperdinck", "Kittycat", "Kryptonite", "Lingerie", "Luckycatch", "Lumberjack", "Lumberlatch", "Moldyspore", "Mustachecare", "Nottinghill", "Numbercrunch", "Otterpose", "Oxfordshire", "Pantypants", "Pantysniffer", "Pencilcase", "Penciltrick", "Pumpernickel", "Pumpkinpatch", "Rivendell", "Rummelsnuff", "Sabretooth", "Sandalshoe", "Scamander", "Scratch-n-sniff", "Scratchnsniff", "Scrunchysnatch", "Slaptyback", "Slipperyslope", "Slumberbelch", "Snickersbar", "Snugglesnatch", "Splishnsplash", "Stinkyrash", "Strappadoes", "Talisman", "Thundercats", "Thundermunch", "Thunderpunch", "Tinytoe", "Toodlesnoot", "Upperclass", "Uptoscratch", "Vegemite", "Wafflesmack", "Wondersnatch"
				],
				full: [
					"Babadook Canterbury", "Bagworm Caterpillar", "Barberclub Mustachecare", "Battlefield Counterstrike", "Benadryl Claritin", "Bendytoots Crumplezone", "Benedick Cucumberbatch", "Benedict Timothy Carlton Cumberbatch", "Biblical Concubine", "Black Mirror Bandersnatch", "Blueberry Pumpkinpatch", "Bombadil Rivendell", "Bottleneck Penciltrick", "Bourgeoisie Capitalist", "Britishname Complicated", "Buckminster Fullerene", "Butawhiteboy Cantbekhan", "Butternut Crinklefries", "Butterscotch Candywrap", "Duckface Otterpose", "Engelbert Humperdinck", "Fuzzy Wuzzy", "Itsy Bitsy Teenie Weenie", "Katie Price", "Mark John Africa Lein", "Reinhard Gosling", "Rinkydink Curdlesnoot", "Ryan Stecken", "Wanda's Crotchfruit", "Wimbledon Tennismatch"
				]
			},
			store = [],
			index = 0,
			touchstartX = 0,
			touchendX = 0,
			touchDistance = 100,
			cb
		;

		// Private Methods
		cb = {

			/**
			 * Returns random name
			 * @return {string}
			 */
			random() {
				var rand = Math.floor(Math.random() * 10) + 1;
				return (rand === 10) ? cb._name(names.full) : cb._name(names.first) + ' ' + cb._name(names.last);
			},

			/**
			 * Display a random storable name
			 * @return {this}
			 */
			generate() {
				var name = cb.random();
				store.push(name);
				index = store.length - 1;
				cb._update(name);
				return this;
			},

			/**
			 * Display next name from storage or generate a new one
			 * @return {this}
			 */
			next() {
				if (store.length && ++index < store.length) {
					cb._update(store[index]);
				} else {
					cb.generate();
				}

				return this;
			},

			/**
			 * Display previous name from storage
			 * @return {this}
			 */
			prev() {
				if (index) {
					cb._update(store[--index]);
				}

				return this;
			},

			/**
			 * Display first name from storage
			 * @return {this}
			 */
			first() {
				index = 0;
				cb._update(store[index]);
				return this;
			},

			/**
			 * Initialize event bindings
			 * @private
			 * @return {undefined}
			 */
			_init() {
				if (el) {
					document.addEventListener('keydown', cb._onKeypress);
					window.addEventListener('touchstart', cb._onTouchstart);
					window.addEventListener('touchend', cb._onTouchend);
				}
			},

			/**
			 * Returns unique random name string
			 * @private
			 * @param  {array} obj
			 * @param  {number} [limit=50]
			 * @return {string}
			 */
			_name(obj, limit = 50) {
				var
					memory = store.slice((obj.length > limit) ? -limit : -obj.length / 2).join(),
					arr = obj.filter(function(el) {
						var a = el.split(' ');
						return a.filter(function(b) {
							return memory.indexOf(b) === -1;
						}).length === a.length;
					}),
					str = arr[parseInt(Math.random() * arr.length)]
				;

				return str;
			},

			/**
			 * Display string as HTML
			 * @private
			 * @param  {string} str
			 * @return {undefined}
			 */
			_update(str) {
				if (el && str) {
					el.innerHTML = str;
				}
			},

			/**
			 * Keypress event handler
			 * @private
			 * @param  {object} e
			 * @return {undefined}
			 */
			_onKeypress(e) {
				switch (e.keyCode) {
					case 37:
						// Left arrow
						cb.prev();
						break;
					case 39:
						// Right arrow
						cb.next();
						break;
				}
			},

			/**
			 * Touchstart event handler
			 * @private
			 * @param  {object} e
			 * @return {undefined}
			 */
			_onTouchstart(e) {
				touchstartX = e.changedTouches[0].screenX;
			},

			/**
			 * Touchend event handler
			 * @private
			 * @param  {object} e
			 * @return {undefined}
			 */
			_onTouchend(e) {
				touchendX = e.changedTouches[0].screenX;

				if (touchendX + touchDistance < touchstartX) {
					// Swipe left
					cb.next();
				} else if (touchendX > touchstartX + touchDistance) {
					// Swipe right
					cb.prev();
				}
			}
		};

		// Initialize
		cb._init();

		// Public Methods
		return {
			generate: cb.generate,
			random: cb.random,
			prev: cb.prev,
			next: cb.next,
			first: cb.first
		};
	}

	return Cumberbatch;
}));
