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
					"Bacardi", "Bagelbread", "Bagleface", "Bakery", "Bandaid", "Bandersnatch", "Bandicoot", "Barbituate", "Barister", "Barliman", "Barnabus", "Barnacle", "Barnoldswick", "Baseballbat", "Baseballmitt", "Bassdrop", "Battlefield", "Bedlington", "Beetlejuice", "Beezlebub", "Bellybutton", "Benadryl", "Bendandsnap", "Bendydick", "Bendytoots", "Benedick", "Benetton", "Benjamin", "Bentobox", "Berrywinkle", "Bettyboop", "Billiardball", "Billybong", "Billyboy", "Billyray", "Blasphemy", "Blenderdick", "Blubberbutt", "Blubberdick", "Blubberwhale", "Blueberry", "Blunderbrick", "Bobafett", "Bobbypin", "Bodybuild", "Boilerdang", "Bombadil", "Bonaparte", "Booblesnoot", "Boobytrap", "Botany", "Bottleneck", "Bouillabaisse", "Bourgeoisie", "Brandenburg", "Brandybuck", "Brandydrink", "Brendadirk", "Brewery", "Broccoli", "Brownbear", "Bubblebath", "Buckingham", "Buckminster", "Buckyball", "Budapest", "Buffalo", "Bukkake", "Bulbasaur", "Bumberstump", "Bumblebee", "Bumblebee", "Bumbleshack", "Bumblesniff", "Bumblesnuff", "Bumfuzzle", "Bumpitty", "Bunsenburner", "Burberry", "Burgerking", "Burlington", "Buttercup", "Butterfree", "Buttermilk", "Butternut", "Butterscotch", "Cadbury", "Canterbury", "Carpettrip", "Cheesecake", "Choclaitchip", "Cockapoo", "Cogglesnatch", "Congleton", "Cordula", "Danglerack", "Dinglebird", "Dumbledore", "Engelbert", "Fiddlestick", "Fragglerock", "Freckleface", "Gobbledygook", "Hodgepodge", "Honkytonk", "Hullabaloo", "Hummingbird", "Igglybuff", "Johnnycash", "Lemongrab", "Lemontree", "Liverswort", "Longdong", "Massachusetts", "Miss Issippi", "Mississippi", "Muffintop", "Oscarbait", "Pallettown", "Poppycock", "Quitsack", "Ragnarök", "Rinkydink", "Ronald", "Rumblesack", "Singlehandedly", "Snorkeldink", "Snozzlebert", "Stinkyfruit", "Stinkytoe", "Syphilis", "Taradiddle", "Tiddleywomp", "Timothy", "Wellington", "Whippersnatch", "Widdershins", "Wimbledon"
				],
				last: [
					"Ampersand", "Anglerfish", "Animorph", "Banglesnatch", "Battleship", "Bellyrub", "Blackberry", "Bumbersplat", "Butterbur", "Cabbagepatch", "Cabbagewank", "Caddyshack", "Calldispatch", "Camelback", "Cameltoe", "Camouflage", "Candlestick", "Candycrush", "Candygram", "Candywrap", "Cankersore", "Capncrunch", "Carrotpatch", "Carrotstick", "Catchlebears", "Centipede", "Charizard", "Charmander", "Cheddarcheese", "Chesterfield", "Chickenbroth", "Chickenstrips", "Chimichanga", "Chimichurri", "Chowderpants", "Chuckecheese", "Claritin", "Clavichord", "Clombyclomp", "Cockletit", "Coddlfeswort", "Coggleswort", "Collywog", "Colonist", "Commonwealth", "Concubine", "Contactform", "Coochierash", "Coochyrash", "Copperwire", "Cottagecheese", "Counterstrike", "Countryside", "Covergirl", "Crackerdong", "Crackerjack", "Crackersprout", "Cragglethatch", "Cramplesnutch", "Creamsicle", "Crimpysnitch", "Crinklefries", "Crucifix", "Crumblebread", "Crumbletop", "Crumplebutt", "Crumplehorn", "Crumplesack", "Crumplezone", "Crunchypants", "Cuckatoo", "Cuckooclock", "Cucumberbatch", "Cul-de-sac", "Cumberbitch", "Cumberbund", "Cumbercooch", "Cumbersnatch", "Cumbersniff", "Cumbersome", "Cummerbund", "Cunningsnatch", "Curdledmilk", "Curdledong", "Curdlemilk", "Curdlesnoot", "Custardbath", "Cuttlefish", "Denimhair", "Derbybeef", "Fluffeluff", "Frumblesnatch", "Fullerene", "Fungusspore", "Handkerchief", "Humperdinck", "Kryptonite", "Lingerie", "Lumberjack", "Moldyspore", "Nottinghill", "Oxfordshire", "Pantypants", "Pantysniffer", "Pencilcase", "Penciltrick", "Pumpernickel", "Pumpkinpatch", "Rivendell", "Rummelsnuff", "Sabretooth", "Sandalshoe", "Scamander", "Scratch-n-sniff", "Scratchnsniff", "Scrunchysnatch", "Slaptyback", "Slipperyslope", "Snickersbar", "Snugglesnatch", "Splishnsplash", "Stinkyrash", "Strappadoes", "Talisman", "Thundercats", "Thunderpunch", "Tinytoe", "Toodlesnoot", "Upperclass", "Vegemite", "Wafflesmack", "Wondersnatch"
				],
				full: [
					"Battlefield Counterstrike", "Benadryl Claritin", "Bendytoots Crumplezone", "Benedick Cucumberbatch", "Benedict Timothy Carlton Cumberbatch", "Biblical Concubine", "Black Mirror Bandersnatch", "Blueberry Pumpkinpatch", "Bombadil Rivendell", "Bottleneck Penciltrick", "Bourgeoisie Capitalist", "Britishname Complicated", "Buckminster Fullerene", "Butawhiteboy Cantbekhan", "Butternut Crinklefries", "Butterscotch Candywrap", "Engelbert Humperdinck", "Fuzzy Wuzzy", "Itsy Bitsy Teenie Weenie", "Katie Price", "Mark John Africa Lein", "Reinhard Gosling", "Rinkydink Curdlesnoot", "Ryan Stecken", "Wanda's Crotchfruit", "Wimbledon Tennismatch"
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
			random() {
				const rand = Math.floor(Math.random() * 10) + 1;
				return (rand === 10) ? cb._name(names.full) : cb._name(names.first) + ' ' + cb._name(names.last);
			},

			generate() {
				const name = cb.random();
				store.push(name);
				index = store.length - 1;
				cb._update(name);
			},

			next() {
				if (store.length && ++index < store.length) {
					cb._update(store[index]);
				} else {
					cb.generate();
				}
			},

			prev() {
				if (index) {
					cb._update(store[--index]);
				}
			},

			_init() {
				if (el) {
					document.addEventListener('keydown', cb._onKeypress);
					window.addEventListener('touchstart', cb._onTouchstart);
					window.addEventListener('touchend', cb._onTouchend);
				}
			},

			_name(obj, limit = 30) {
				const
					memory = store.slice((obj.length > limit) ? -limit : -obj.length / 2).join(),
					arr = obj.filter(function(el) {
						return memory.indexOf(el) === -1;
					}),
					str = arr[parseInt(Math.random() * arr.length)]
				;

				return str;
			},

			_update(str) {
				if (el) {
					el.innerHTML = str;
				}
			},

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

			_onTouchstart(e) {
				touchstartX = e.changedTouches[0].screenX;
			},

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

		// Init
		cb._init();

		// Public Methods
		return {
			generate: cb.generate,
			random: cb.random,
			prev: cb.prev,
			next: cb.next,
		};
	}

	return Cumberbatch;
}));
