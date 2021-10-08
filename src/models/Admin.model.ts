import { Schema, model } from "mongoose";
import { IADMIN } from "../types/document/IAdmin";
const IADMINSchema = new Schema({
    FirstName: String, 
    LastName: String,
    Designation: String,
    Cell: String,
    JoinDate: String,
    Address: String

},{
    timestamps: true    
})

export const ADMINSchema = model<IADMIN>("Admin", IADMINSchema)