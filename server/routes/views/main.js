// Export our app routes
exports = module.exports = function (req, res) {
  // Render some simple boilerplate html
	function renderFullPage () {
		return `
  		<!doctype html>
  		<html>
  			<head>
  				<title>Keystone With React And Redux</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  			</head>
  			<body>
          <div class="react-container"></div>
          <script src="bundle.js"></script>
  			</body>
  		</html>
  	`;
	}
  // Send the html boilerplate
	res.send(renderFullPage());
};

// // Export our app routes
// exports = module.exports = function (app) {
//   // Set up the default app route to  http://localhost:3000/main
// 	app.get('/main', function (req, res) {
//     // Render some simple boilerplate html
// 		function renderFullPage () {
// 			return `
//     		<!doctype html>
//     		<html>
//     			<head>
//     				<title>Keystone With React And Redux</title>
//             <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
//             <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
//     			</head>
//     			<body>
//             <div class="react-container"></div>
//             <script src="bundle.js"></script>
//     			</body>
//     		</html>
//     	`;
// 		}
//     // Send the html boilerplate
// 		res.send(renderFullPage());
// 	});
// };
