class Apierror extends Error{
    constructor(
        statuscode,
        message="Something went wrong",
        errors = [],
    ){
        super(message)
        this.statuscode=statuscode
        this.data=null
        this.message= message
        this.success= false;
        this.errors= errors
    }
}

export {Apierror}