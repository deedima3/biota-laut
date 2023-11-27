type PocketBaseError = {
    code : number;
    data : any;
    message : string;
}

type ApiError = {
    response : PocketBaseError
}