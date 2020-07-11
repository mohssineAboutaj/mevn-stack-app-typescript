import express, { Request, Response, Router } from "express";

import Posts from "../models/PostsDb";
import Db from "../models/Database";

const routes: Router = Router();

routes.get(
	"/",
	async (req: Request, res: Response) => {
		let c = await new Posts().connect();
		// res.send(await c);
		res.json(await c.find({}));
	},
	(err) => {
		console.log(err);
	}
);

module.exports = routes;
