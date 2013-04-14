Ext.define('Nucleus.di.mixin.Injectable', {
    extend: 'Ext.mixin.Mixin',

    requires: [
    	'Nucleus.di.Inject'
    ],

    config: {
        /**
         * Flag indicating whether or not the current class has been injected with
         * its dependincies
         */
        injected: false
    },

    constructor: function(config) {
        this.initConfig(config);
        console.log("constructing Injectable mixin for class");
        // this.callParent(arguments)
    },  

    onClassMixedIn: function(targetClass) {
      var me = this;
      targetClass.prototype.constructor = Ext.Function.createInterceptor(targetClass.prototype.constructor, function() {
          console.log('mixed in!')
          // Perform injection on class
          Nucleus.di.Inject.inject(this);
      });
    },

}, function(me) {
	console.log("creating injectable class...");
});
