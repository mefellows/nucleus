Ext.define('TestNucleus.model.Foo', {
	config: {
		foo: 'bar',

		// Autowired dependencies
		// injects: [
		// 	{
		// 		foo: 'foo'
		// 	}
		// ]		
	},

	mixins: [
		'Nucleus.di.mixin.Injectable'
	],	

	constructor: function(config) {		
		this.initConfig(config);
	}
})