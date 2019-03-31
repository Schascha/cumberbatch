var cumberbatch = {
	names: {
		first: [
			"Bakery", "Bandersnatch", "Bandicoot", "Barbituate", "Barister", "Barnabus", "Barnacle", "Barnoldswick", "Baseballbat", "Baseballmitt", "Bedlington", "Beetlejuice", "Beezlebub", "Benadryl", "Bendandsnap", "Bendydick", "Benetton", "Benjamin", "Bentobox", "Bettyboop", "Billiardball", "Billybong", "Billyray", "Blasphemy", "Blenderdick", "Blubberbutt", "Blubberdick", "Blubberwhale", "Bodybuild", "Boilerdang", "Bombadil", "Bombadil", "Bonaparte", "Boobytrap", "Botany", "Bouillabaisse", "Bourgeoisie", "Brandenburg", "Brandybuck", "Brendadirk", "Brewery", "Broccoli", "Bubblebath", "Buckingham", "Buckminster", "Buckyball", "Budapest", "Buffalo", "Bukkake", "Bulbasaur", "Bumberstump", "Bumblebee", "Bumblebee", "Bumbleshack", "Bumblesniff", "Bunsenburner", "Burberry", "Burgerking", "Burlington", "Buttercup", "Butterfree", "Buttermilk", "Cadbury", "Cogglesnatch", "Congleton", "Danglerack", "Fiddlestick", "Fragglerock", "Honkytonk", "Johnnycash", "Liverswort", "Muffintop", "Oscarbait", "Pallettown", "Rinkydink", "Rumblesack", "Snorkeldink", "Snozzlebert", "Syphilis", "Tiddleywomp", "Timothy", "Wellington", "Whippersnatch", "Wimbledon",
			"Bacardi", "Bagleface", "Barliman", "Bellybutton", "Benedick", "Berrywinkle", "Billyboy", "Booblesnoot", "Blueberry", "Blunderbrick", "Bobafett", "Bobbypin", "Brownbear", "Bumblesnuff", "Bumfuzzle", "Butterscotch", "Canterbury", "Carpettrip", "Dinglebird", "Dumbledore", "Engelbert", "Gobbledygook", "Hodgepodge", "Hullabaloo", "Hummingbird", "Igglybuff", "Lemontree", "Longdong", "Massachusetts", "Poppycock", "Quitsack", "Ragnarök", "Stinkyfruit", "Stinkytoe", "Taradiddle", "Widdershins"
		],
		last: [
			"Ampersand", "Anglerfish", "Animorph", "Banglesnatch", "Battleship", "Bumbersplat", "Cabbagepatch", "Calldispatch", "Cameltoe", "Camouflage", "Candlestick", "Candycrush", "Candygram", "Cankersore", "Capncrunch", "Carrotstick", "Charizard", "Charmander", "Cheddarcheese", "Chesterfield", "Chickenbroth", "Chickenstrips", "Chowderpants", "Chuckecheese", "Clavichord", "Clombyclomp", "Cockletit", "Coddleswort", "Coggleswort", "Collywog", "Colonist", "Commonwealth", "Concubine", "Coochierash", "Coochyrash", "Copperwire", "Cottagecheese", "Countryside", "Covergirl", "Crackerdong", "Crackerjack", "Crackersprout", "Cragglethatch", "Cramplesnutch", "Creamsicle", "Crimpysnitch", "Crucifix", "Crumplebutt", "Crumplehorn", "Crumplesack", "Cuckatoo", "Cuckooclock", "Cul-de-sac", "Cumberbitch", "Cumberbund", "Cumbercooch", "Cumbersnatch", "Cumbersniff", "Cumbersome", "Cummerbund", "Cunningsnatch", "Curdledmilk", "Curdledong", "Curdlemilk", "Curdlesnoot", "Custardbath", "Cuttlefish", "Frumblesnatch", "Humperdinck", "Kryptonite", "Lingerie", "Lumberjack", "Moldyspore", "Nottinghill", "Oxfordshire", "Pumpkinpatch", "Rivendell", "Scratch-n-sniff", "Scratchnsniff", "Snickersbar", "Snugglesnatch", "Splishnsplash", "Stinkyrash", "Talisman", "Toodlesnoot", "Upperclass", "Vegemite", "Wafflesmack",
			"Bellyrub", "Butterbur", "Cabbagewank", "Candywrap", "Carrotpatch", "Catchlebears", "Centipede", "Crumblebread", "Crunchypants", "Cucumberbatch", "Fluffeluff", "Handkerchief", "Pantypants", "Pantysniffer", "Pumpernickel", "Rummelsnuff", "Sabretooth", "Sandalshoe", "Scamander", "Slaptyback", "Thundercats", "Thunderpunch", "Tinytoe", "Wondersnatch"
		],
		full: [
			"Benadryl Claritin", "Benedict Timothy Carlton Cumberbatch", "Biblical Concubine", "Bombadil Rivendell", "Bourgeoisie Capitalist", "Buckminster Fullerene", "Butawhiteboy Cantbekhan", "Rinkydink Curdlesnoot", "Wanda's Crotchfruit", "Wimbledon Tennismatch",
			"Benedick Cucumberbatch", "Blueberry Pumpkinpatch", "Britishname Complicated", "Butterscotch Candywrap", "Engelbert Humperdinck", "Itsy Bitsy Teenie Weenie", "Mark John Africa Lein", "Reinhard Gosling", "Katie Price"
		]
	},
	store: [],
	index: 0,
	touchstartX: 0,
	touchendX: 0,
	touchDistance: 100,

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
		const
			rand = (arr) => (arr) ? arr[parseInt(Math.random() * arr.length)] : Math.floor(Math.random() * 10) + 1,
			name = (rand() == 10) ? rand(this.names.full) : rand(this.names.first) + ' ' + rand(this.names.last)
		;

		return name;
	},

	generate() {
		const name = this.random();
		this.store.push(name);
		this.index = this.store.length - 1;
		this._update(name);
	},

	next() {
		if (this.store.length && ++this.index < this.store.length) {
			this._update(this.store[this.index]);
		} else {
			this.generate();
		}
	},

	prev() {
		if (this.index > 0) {
			this._update(this.store[--this.index]);
		}
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
		this.touchstartX = e.changedTouches[0].screenX;
	},

	_onTouchend(e) {
		this.touchendX = e.changedTouches[0].screenX;

		if (this.touchendX + this.touchDistance < this.touchstartX) {
			// Swipe left
			this.next();
		} else if (this.touchendX > this.touchstartX + this.touchDistance) {
			// Swipe right
			this.prev();
		}
	}
};
