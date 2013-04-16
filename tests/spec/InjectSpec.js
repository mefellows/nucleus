    // (function() {
    //   var jasmineEnv = jasmine.getEnv();
    //   jasmineEnv.updateInterval = 1000;

    //   var htmlReporter = new jasmine.HtmlReporter();

    //   jasmineEnv.addReporter(htmlReporter);
    //   jasmineEnv.addReporter(new jasmine.ConsoleReporter());

    //   jasmineEnv.specFilter = function(spec) {
    //     return htmlReporter.specFilter(spec);
    //   };

    //   var currentWindowOnload = window.onload;

    //   window.onload = function() {
    //     if (currentWindowOnload) {
    //       currentWindowOnload();
    //     }
    //     execJasmine();
    //   };

    //   function execJasmine() {
    //     jasmineEnv.execute();
    //   }

    // })();

describe("Inject", function() {

  /*
   * Setup Sencha Touch Application for Testing
   */
   beforeEach(function() {
      Ext.Loader.setPath({
          'Ext': 'touch/src',
          'Nucleus': 'lib/Nucleus',
          'TestNucleus': 'spec'
      });

      Ext.Loader.setConfig({
          enabled: true
      })

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

      Ext.application({
          name: 'Nucleus',

          launch: function() {
              // Ext.create('Ext.viewport.Viewport', {
              //     layout: 'fit',
              //     items: [
              //         {
              //             title: 'Hello Ext',
              //             html : 'Hello! Welcome to Ext JS.'
              //         }
              //     ]
              // });
          }
      });


   })

  /*
   * Exception scenarious
   */
  it("should fail when singleton class is passed constructor params", function() {

    
    expect(null).toEqual(null);
  });

  it("should do something else and not fail yet", function() {


   	expect(null).toEqual(null);
  });  



});