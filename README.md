# StringGender [![NPM version](https://badge.fury.io/js/string-gender.png)](http://badge.fury.io/js/string-gender) [![Build Status](https://travis-ci.org/darul75/string-gender.png?branch=master)](https://travis-ci.org/darul75/string-gender) [![Total views](https://sourcegraph.com/api/repos/github.com/darul75/string-gender/counters/views.png)](https://sourcegraph.com/github.com/darul75/string-gender)

**StringGender** nodejs library to find out the sex of a string or an email.

## Why ?

For instance, in an emailing campaign, it was useful to get an overview of gender from participating people.

## Demo

TODO http://darul-demo.herokuapp.com/string-gender

## Install

~~~
TODO npm install string-gender
~~~

## Usage

```javascript
var sg = require('sg');

// non case sensitive

// single firstname

sg.getGender({string: 'Aaron'}, function(results) {

  // array

}

// composite firstname

sg.getGender({string: 'Jean-Paul'}, function(results) {

  // array

}

// with email

sg.getGender({string: 'julien.valery@github.com', email:true}, function(results) {

  // array

}

```    
    
## Return

~~~ json
[{
  doc: {
      countries: [
      {
        name: "great_britain"
        ISO: "GB"
        frequency: "2"
      },
      {
        name: "ireland",
        ISO: "IE",
        frequency: "2"
      },
      {
        name: "usa",
        ISO: "AU",
        frequency: "2"
      }],
      gender: "M",
      id: "aaron",
      name: "aaron"
    },  
    key: "M aaron",
    measure: 22.965674645305885
}]
~~~

*Syntax for "gender" field*
- **M**  male first name
- **1M** male name, if first part of name; else: mostly male name
- **?M** mostly male name (= unisex name, which is mostly male)
- **F** female first name> 1F <female name, if first part of name; else: mostly female name
- **?F** mostly female name (= unisex name, which is mostly female)
- **?**  unisex name (= can be male or female)

# Details

- **countries**: list of countries for this name ( 1 to 13 in hexa code ) by frequency
- **gender**: sex gender
- **id**: document key
- **name**: firstname

## Options

- **string** : string firstname or email
- **email** : boolean

## Reminder

- [ ] demo
- [ ] fix bugs
- [x] search by index
- [ ] search in json object
- [x] format country in results by ISO codes
- [ ] index regexp options for splitting
- [ ] reformat, fix entries in dico


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
