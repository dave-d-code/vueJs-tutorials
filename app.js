// first is name, then properties
Vue.component('greets', {
	template: `<p>Hey there, I am {{ name }}</p>`,
	// data must be a function in components, not just an object, so that the object data does not get changed by components
	data: function() {
		return {
			name: 'Yoshi'
		}
	},
	methods: {
		changeName: function() {
			this.name = 'mario';
		}
	}
});



var one = new Vue({
	el: '#vue-app-one',
	data: {
		name: 'shaun',
		job: 'postman',
		title: 'hello from app 1',
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
		error: false,
		success: false,
		error2: false,
		success2: false,
		characters: ['mario', 'luigo', 'yusho','bowser'],
		ninjas: [
			{name: 'Ryu', age: 25},
			{name: 'ping', age: 45},
			{name: 'yuu', age: 15},
		],
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

var two = new Vue({
	el: '#vue-app-two',
	data: {
		title: 'vue app 2',
		output: "Your favourate food",
	},
	methods: {
		changeTitle: function() {
			one.title ="title changed by app 2"
		},
		readRefs: function() { // this is big.. all the details of an element. console.log (this.$refs)
			this.output = this.$refs.inputData.value
		}

	},
	computed: {
		greet: function() {
			return 'this is app 2';
		}

	}
});