import express from 'express';
import { AdminController } from '../controllers/Admin.controller';
import {
	DeleteReqAdmin,
	SaveReqAdmin,
	UpdateReqAdmin,
	GetReqAdmin,
} from '../types/request/Admin.request';
import { SaveUpdateResAdmin } from '../types/response/Admin.response';
import CustomError from '../utils/error';

export class AdminRoutes {
	router: express.Router;
	constructor() {
		this.router = express.Router();
		this.routes();
	}
	routes() {
		this.router.post('/getAdmin', async (req, res, next) => {
			try {
				const getReq: GetReqAdmin = req.body;
				const admin: SaveUpdateResAdmin = await new AdminController().getAdmin(
					getReq
				);
				if (!admin) {
					throw new CustomError(404, 'Admin not found');
				}
				return res.send(admin);
			} catch (error) {
				next(error);
			}
		});

		this.router.post('/saveAdmin', async (req, res, next) => {
			try {
				const admin: SaveReqAdmin = req.body;
				const savedAdmin: SaveUpdateResAdmin =
					await new AdminController().saveAdmin(admin);
				if (!savedAdmin) {
					throw new CustomError(400, 'Admin Not created');
				}
				return res.send(savedAdmin);
			} catch (error) {
				next(error);
			}
		});
		this.router.put('/updateAdmin', async (req, res, next) => {
			try {
				const admin: UpdateReqAdmin = req.body;
				const updatedAdmin: SaveUpdateResAdmin =
					await new AdminController().updateAdmin(admin);
				if (!updatedAdmin) {
					throw new CustomError(400, 'Admin Not updated');
				}
				return res.send(updatedAdmin);
			} catch (error) {
				next(error);
			}
		});
		this.router.delete('/deleteAdmin', async (req, res, next) => {
			try {
				const deleteReq: DeleteReqAdmin = req.body;
				const deletedAdmin = await new AdminController().deleteAdmin(deleteReq);
				if (!deletedAdmin) {
					throw new CustomError(400, 'Admin not deleted');
				}
				return res.send(deletedAdmin);
			} catch (error) {
				next(error);
			}
		});
		this.router.get('/getAdminList', async (req, res, next) => {
			try {
				const adminList: SaveUpdateResAdmin[] =
					await new AdminController().getAdminList();
				console.log('route running');
				if (!adminList) {
					throw new CustomError(404, 'Admins Not Found');
				}
				return res.send(adminList);
			} catch (error) {
				next(error);
			}
		});
	}
}

export const AdminRouter = new AdminRoutes().router;
