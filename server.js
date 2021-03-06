const express = require('express');
const app = express();
const path = require('path');
const DBConnect = require('./config/db');

// get app route
const users = require('./routes/users');
const profile = require('./routes/profile');
const auth = require('./routes/auth');
const posts = require('./routes/posts');
const error404 = require('./controllers/404page');

const errorHandler = require('./middleware/errorHandler');

const PORT = process.env.PORT || 5000;

const connection = async () => {
	try {
		await DBConnect();
	} catch (err) {
		console.log(err);
	}
};

connection()
	.then(async (_) => {
		// middleware to pass requset as json
		app.use(express.json({ extended: false }));

		// middleware routes
		app.use('/api/v1/users', users);
		app.use('/api/v1/profile', profile);
		app.use('/api/v1/auth', auth);
		app.use('/api/v1/posts', posts);

		// handle any error
		app.use(errorHandler);

		// Serve static assets in production
		if (process.env.NODE_ENV === 'production') {
			// set static folder
			const publicPath = path.join(__dirname, './client/build');

			app.use(express.static(publicPath));

			app.get('*', (req, res) => {
				res.sendFile(path.join(publicPath, 'index.html'));
			});
		}

		app.use(error404);


		const server = await app.listen(PORT);
		console.log(`Server started on port ${PORT}`);
		const io = require("./socket").init(server);
		io.on("connection", _ =>{
			console.log("client connection")
		})
	})
	.catch((err) => {
		console.log(err);
	});
