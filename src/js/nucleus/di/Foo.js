Ext.define('Nucleus.di.Foo', {

	config: {
		bar: 'car'
	},

    constructor: function(config) {
        this.initConfig(config);
    },

	test: function() {
		alert('foo called! Hello ' + this.getBar())
	}
});