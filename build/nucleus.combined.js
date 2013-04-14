Ext.define('Nucleus.di.Inject', {
	singleton: true,

    constructor: function(config) {
        this.initConfig(config);
		/**
		 * Container for all of the dependencies. 
		 * Keys are the fully qualified class names and the values are the singleton
		 * objects themselves.
		 */
		this.registry = {}		
    },	

	configure: function(config) {
		console.log('Configuring dependencies. Pre-instantiating Singletons for autowired classes.');

		Ext.Object.each(config, function(identifier, configuration) {
			console.log('Found dependency: ' + identifier + ', className: ' + configuration.className);
			console.log('Checking to see if class has been instantiated..')

		    classDefinition = Ext.ClassManager.get(configuration.className);
			if (!(classDefinition != null)) {
				console.warn("Synchronously loading '" + (configuration.className) + "'; consider adding Ext.require('" + (configuration.className) + "') above Ext.onReady.");
				Ext.syncRequire(configuration.className);
				classDefinition = Ext.ClassManager.get(configuration.className);
			}

			parameters = configuration.parameters != null ? [configuration.className].concat(configuration.parameters) : [configuration.className];

			console.error("boo" + Ext.ClassManager.get(configuration.className).singleton)

			if (configuration.parameters != null && Array.isArray(configuration.parameters) && configuration.parameters.length > 0) {
				// Note: this won't work on a ExtJS singleton
				console.log('class has constructor params, injecting into instance')
				console.log(parameters)
	        	instance = Ext.create.apply(this, parameters);
			} else {
				console.log('class does not have constructor params')	
        		instance = Ext.create.apply(this, parameters);
			}
	        
	        this.registry[identifier] = instance;

			// Singleton treatment - ensure setters/getters, only basic configuration
			// allowed as parameters

			// Seems to create the class, but without params?
			//Ext.syncRequire(configuration.className);
			//classDefinition = Ext  .ClassManager.get(configuration.className);
			// console.log(classDefinition)

			// classDefinition.foo();
		}, this);

	},

	inject: function(object) {
		var me = this;
		if (object.getInjected()) {
			console.debug('Object has already been injected, ignoring')
		} else {
			console.debug('Object has not been injected, injecting...')
			console.debug('injecting!')
	        if (Array.isArray(object.config.injects)) {
	            console.debug('Class contains dependency injection annotations');
	            Ext.Array.each(object.config.injects, function(dependency, index) {
	            	console.log('Found dependency with key ');
	            	console.log(dependency);
	            	var identifier = Ext.Object.getKeys(dependency).length > 0 ? Ext.Object.getKeys(dependency)[0] : null;
	            	var className = Ext.Object.getValues(dependency)[0];
	            	me.generateGetter(object, identifier, className);
	            });

			} else {
				console.debug('boo');
			}

			// Prevent circular dependencies
			object.setInjected(true);
			instance.test();
		}
	},

    /**
     * @private
     * 1.x-inspired ref implementation
     */
    generateGetter: function(object, identifier, className) {
    	console.log('creating getter')
        var me = this;
        var getterName = "get" + Ext.String.capitalize(identifier);

        object[getterName] = function(className) {
        	return function() {
            	return me.registry[identifier]
            }
        }(identifier);

        console.log(object)
    },
});Ext.define('Nucleus.di.mixin.Injectable', {
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
