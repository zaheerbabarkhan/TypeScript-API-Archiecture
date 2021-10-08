import {Document} from 'mongoose';
export interface IADMIN extends Document {
    _id: string,
    FirstName: string,
    LastName: string,
    Designation: string,
    Cell: string,
    JoinDate: string,
    Address: string,
    createdAt?: string,
    updatedAt?: string
}