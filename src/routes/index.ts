import express from "express"
import { AdminRouter } from "./Admin.route"
export class MainRouter {
    router: express.Router
    constructor() {
        this.router = express.Router();
        this.routes()
    }
    routes() {
        this.router.use("/admin", AdminRouter)
    }
}


export const MainRoutes = new MainRouter().router