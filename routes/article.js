var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('article', { title: 'Staking4u' });
});

router.get('/detail/1', function(req, res, next) {
  res.render('article-01', { title: 'Staking4u' });
});

router.get('/detail/2', function(req, res, next) {
  res.render('article-02', { title: 'Staking4u' });
});

router.get('/detail/3', function(req, res, next) {
  res.render('article-03', { title: 'Staking4u' });
});

router.get('/detail/4', function(req, res, next) {
  res.render('article-04', { title: 'Staking4u' });
});
module.exports = router;
