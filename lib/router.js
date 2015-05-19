Router.configure({
	layoutTemplate:'layout'
});

Router.route('/', {
	name: 'home',
	template: 'home',
	action: function() {
		this.render();
	}
})

Router.route('/about', {
	name: 'about',
	template: 'about',
	action: function() {
		this.render();
	}
})


