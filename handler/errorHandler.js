import {ErrorResponseError, FailResponseError} from "../errors.js";
import {IS_DEBUG} from "@ralvarezdev/js-mode";
import {ErrorJSendBody, FailJSendBody} from "../response/index.js";

// ErrorHandler class is used to handle the errors in the application
export default class ErrorHandler {
    #logger

    // Constructor for the ErrorHandler class
    constructor(logger) {
        // Set the logger
        this.#logger = logger;
    }

    // Handle the error
    handleError(res, error) {
        // Check if it's a fail response error
        if (error instanceof FailResponseError) {
            if (IS_DEBUG)
                res.status(error.status).json(FailJSendBody(error.debugData || error.data, error.code))
            else
                res.status(error.status).json(FailJSendBody(error.data, error.code))
            return
        }

        // Log the error
        if (this.#logger)
            this.#logger.error(error.message);

        // Check if it's an error response error
        if (error instanceof ErrorResponseError) {
            // Send the response according to the environment
            if (IS_DEBUG)
                res.status(500).json(ErrorJSendBody(error.debugMessage || error.message, error.debugData || error.data, error.code))
            else
                res.status(500).json(ErrorJSendBody(error.message, error.data, error.code))
            return
        }

        // Send the response according to the environment
        res.status(500).json(ErrorJSendBody(IS_DEBUG ? error.message : "Internal server error"));
    }

    // Error catcher middleware
    errorCatcher() {
        return (error, req, res, next) => {
            // Check if there is an error
            if (error)
                // Handle the error
                this.handleError(res, error);
            else
                next();
        }
    }

    // Error JSON body parser catcher middleware
    errorJSONBodyParserCatcher() {
        return (error, req, res, next) => {
            // Check if there is an error
            if (error instanceof SyntaxError)
                // Handle the JSON parsing error
                this.handleError(res, error, next);
            else
                next();
        }
    }
}