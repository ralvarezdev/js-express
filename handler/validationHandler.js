import {FailResponseError} from "../errors.js";

// Handle the request validation
export default function HandleValidation(req, res, validationFn = body => [body, true]) {
    // Validate the request
    const [body, isValid] = validationFn(req.body);

    // Check if the request is valid
    if (!isValid)
        throw new FailResponseError(400, body);

    return body;
}