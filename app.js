new Vue({
	el: '#vue-app',
	data: {
		name: 'shaun',
		job: 'postman',
		website: 'https://www.liveleak.com',
		websiteTag: '<a href="https://www.liveleak.com">in model</a>',
		age: 25,
		x: 0,
		y: 0,
		iname: '',
		iage: '',
		a: 0,
		b: 0,
		cAge: 20,
		aa: 0,
		bb: 0,
		available: false,
		nearby: false,
	},
	methods: {
		greet: function(time) {
			this
			return 'good ' + time + ' ' + this.name;
		},
		addAge: function(diff) {
			this.age += diff;
		},
		subAge: function(diff) {
			this.age -= diff;
		},
		updateXY: function(event) {
			this.x = event.offsetX;
			this.y = event.offsetY;
		}, 
		clickLink: function() {
			alert('you clicked me');
		},
		logName: function() {
			console.log('you entered your name');
		},
		logAge: function() {
			console.log('you entered your age');
		},
		addToA: function() {
			return this.a + this.age;
		},
		addToB: function() {
			return this.b + this.age;
		},
	},
	computed: {
		addToAA: function() {
			return this.aa + this.age;
		},
		addToBB: function() {
			return this.bb + this.age;
		},
		compClasses: function() {
			return {
			available: this.available,
			nearby: this.nearby,	
			}
		},
	}

});