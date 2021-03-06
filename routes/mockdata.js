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

var FAKE_DEMO_DATA = [{"id":"AAATW","first_name":"Andre","last_name":"Hermanto","gender":"male","dob":"14/6/1993","medicare_no":"9656032497","medicare_ref":4, "familyId":'1', 'relationship': 'proband'},
{"id":"AAAAA","first_name":"Warren","last_name":"Kaplan","gender":"male","dob":"1/3/1971","medicare_no":"5598096609","medicare_ref":2, "familyId":'2', 'relationship': 'proband'},
{"id":"A","first_name":"Andre","last_name":"Camilleri","gender":"female","dob":"24/10/1980","medicare_no":"7057954026","medicare_ref":3, "familyId":'3', 'relationship': 'proband'},
{"id":"B","first_name":"Xever","last_name":"Belson","gender":"male","dob":"12/1/1992","medicare_no":"8899466858","medicare_ref":3, "familyId":'4', 'relationship': 'proband'},
{"id":"C","first_name":"Koren","last_name":"McGall","gender":"female","dob":"20/5/1966","medicare_no":"4960894008","medicare_ref":1, "familyId":'5', 'relationship': 'proband'},
{"id":"D","first_name":"Modestine","last_name":"Jaksic","gender":"male","dob":"9/9/1921","medicare_no":"0844778192","medicare_ref":3, "familyId":'6', 'relationship': 'proband'},
{"id":"E","first_name":"Brit","last_name":"Kennington","gender":"female","dob":"24/9/1978","medicare_no":"1963704231","medicare_ref":1, "familyId":'1', 'relationship': 'mother'},
{"id":"1","first_name":"Mikey","last_name":"Grzegorzewski","gender":"male","dob":"5/1/1924","medicare_no":"8855487884","medicare_ref":4, "familyId":'1', 'relationship': 'father'},
{"id":"F","first_name":"Orly","last_name":"Sachno","gender":"female","dob":"10/2/1945","medicare_no":"1825370265","medicare_ref":4, "familyId":'1', 'relationship': 'siblings'},
{"id":"2","first_name":"Chantal","last_name":"Terrazzo","gender":"male","dob":"29/12/1971","medicare_no":"6638155830","medicare_ref":3, "familyId":'1', 'relationship': 'sibling'},
{"id":"G","first_name":"Aluino","last_name":"Stert","gender":"female","dob":"31/7/1927","medicare_no":"0100246796","medicare_ref":1, "familyId":'2', 'relationship': 'mother'},
{"id":"3","first_name":"Brandie","last_name":"Hancock","gender":"male","dob":"5/11/1937","medicare_no":"0439037697","medicare_ref":1, "familyId":'2', 'relationship': 'father'},
{"id":"H","first_name":"Yardley","last_name":"Plewman","gender":"male","dob":"12/11/1994","medicare_no":"8000683229","medicare_ref":1, "familyId":'2', 'relationship': 'siblings'},
{"id":"14","first_name":"Stesha","last_name":"Pietranek","gender":"female","dob":"14/4/1987","medicare_no":"6055731371","medicare_ref":3, "familyId":'3', 'relationship': 'mpther'},
{"id":"I","first_name":"Nataline","last_name":"Stithe","gender":"male","dob":"11/5/1983","medicare_no":"4253927262","medicare_ref":1, "familyId":'3', 'relationship': 'father'},
{"id":"16","first_name":"Pamela","last_name":"Tumbridge","gender":"female","dob":"5/1/1946","medicare_no":"9544675744","medicare_ref":1, "familyId":'3', 'relationship': 'siblings'},
{"id":"J","first_name":"Che","last_name":"Truscott","gender":"male","dob":"9/1/1994","medicare_no":"1441900373","medicare_ref":1, "familyId":'4', 'relationship': 'mother'},
{"id":"18","first_name":"Antoinette","last_name":"Hammatt","gender":"female","dob":"19/12/1928","medicare_no":"6020472329","medicare_ref":1, "familyId":'4', 'relationship': 'father'},
{"id":"19","first_name":"Teddie","last_name":"Simanek","gender":"male","dob":"13/6/1928","medicare_no":"1391470974","medicare_ref":2, "familyId":'5', 'relationship': 'mother'},
{"id":"20","first_name":"Karna","last_name":"Ralling","gender":"male","dob":"2/3/1999","medicare_no":"8811195357","medicare_ref":1, "familyId":'5', 'relationship': 'father'}]

exports.demo = FAKE_DEMO_DATA;