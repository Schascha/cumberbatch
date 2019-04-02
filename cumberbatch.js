var cumberbatch = cumberbatch || (() => {
	var
		store = [],
		index = 0,
		memoryStore = {},
		touchstartX = 0,
		touchendX = 0,
		touchDistance = 100
	;

	return {
		names: {
			first: [
				"Bakery", "Bandersnatch", "Bandicoot", "Barbituate", "Barister", "Barnabus", "Barnacle", "Barnoldswick", "Baseballbat", "Baseballmitt", "Bedlington", "Beetlejuice", "Beezlebub", "Benadryl", "Bendandsnap", "Bendydick", "Benetton", "Benjamin", "Bentobox", "Bettyboop", "Billiardball", "Billybong", "Billyray", "Blasphemy", "Blenderdick", "Blubberbutt", "Blubberdick", "Blubberwhale", "Bodybuild", "Boilerdang", "Bombadil", "Bonaparte", "Boobytrap", "Botany", "Bouillabaisse", "Bourgeoisie", "Brandenburg", "Brandybuck", "Brendadirk", "Brewery", "Broccoli", "Bubblebath", "Buckingham", "Buckminster", "Buckyball", "Budapest", "Buffalo", "Bukkake", "Bulbasaur", "Bumberstump", "Bumblebee", "Bumblebee", "Bumbleshack", "Bumblesniff", "Bunsenburner", "Burberry", "Burgerking", "Burlington", "Buttercup", "Butterfree", "Buttermilk", "Cadbury", "Cogglesnatch", "Congleton", "Danglerack", "Fiddlestick", "Fragglerock", "Honkytonk", "Johnnycash", "Liverswort", "Muffintop", "Oscarbait", "Pallettown", "Rinkydink", "Rumblesack", "Snorkeldink", "Snozzlebert", "Syphilis", "Tiddleywomp", "Timothy", "Wellington", "Whippersnatch", "Wimbledon",
				"Bacardi", "Bagelbread", "Bagleface", "Barliman", "Bellybutton", "Benedick", "Berrywinkle", "Billyboy", "Booblesnoot", "Blueberry", "Blunderbrick", "Bobafett", "Bobbypin", "Brownbear", "Bumblesnuff", "Bumfuzzle", "Butterscotch", "Canterbury", "Carpettrip", "Cheesecake", "Choclaitchip", "Cockapoo", "Cordula", "Dinglebird", "Dumbledore", "Engelbert", "Gobbledygook", "Hodgepodge", "Hullabaloo", "Hummingbird", "Igglybuff", "Lemontree", "Longdong", "Massachusetts", "Poppycock", "Quitsack", "Ragnarök", "Ronald", "Singlehandedly", "Stinkyfruit", "Stinkytoe", "Taradiddle", "Widdershins"
			],
			last: [
				"Ampersand", "Anglerfish", "Animorph", "Banglesnatch", "Battleship", "Bumbersplat", "Cabbagepatch", "Calldispatch", "Cameltoe", "Camouflage", "Candlestick", "Candycrush", "Candygram", "Cankersore", "Capncrunch", "Carrotstick", "Charizard", "Charmander", "Cheddarcheese", "Chesterfield", "Chickenbroth", "Chickenstrips", "Chowderpants", "Chuckecheese", "Claritin", "Clavichord", "Clombyclomp", "Cockletit", "Coddleswort", "Coggleswort", "Collywog", "Colonist", "Commonwealth", "Concubine", "Coochierash", "Coochyrash", "Copperwire", "Cottagecheese", "Countryside", "Covergirl", "Crackerdong", "Crackerjack", "Crackersprout", "Cragglethatch", "Cramplesnutch", "Creamsicle", "Crimpysnitch", "Crucifix", "Crumplebutt", "Crumplehorn", "Crumplesack", "Cuckatoo", "Cuckooclock", "Cul-de-sac", "Cumberbitch", "Cumberbund", "Cumbercooch", "Cumbersnatch", "Cumbersniff", "Cumbersome", "Cummerbund", "Cunningsnatch", "Curdledmilk", "Curdledong", "Curdlemilk", "Curdlesnoot", "Custardbath", "Cuttlefish", "Frumblesnatch", "Fullerene", "Humperdinck", "Kryptonite", "Lingerie", "Lumberjack", "Moldyspore", "Nottinghill", "Oxfordshire", "Pumpkinpatch", "Rivendell", "Scratch-n-sniff", "Scratchnsniff", "Snickersbar", "Snugglesnatch", "Splishnsplash", "Stinkyrash", "Talisman", "Toodlesnoot", "Upperclass", "Vegemite", "Wafflesmack",
				"Bellyrub", "Butterbur", "Cabbagewank", "Candywrap", "Carrotpatch", "Catchlebears", "Centipede", "Crumblebread", "Crunchypants", "Cucumberbatch", "Derbybeef", "Fluffeluff", "Handkerchief", "Pantypants", "Pantysniffer", "Pumpernickel", "Rummelsnuff", "Sabretooth", "Sandalshoe", "Scamander", "Slaptyback", "Strappadoes", "Thundercats", "Thunderpunch", "Tinytoe", "Wondersnatch"
			],
			full: [
				"Benadryl Claritin", "Benedict Timothy Carlton Cumberbatch", "Biblical Concubine", "Bombadil Rivendell", "Bourgeoisie Capitalist", "Buckminster Fullerene", "Butawhiteboy Cantbekhan", "Rinkydink Curdlesnoot", "Wanda's Crotchfruit", "Wimbledon Tennismatch",
				"Benedick Cucumberbatch", "Blueberry Pumpkinpatch", "Britishname Complicated", "Butterscotch Candywrap", "Engelbert Humperdinck", "Itsy Bitsy Teenie Weenie", "Katie Price", "Mark John Africa Lein", "Reinhard Gosling", "Ryan Stecken"
			]
		},

		render(el) {
			this.el = document.querySelector(el || 'h1');

			if (this.el) {
				document.addEventListener('keydown', (e) => this._onKeypress(e));
				window.addEventListener('touchstart', (e) => this._onTouchstart(e));
				window.addEventListener('touchend', (e) => this._onTouchend(e));
			}

			return this;
		},

		random() {
			const rand = Math.floor(Math.random() * 10) + 1;
			return (rand === 10) ? this._memory('full') : this._memory('first') + ' ' + this._memory('last');
		},

		generate() {
			const name = this.random();
			store.push(name);
			index = store.length - 1;
			this._update(name);
		},

		next() {
			if (store.length && ++index < store.length) {
				this._update(store[index]);
			} else {
				this.generate();
			}
		},

		prev() {
			if (index > 0) {
				this._update(store[--index]);
			}
		},

		_memory(name, limit = 20) {
			const
				size = this.names[name].length,
				memory = memoryStore[name] || [],
				arr = this.names[name].filter((el) => memory.indexOf(el) === -1),
				str = arr[parseInt(Math.random() * arr.length)]
			;

			memory.push(str);

			// Remove first element from memory if limit is reached
			if (memory.length > ((limit > size) ? size / 2 : limit)) {
				memory.shift();
			}

			memoryStore[name] = memory;

			return str;
		},

		_update(name) {
			if (this.el) {
				this.el.innerHTML = name;
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
})();
