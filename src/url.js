/**
@license
The MIT License (MIT)

Copyright (c) 2016 John Pittman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

'use strict';

function URL() {
	this.protocol = null; // http:
	this.slashes = false;
	this.auth = null; // username=password
	this.host = null; // subdomain.domain.com:port
	this.port = null; // 80
	this.hostname = null;
	this.hash = null; // someplace
	this.search = null; // ?item=1&name=joe#someplace
	this.query = null; // item=1&name=joe#someplace or {}
	this.pathname = null; // /a/b/c/
	this.path = null;
	this.href = null; // http://username:password@subdomain.domain.com:port/a/b/c/d/?item=1&name=joe#someplace
}

module.exports = URL;
