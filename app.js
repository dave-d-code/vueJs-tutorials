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
		}
	}

});