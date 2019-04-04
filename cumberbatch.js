(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory)
	} else if (typeof module === 'object' && module.exports) {
		module.exports = factory()
	} else {
		root.cumberbatch = factory()
	}
}(this, function() {
	var
		names = {
			first: [
				"Bakery", "Bandersnatch", "Bandicoot", "Barbituate", "Barister", "Barnabus", "Barnacle", "Barnoldswick", "Baseballbat", "Baseballmitt", "Bedlington", "Beetlejuice", "Beezlebub", "Benadryl", "Bendandsnap", "Bendydick", "Benetton", "Benjamin", "Bentobox", "Bettyboop", "Billiardball", "Billybong", "Billyray", "Blasphemy", "Blenderdick", "Blubberbutt", "Blubberdick", "Blubberwhale", "Bodybuild", "Boilerdang", "Bombadil", "Bonaparte", "Boobytrap", "Botany", "Bouillabaisse", "Bourgeoisie", "Brandenburg", "Brandybuck", "Brendadirk", "Brewery", "Broccoli", "Bubblebath", "Buckingham", "Buckminster", "Buckyball", "Budapest", "Buffalo", "Bukkake", "Bulbasaur", "Bumberstump", "Bumblebee", "Bumblebee", "Bumbleshack", "Bumblesniff", "Bunsenburner", "Burberry", "Burgerking", "Burlington", "Buttercup", "Butterfree", "Buttermilk", "Cadbury", "Cogglesnatch", "Congleton", "Danglerack", "Fiddlestick", "Fragglerock", "Honkytonk", "Johnnycash", "Liverswort", "Muffintop", "Oscarbait", "Pallettown", "Rinkydink", "Rumblesack", "Snorkeldink", "Snozzlebert", "Syphilis", "Tiddleywomp", "Timothy", "Wellington", "Whippersnatch", "Wimbledon",
				"Bacardi", "Bagelbread", "Bagleface", "Battlefield", "Barliman", "Bellybutton", "Benedick", "Berrywinkle", "Billyboy", "Booblesnoot", "Blueberry", "Blunderbrick", "Bobafett", "Bobbypin", "Brownbear", "Bumblesnuff", "Bumfuzzle", "Butterscotch", "Canterbury", "Carpettrip", "Cheesecake", "Choclaitchip", "Cockapoo", "Cordula", "Dinglebird", "Dumbledore", "Engelbert", "Gobbledygook", "Hodgepodge", "Hullabaloo", "Hummingbird", "Igglybuff", "Lemongrab", "Lemontree", "Longdong", "Massachusetts", "Mississippi", "Miss Issippi", "Poppycock", "Quitsack", "Ragnarök", "Ronald", "Singlehandedly", "Stinkyfruit", "Stinkytoe", "Taradiddle", "Widdershins"
			],
			last: [
				"Ampersand", "Anglerfish", "Animorph", "Banglesnatch", "Battleship", "Bumbersplat", "Cabbagepatch", "Calldispatch", "Cameltoe", "Camouflage", "Candlestick", "Candycrush", "Candygram", "Cankersore", "Capncrunch", "Carrotstick", "Charizard", "Charmander", "Cheddarcheese", "Chesterfield", "Chickenbroth", "Chickenstrips", "Chowderpants", "Chuckecheese", "Claritin", "Clavichord", "Clombyclomp", "Cockletit", "Coddleswort", "Coggleswort", "Collywog", "Colonist", "Commonwealth", "Concubine", "Coochierash", "Coochyrash", "Copperwire", "Cottagecheese", "Countryside", "Covergirl", "Crackerdong", "Crackerjack", "Crackersprout", "Cragglethatch", "Cramplesnutch", "Creamsicle", "Crimpysnitch", "Crucifix", "Crumplebutt", "Crumplehorn", "Crumplesack", "Cuckatoo", "Cuckooclock", "Cul-de-sac", "Cumberbitch", "Cumberbund", "Cumbercooch", "Cumbersnatch", "Cumbersniff", "Cumbersome", "Cummerbund", "Cunningsnatch", "Curdledmilk", "Curdledong", "Curdlemilk", "Curdlesnoot", "Custardbath", "Cuttlefish", "Frumblesnatch", "Fullerene", "Humperdinck", "Kryptonite", "Lingerie", "Lumberjack", "Moldyspore", "Nottinghill", "Oxfordshire", "Pumpkinpatch", "Rivendell", "Scratch-n-sniff", "Scratchnsniff", "Snickersbar", "Snugglesnatch", "Splishnsplash", "Stinkyrash", "Talisman", "Toodlesnoot", "Upperclass", "Vegemite", "Wafflesmack",
				"Bellyrub", "Butterbur", "Cabbagewank", "Candywrap", "Carrotpatch", "Catchlebears", "Centipede", "Counterstrike", "Crumblebread", "Crunchypants", "Cucumberbatch", "Denimhair", "Derbybeef", "Fluffeluff", "Handkerchief", "Pantypants", "Pantysniffer", "Pumpernickel", "Rummelsnuff", "Sabretooth", "Sandalshoe", "Scamander", "Slaptyback", "Strappadoes", "Thundercats", "Thunderpunch", "Tinytoe", "Wondersnatch"
			],
			full: [
				"Benadryl Claritin", "Benedict Timothy Carlton Cumberbatch", "Biblical Concubine", "Bombadil Rivendell", "Bourgeoisie Capitalist", "Buckminster Fullerene", "Butawhiteboy Cantbekhan", "Rinkydink Curdlesnoot", "Wanda's Crotchfruit", "Wimbledon Tennismatch",
				"Battlefield Counterstrike", "Benedick Cucumberbatch", "Blueberry Pumpkinpatch", "Britishname Complicated", "Butterscotch Candywrap", "Engelbert Humperdinck", "Itsy Bitsy Teenie Weenie", "Katie Price", "Mark John Africa Lein", "Reinhard Gosling", "Ryan Stecken"
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
	cb =  {
		_name(obj, limit = 30) {
			const
				memory = store.slice((obj.length > limit) ? -limit : -obj.length / 2).join(),
				arr = obj.filter((el) => memory.indexOf(el) === -1),
				str = arr[parseInt(Math.random() * arr.length)]
			;

			return str;
		},

		_update(el, str) {
			if (el) {
				el.innerHTML = str;
			}
		},

		_onKeypress(e) {
			switch (e.keyCode) {
				case 37:
					// Left arrow
					this.prev();
					break;
				case 39:
					// Right arrow
					this.next();
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
				this.next();
			} else if (touchendX > touchstartX + touchDistance) {
				// Swipe right
				this.prev();
			}
		}
	};

	// Public Methods
	return {
		render(el) {
			this.el = document.querySelector(el || 'h1');

			if (this.el) {
				document.addEventListener('keydown', cb._onKeypress.bind(this));
				window.addEventListener('touchstart', cb._onTouchstart.bind(this));
				window.addEventListener('touchend', cb._onTouchend.bind(this));
			}

			return this;
		},

		random() {
			const rand = Math.floor(Math.random() * 10) + 1;
			return (rand === 10) ? cb._name(names.full) : cb._name(names.first) + ' ' + cb._name(names.last);
		},

		generate() {
			const name = this.random();
			store.push(name);
			index = store.length - 1;
			cb._update(this.el, name);
		},

		next() {
			if (store.length && ++index < store.length) {
				cb._update(this.el, store[index]);
			} else {
				this.generate();
			}
		},

		prev() {
			if (index) {
				cb._update(this.el, store[--index]);
			}
		},
	};
}));
