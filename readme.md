# simple-reconnect-ws

Simple reconnct logic for websockets (to use with browserify)

```js
var reconnect = require('simple-reconnect-ws')
  , elm = document.getElementById('countdown')

  , onmessage = function (event) {
      // event is a MessageEvent (https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent)
    }
    // optional callback called every time a reconnect is made
  , onreconnect = function () {
      elm.style.color = 'yellow'
      elm.innerHTML = 'Catch up ketchup!'
    }

reconnect('ws://' + window.location.host, onmessage, onreconnect)
```

[![NPM](https://nodei.co/npm/simple-reconnect-ws.png?downloads&stars)](https://nodei.co/npm/simple-reconnect-ws/)

[![NPM](https://nodei.co/npm-dl/simple-reconnect-ws.png)](https://nodei.co/npm/simple-reconnect-ws/)

## Installation

```
npm install simple-reconnect-ws
```

## Licence

Copyright (c) 2014 David Björklund

This software is released under the MIT license:

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
