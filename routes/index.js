var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', {
    title: 'Freenters 2.0',
    activeHome: 'active'
  });
});

/* GET instruction page. */
router.get('/instructions', function(req, res, next) {
  res.render('pages/instructions', {
    title: 'Freenters 2.0 | instructions',
    activeInstructions: 'active',
    navbarScrollToggle: 'navbarScrolled'
  });
});

/* GET download page. */
router.get('/download', function(req, res, next) {
  res.render('pages/download', {
    title: 'Freenters 2.0 | download',
    activeDownload: 'active',
    navbarScrollToggle: 'navbarScrolled'
  });
});

/* GET FAQ page. */
router.get('/faq', function(req, res, next) {
  res.render('pages/faq', {
    title: 'Freenters 2.0 | FAQ',
    activeFaq: 'active',
    navbarScrollToggle: 'navbarScrolled'
  });
});

module.exports = router;
