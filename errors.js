// FailResponseError is a custom error class that is thrown when a response failed
export class FailResponseError extends Error {
    constructor(status = 400, data, code = null, debugData = null) {
        super();

        // Set the data, debugData, status, and code of the error
        this.status = status
        this.data = data
        this.debugData = debugData
        this.code = code

        // Set the name and capture the stack trace
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

// ErrorResponseError is a custom error class that is thrown when a response failed by an error
export class ErrorResponseError extends Error {
    constructor(message, data, code = null, debugMessage=null, debugData = null) {
         super();

        // Set the message, data, debugMessage, debugData, and code of the error
        this.message = message
        this.debugMessage = debugMessage
        this.data = data
        this.debugData = debugData
        this.code = code

        // Set the name and capture the stack trace
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

// ConstraintFailError is a custom error class that is thrown a response failed by a constraint error
export class ConstraintFailError extends FailResponseError {
    constructor(status, fieldName, errorStr, code) {
        super(status,  {[fieldName]: [errorStr]}, code);
    }
}
