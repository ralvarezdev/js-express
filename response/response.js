// Create a new response
export function Response(status, body) {
    return {
        status: status,
        body: body
    }
}

// Create a new response with debug information
export function DebugResponse(status, body, debugBody) {
    return {
        status: status,
        body: body,
        debugBody: debugBody
    }
}