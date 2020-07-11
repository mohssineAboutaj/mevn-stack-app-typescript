import { log } from "console";

const { MongoClient } = require("mongodb");
const { connectionString, dbName } = require("../config");

export default class DataBase {
	public async mainConnection() {
		const client = await MongoClient.connect(`${connectionString}/${dbName}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		return client.db(dbName);
	}
}
