const
	cumberbatch = {
		names: {
			first: [
				"Bumblebee", "Bandersnatch", "Broccoli", "Rinkydink", "Bombadil", "Boilerdang", "Bandicoot", "Fragglerock", "Muffintop", "Congleton", "Blubberdick", "Buffalo", "Benadryl", "Butterfree", "Burberry", "Whippersnatch", "Buttermilk", "Beezlebub", "Budapest", "Boilerdang", "Blubberwhale", "Bumberstump", "Bulbasaur", "Cogglesnatch", "Liverswort", "Bodybuild", "Johnnycash", "Bendydick", "Burgerking", "Bonaparte", "Bunsenburner", "Billiardball", "Bukkake", "Baseballmitt", "Blubberbutt", "Baseballbat", "Rumblesack", "Barister", "Danglerack", "Rinkydink", "Bombadil", "Honkytonk", "Billyray", "Bumbleshack", "Snorkeldink", "Beetlejuice", "Bedlington", "Bandicoot", "Boobytrap", "Blenderdick", "Bentobox", "Pallettown", "Wimbledon", "Buttercup", "Blasphemy", "Syphilis", "Snorkeldink", "Brandenburg", "Barbituate", "Snozzlebert", "Tiddleywomp", "Bouillabaisse", "Wellington", "Benetton", "Bendandsnap", "Timothy", "Brewery", "Bentobox", "Brandybuck", "Benjamin", "Buckminster", "Bourgeoisie", "Bakery", "Oscarbait", "Buckyball", "Bourgeoisie", "Burlington", "Buckingham", "Barnoldswick", "Bumblesniff", "Butercup", "Bubblebath", "Fiddlestick", "Bulbasaur", "Bumblebee", "Bettyboop", "Botany", "Cadbury", "Brendadirk", "Buckingham", "Barnabus", "Barnacle", "Billybong", "Botany"
			],
			last: [
				"Coddleswort", "Crumplesack", "Curdlesnoot", "Calldispatch", "Humperdinck", "Rivendell", "Cuttlefish", "Lingerie", "Vegemite", "Ampersand", "Cumberbund", "Candycrush", "Clombyclomp", "Cragglethatch", "Nottinghill", "Cabbagepatch", "Camouflage", "Creamsicle", "Curdlemilk", "Upperclass", "Frumblesnatch", "Crumplehorn", "Talisman", "Candlestick", "Chesterfield", "Bumbersplat", "Scratchnsniff", "Snugglesnatch", "Charizard", "Carrotstick", "Cumbercooch", "Crackerjack", "Crucifix", "Cuckatoo", "Cockletit", "Collywog", "Capncrunch", "Covergirl", "Cumbersnatch", "Countryside", "Coggleswort", "Splishnsplash", "Copperwire", "Animorph", "Curdledmilk", "Cheddarcheese", "Cottagecheese", "Crumplehorn", "Snickersbar", "Banglesnatch", "Stinkyrash", "Cameltoe", "Chickenbroth", "Concubine", "Candygram", "Moldyspore", "Chuckecheese", "Cankersore", "Crimpysnitch", "Wafflesmack", "Chowderpants", "Toodlesnoot", "Clavichord", "Cuckooclock", "Oxfordshire", "Cumbersome", "Chickenstrips", "Battleship", "Commonwealth", "Cunningsnatch", "Custardbath", "Kryptonite", "Curdlesnoot", "Cummerbund", "Coochyrash", "Crackerdong", "Crackerdong", "Curdledong", "Crackersprout", "Crumplebutt", "Colonist", "Coochierash", "Anglerfish", "Cumbersniff", "Charmander", "Scratch-n-sniff", "Cumberbitch", "Pumpkinpatch", "Cramplesnutch", "Lumberjack", "Bonaparte", "Cul-de-sac", "Cankersore",

				"Cumbersnatch"
			],
			full: [
				"Wimbledon Tennismatch", "Rinkydink Curdlesnoot", "Butawhiteboy Cantbekhan", "Benadryl Claritin", "Bombadil Rivendell", "Wanda's Crotchfruit", "Wanda's Crotchfruit", "Biblical Concubine", "Butawhite Cantbekhan", "Butawhiteboy Cantbekhan", "Benedict Timothy Carlton Cumberbatch", "Buckminster Fullerene", "Bourgeoisie Capitalist",

				"Mark John Africa Lain", "Reinhard Gosling", "Katie Price"
			]
		},
		store: [],
		index: 0,
		touchstartX: 0,
		touchendX: 0,

		render(el) {
			this.el = document.querySelector(el || 'h1');
			document.addEventListener('keydown', (e) => this._onKeypress(e));
			window.addEventListener('touchstart', (e) => this._onTouchstart(e));
			window.addEventListener('touchend', (e) => this._onTouchend(e));
		},

		generator() {
			const
				rand = (arr) => (arr) ? arr[parseInt(Math.random() * arr.length)] : Math.floor(Math.random() * 10) + 1,
				name = (rand() == 10) ? rand(this.names.full) : rand(this.names.first) + ' ' + rand(this.names.last)
			;

			this.store.push(name);
			this.index = this.store.length - 1;
			this.el.innerHTML = name;
		},

		next() {
			if (this.store.length && ++this.index < this.store.length) {
				this.el.innerHTML = this.store[this.index];
			} else {
				this.generator();
			}
		},

		prev() {
			if (this.index > 0) {
				this.el.innerHTML = this.store[--this.index];
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

			if (this.touchendX < this.touchstartX) {
				// Swipe left
				this.next();
			} else if (this.touchendX > this.touchstartX) {
				// Swipe right
				this.prev();
			}
		}
	}
;
