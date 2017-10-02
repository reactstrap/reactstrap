var fs = require('fs');

// Ensure that any optional peer dependency (e.g. ReactTransitionGroup and
// ReactPopper) are properly set as optional globals. Specifically, do not
// error if the user has not loaded these dependencies. Degrade gracefully.

fs.readFile(__dirname + '/../dist/reactstrap.min.js', 'utf8', function(err, data) {
  if (err) {
    return console.error(err);
  }

  var result = data.replace(
    /\,([a-zA-Z]+)\.ReactTransitionGroup\.Transition/,
    ',$1.ReactTransitionGroup && $1.ReactTransitionGroup.Transition || undefined'
  ).replace(
    /\,([a-zA-Z]+)\.ReactPopper/,
    ',$1.ReactPopper || undefined'
  );

  fs.writeFile(__dirname + '/../dist/reactstrap.min.js', result, 'utf8', function(err) {
    if (err) {
      console.error(err);
    }
  });

});
