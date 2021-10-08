import { ADMINSchema } from '../models/Admin.model';
import { IADMIN } from '../types/document/IAdmin';

export class MainAdmin {
	constructor() {}

	getAdmin(_id: string) {
		return ADMINSchema.findById(_id);
	}
	SaveAdmin(admin: IADMIN) {
		return new ADMINSchema(admin).save();
	}
	updateAdmin(admin: IADMIN) {
		return ADMINSchema.findByIdAndUpdate(admin._id, admin, {
			new: true,
		});
	}
	deleteAdmin(_id: string) {
		console.log('repo running');
		return ADMINSchema.findByIdAndDelete(_id);
	}
	getAdminList() {
		return ADMINSchema.find();
	}
}
