// The MIT License

// Copyright (c) 2021 Garvan, Andre Hermanto

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
var demoModule = require('./mockdata')
var express = require('express');
var availableReports = require('./data/available-reports')
var router = express.Router();
const jwt = require("jsonwebtoken");
var fs = require('fs');
var cert = fs.readFileSync(__dirname + '/../singleton-app.pem');

function authenticateToken(req, res, next) {
	// Gather the jwt access token from the request header
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401) // if there isn't any token

	jwt.verify(token.toString(), cert, (err, user) => {
	  if (err) return res.sendStatus(403)
	  req.user = user
	  next() // pass the execution off to whatever request the client intended
	})
  }

router.post('/', authenticateToken, function(req, res, next) {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const dob = req.body.dob;
    const report = req.body.report;
    res.send(demoModule.demo.filter(s => {
        let flag = false;
        if(
          (first_name ==='' || s.first_name.toLowerCase().includes(first_name.toLowerCase())) 
              && (last_name ==='' || s.last_name.toLowerCase().includes(last_name.toLowerCase()))
              && (dob ==='' || dob === s.dob)
              && (availableReports.MAPPING_AVAILABLE_REPORTS[report].includes(s.id))
          ){
              flag = true;
            }
        return flag;
      }))
});

router.post('/families', authenticateToken, function(req, res, next) {
    const familyId = req.body.familyId;
    const report = req.body.report;
    res.send(demoModule.demo.filter(s => {
        return s.familyId === familyId && availableReports.MAPPING_AVAILABLE_REPORTS[report].includes(s.id);
      }))
});

module.exports = router;