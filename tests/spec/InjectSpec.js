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
   * Setup Sencha Touch Application for Testing.
   *
   * Reset the Application object before starting again
   */

   var Application = null;

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

      Application = Ext.create('Ext.app.Application', {
          name: 'Nucleus',

          launch: function() {
            // Do nothing...
          }
      });


   })

  /*
   * Exception scenarious
   */
  it("Should apply simple constructor parameters during Injection", function() {
    var bar = Ext.create('TestNucleus.model.Bar');
    bar.hello();
    
    expect(bar.hello()).toEqual("Hello Cats");
  });

  it("should do something else and not fail yet", function() {


   	
  });  



});