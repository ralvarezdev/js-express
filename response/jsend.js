import {DebugResponse, Response} from "./response.js";

// Create a new success JSend body
export function SuccessJSendBody(data = null) {
    return {status: "success", data};
}

// Create a new success JSend response
export function SuccessJSendResponse(status, data = null) {
    return Response(status, SuccessJSendBody(data));
}

// Create a new success JSend response with debug information
export function SuccessJSendDebugResponse(status, data = null, debugData = null) {
    return DebugResponse(status, SuccessJSendBody(data), SuccessJSendBody(debugData));
}

// Create a new error JSend body
export function ErrorJSendBody(message = null, data = null, code = null) {
    return {status: "error", message, data, code};
}

// Create a new error JSend response
export function ErrorJSendResponse(status, message = null, data = null, code = null) {
    return Response(status, ErrorJSendBody(message, data, code));
}

// Create a new error JSend response with debug information
export function ErrorJSendDebugResponse(status, message = null, data = null, code = null, debugMessage = null, debugData = null) {
    return DebugResponse(status, ErrorJSendBody(message, data, code), ErrorJSendBody(debugMessage, debugData, code));
}

// Create a new fail JSend body
export function FailJSendBody(data = null, code = null) {
    return {status: "fail", data, code};
}

// Create a new fail JSend response
export function FailJSendResponse(status, data = null, code = null) {
    return Response(status, FailJSendBody(data, code));
}

// Create a new fail JSend response with debug information
export function FailJSendDebugResponse(status, data = null, code = null, debugData = null) {
    return DebugResponse(status, FailJSendBody(data, code), FailJSendBody(debugData, code));
}