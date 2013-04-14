Nucleus
=======

Flyweight dependency injection framework for Sencha Touch.

Summary
=======
Nucleus is designed to be a

* Lightweight (< 1kb compressed)
* Unobtrusive - you shouldn't need to extend any class or participate in any complicated inheritance hierarchy to use Nucleus
* Simple to use - the intention is to satisfy the most common use cases, not every possibility under the sun

Download
========

Installation
============

1. Copy the library contents from the /dist into a <code>Nucleus</code> folder in the root of your Sencha Touch application folder (by default)
2. Add the following to the <code>js</code> array in <code>app.json</code>

````javascript
     "js": [
        {
            "path": "touch/sencha-touch.js",
            "x-bootstrap": true
        },
        {
            "path": "Nucleus/di/Inject.js",
            "x-bootstrap": true
        },
        {
            "path": "app.js",
            "bundle": true,  /* Indicates that all class dependencies are concatenated into this file when build */
            "update": "delta"
        }
        ...
    ],
````
Nucleus is installed.

Configuration
=============
In app.js, just prior to your <code>Ext.application</code> declaration, 

````javascript
Nucleus.di.Inject.configure({
  foo: {
    className: 'Substantiate.di.Foo',
    parameters: [
        {
            bar: 'oh yeah!'
        }
    ]

  },

  auth: {
    className: 'Substantiate.service.security.Auth'
  },
});

Ext.application({
   ...
````
