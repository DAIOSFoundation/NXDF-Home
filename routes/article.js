// 1월3일 기사 링크 변경
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('article', { title: 'NXDF Protocol' });
});

router.get('/detail/1', function(req, res, next) {
  res.render('article-01', { title: 'NXDF Protocol' });
});

router.get('/detail/2', function(req, res, next) {
  res.render('article-02', { title: 'NXDF Protocol' });
});

router.get('/detail/3', function(req, res, next) {
  res.render('article-03', { title: 'NXDF Protocol' });
});

router.get('/detail/4', function(req, res, next) {
  res.render('article-04', { title: 'NXDF Protocol' });
});
module.exports = router;
