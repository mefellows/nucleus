Ext.define('TestNucleus.model.Bar', {
	config: {
		foo: 'bar',

		// Autowired dependencies
		injects: [
			{
				foo: 'foo'
			}
		]		
	},

	mixins: [
		'Nucleus.di.mixin.Injectable'
	],	

	constructor: function(config) {		
		this.initConfig(config);
	},

	hello: function() {
		return "Hello " + this.getFoo().hello();
	}
})