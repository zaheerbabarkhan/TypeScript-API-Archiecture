import { IADMIN } from '../types/document/IAdmin';
import { MainAdmin } from '../repositories/Admin.repositories';
import CutsomeError from '../utils/error';
import {
	Get,
	Post,
	Put,
	Delete,
	Route,
	Tags,
	Body,
	SuccessResponse,
	Example,
	Response,
} from 'tsoa';
import {
	DeleteReqAdmin,
	UpdateReqAdmin,
	SaveReqAdmin,
	GetReqAdmin,
} from '../types/request/Admin.request';
import { SaveUpdateResAdmin } from '../types/response/Admin.response';

@Route('admin')
@Tags('Admin')
export class AdminController {
	constructor() {}
	/**
	 * Retrieves the details of an existing user.
	 * Supply the unique user ID from either and receive corresponding user details.
	 *
	 *
	 */
	@Example({
		name: 'Syed Rahat Murtaza',
		email: 'rahat_murtaza@outlook.com',
		password: 'rahat1996',
	})
	@Post('/getAdmin')
	async getAdmin(@Body() getReq: GetReqAdmin): Promise<SaveUpdateResAdmin> {
		const admin: IADMIN = await (<any>new MainAdmin().getAdmin(getReq.id));
		if (!admin) {
			throw new CutsomeError(404, 'Admin Not Found');
		}
		return <SaveUpdateResAdmin>admin;
	}

	/**
	 * Retrieves the details of an existing user.
	 * Supply the unique user ID from either and receive corresponding user details.
	 *@summary You will be able to register user and generate the accessToken with it
	 */
	@Example<SaveUpdateResAdmin>({
		_id: '507f1f77bcf86cd799439011',
		FirstName: 'FirstName',
		LastName: 'Last Name',
		Designation: 'Designation',
		Cell: '0306XXXXXXX',
		JoinDate: '20-Sep 2021',
		Address: 'G 10/3 Islamabad',
	})
	@Post('EditUser')
	@Response('200', 'User Registered Successfully')
	@Response('409', 'User already exist')
	@Response(
		'403',
		'Forbidden Request',
		'If you will not pass the token it will response with Forbidden Access'
	)
	@Tags('Save Admin')
	async saveAdmin(@Body() admin: SaveReqAdmin): Promise<SaveUpdateResAdmin> {
		const newAdmin: IADMIN = await new MainAdmin().SaveAdmin(<IADMIN>admin);
		if (!newAdmin) {
			throw new CutsomeError(400, 'Admin Not created');
		}
		return <SaveUpdateResAdmin>newAdmin;
	}

	/**
	 * Retrieves the details of an existing user.
	 * Supply the unique user ID from either and receive corresponding user details.
	 *
	 */
	@Put('/updateAdmin')
	async updateAdmin(
		@Body() admin: UpdateReqAdmin
	): Promise<SaveUpdateResAdmin> {
		const updatedAdmin: IADMIN = await (<any>(
			new MainAdmin().updateAdmin(<IADMIN>admin)
		));
		if (!updatedAdmin) {
			throw new CutsomeError(400, 'Admin not Updated');
		}
		return <SaveUpdateResAdmin>updatedAdmin;
	}
	/**
	 * Retrieves the details of an existing user.
	 * Supply the unique user ID from either and receive corresponding user details.
	 *
	 */
	@Delete('deleteAdmin')
	@SuccessResponse('200', 'Admin Deleted')
	async deleteAdmin(@Body() deleteReq: DeleteReqAdmin): Promise<any> {
		console.log('controller running');
		new MainAdmin().deleteAdmin(deleteReq.id);
	}

	@Get('/getAdminList')
	async getAdminList(): Promise<SaveUpdateResAdmin[]> {
		const admins: IADMIN[] = await (<any>new MainAdmin().getAdminList());
		return <SaveUpdateResAdmin[]>admins;
	}
}
