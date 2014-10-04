# StringGender [![NPM version](https://badge.fury.io/js/string-gender.png)](http://badge.fury.io/js/string-gender) [![Build Status](https://travis-ci.org/darul75/string-gender.png?branch=master)](https://travis-ci.org/darul75/string-gender)

**StringGender** is a small implementation for NodeJS to retrieve gender from firstname or email address or...

## Why ?

For instance, in an emailing campaign, it was useful to get the gender of the participating people.
StringGender is not perfect but can give an overview.

## Demo

TODO http://darul-demo.herokuapp.com/string-gender

## Install

~~~
TODO npm install string-gender
~~~

## Usage

```javascript
var sg = require('sg');

// Example retrieve IP from request

sg.getGenderByIndex({string: 'Jean-Paul'}, function(results) {

  /*
  Array[1]
  0: Object
    doc: Object
      countries: "       7651   4                                         $"
      gender: "M"
      id: "julien"
      name: "julien"
    key: "M julien"
    measure: 22.965674645305885
  */

}

```    
    
## Return    

~~~ json
{
    
}
~~~

Details

- **ip** (Visitor IP address, or IP address specified as parameter)


## Options

- **ip** : if not set, give request ip.


## License

The MIT License (MIT)

Copyright (c) 2013 Julien Valéry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
