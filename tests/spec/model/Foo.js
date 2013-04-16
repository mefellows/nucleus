Ext.define('TestNucleus.model.Foo', {
	config: {
		foo: 'bar',
	},

	mixins: [
		'Nucleus.di.mixin.Injectable'
	],	

	constructor: function(config) {		
		this.initConfig(config);
	},

	hello: function() {
		return this.getFoo();
	}
})