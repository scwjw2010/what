# what

utility callback to help determine the parameters in poorly documented libraries

## install

yeah i haven't figured this bit out yet

## usage

```js
var what = require('what');

fs.stat('what?', what);
    /* prints out:
     * callback(
     *   `{ [Error: ENOENT, stat 'w…` => Error
     * );
     */

fs.stat('./index.js', what);
    /* prints out:
     * callback(
    *   `null` => Error (guessed)
    *   `{ dev: 12345678,  mode: 3…` => null
    * );
     */

what.params(fs.stat);
    /* prints out:
	* function <anonymous>(path,callback);
     */

what.info(fs.stat);
    /* returns this object:
    * { name: null,
    *   params: [ 'path', 'callback' ],
    *   body: '\n  callback = makeCallback(callback);\n  if (!nullCheck(path, callback)) return;\n  binding.stat(pathModule._makeLong(path), callback);\n' }
     */
```