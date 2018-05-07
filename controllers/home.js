/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('dashboard', {
    title: 'Dashboard',
    scripts: [{ script: 'js/dashboard.js' }]
  });
};
