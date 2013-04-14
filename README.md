Nucleus
=======

Flyweight dependency injection framework for Sencha Touch.

Summary
=======
Nucleus is designed to be a

* Lightweight (< 3kb compressed)
* Unobtrusive - you shouldn't need to extend any class or participate in any complicated inheritance hierarchy to use Nucleus
* Simple to use - the intention is to satisfy the most common use cases, not every possibility under the sun

Project Status
==============
Project is currently in **Alpha**, meaning it is highly likely to change (probably for the better).

Build Status
============
[![Build Status](https://travis-ci.org/mefellows/nucleus.png)](https://travis-ci.org/mefellows/nucleus)


Installation
============

Production
----------
1. Copy the `nucleus.js-version-x.y.z` distribution into your extension directonio (i.e. `/lib`)
2. Add the following to the `js` array in `app.json`

````javascript
    "js": [
        {
             "path": "sencha-touch-all-compat.js"
        },
        {
             "path": "lib/nucleus.js"
        },
        {
            "path": "app.js",
            "bundle": true,  /* Indicates that all class dependencies are concatenated into this file when build */
            "update": "delta"
        }
    ],
````

Development
-----------
1. Copy the library contents from the /dist into a `Nucleus` folder in the root of your Sencha Touch application folder (by default)
2. Add the following to the `js` array in `app.json`

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
In app.js, just prior to your `Ext.application` declaration, 

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
