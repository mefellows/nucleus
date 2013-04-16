Ext.Loader.setPath({
  'Ext': 'touch/src',
  'Nucleus': 'lib/Nucleus',
  'TestNucleus': 'spec'
});
Ext.require('Ext.app.Application');
Ext.require('Nucleus.di.Inject');

var Application = null;

Ext.onReady(function() {

      // Ext.Loader.setConfig({
      //     enabled: true
      // })

      Nucleus.di.Inject.configure({
        foo: {
          className: 'TestNucleus.model.Foo',
          parameters: [
              {
                  foo: 'Cats'
              }
          ]

        }
      });

    Application = Ext.create('Ext.app.Application', {
        name: 'TestNucleus',

        // controllers: [
        //     'Users'
        // ],

        launch: function() {
              Ext.create('Ext.viewport.Viewport', {
                  layout: 'fit',
                  items: [
                      {
                          title: 'Hello Ext',
                          html : 'Hello! Welcome to Ext JS.'
                      }
                  ]
              });            
            //include the tests in the test.html head
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
        }
    });
});