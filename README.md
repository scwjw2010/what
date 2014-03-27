# what

utility callback to help determine the parameters in poorly documented libraries

## install

yeah i haven't figure this out yet

## usage

drop `what` in as a callback to see how it's called by a library. `what` will print out any parameters it's passed as well as try and figure out what type they are.

```js
var what = require(???);

// some example
fs.stat('what?', what);
    /* prints out:
     * callback(
     *   `{ [Error: ENOENT, stat 'w…` => Error
     * );
     */

// successful case of above
fs.stat('./index.js', what);
    /* prints out:
     * callback(
    *   `null` => Error (guessed)
    *   `{ dev: 12345678,  mode: 3…` => object
    * );
     */
```

`what` can also do a couple more tricks:

```js
// prints out a formatted function header
what.params(fs.stat);
    /* prints out:
	* function <anonymous>(path,callback);
     */

// gets some info on a function, like the function name (if any), parameter names, and function body
what.info(fs.stat);
    /* returns this object:
    * { name: null,
    *   params: [ 'path', 'callback' ],
    *   body: '\n  callback = makeCallback(callback);\n  if (!nullCheck(path, callback)) return;\n  binding.stat(pathModule._makeLong(path), callback);\n' }
     */
```
