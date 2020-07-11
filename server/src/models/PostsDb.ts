const { postsCollection } = require("../config");
import Batabase from "./Database";

export default class PostsDB extends Batabase {
	public async connect() {
		const connect = await this.mainConnection();
		return await connect.collection("posts");
	}
}
