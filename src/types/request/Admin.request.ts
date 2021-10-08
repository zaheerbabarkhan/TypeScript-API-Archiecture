export interface SaveReqAdmin {
    FirstName: string,
    LastName: string,
    Designation: string,
    Cell: string,
    JoinDate: string,
    Address: string
}

export interface UpdateReqAdmin{
    _id: string,
    FirstName: string,
    LastName: string,
    Designation: string,
    Cell: string,
    JoinDate: string,
    Address: string
}

export interface GetReqAdmin {
    id: string
}

export interface DeleteReqAdmin extends GetReqAdmin{
}