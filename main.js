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

		render(el) {
			this.el = document.querySelector(el || 'h1');
			document.addEventListener('keydown', (e) => this.onKeypress(e));
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

		onKeypress(e) {
			// Left arrow
			if (e.keyCode === 37 && this.index > 0) {
				this.el.innerHTML = this.store[--this.index];
			}

			// Right arrow
			if (e.keyCode === 39) {
				if (this.store.length && ++this.index < this.store.length) {
					this.el.innerHTML = this.store[this.index];
				} else {
					this.generator();
				}
			}
		}
	}
;
