/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('calendar', {
    title: 'Calendar',
    scripts: [{ script: 'js/calendar.js' }]
  });
};
