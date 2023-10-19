const mongoose = require("mongoose");

const password = process.env.MONGO_PASS;

const connectionString = `mongodb+srv://blueinkstains:${password}@cluster0.z1lshiz.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

// log when we successfully connect to db
mongoose.connection.once('open', () => {
	console.log('connected to database');
});