var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Freenters 2.0' });
});

/* GET instruction page. */
router.get('/instructions', function(req, res, next) {
  res.render('pages/instructions', { title: 'Freenters 2.0 | instructions' });
});

/* GET download page. */
router.get('/download', function(req, res, next) {
  res.render('pages/download', { title: 'Freenters 2.0 | download' });
});

/* GET FAQ page. */
router.get('/faq', function(req, res, next) {
  res.render('pages/faq', { title: 'Freenters 2.0 | FAQ' });
});

module.exports = router;
