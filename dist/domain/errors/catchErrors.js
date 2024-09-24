"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatchError = void 0;
class CatchError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
    }
    static badRequest(message) {
        return new CatchError(message, 400);
    }
    static unAuthorized(message) {
        return new CatchError(message, 401);
    }
    static notFound(message) {
        return new CatchError(message, 404);
    }
    static internalServer(message) {
        return new CatchError(message, 500);
    }
}
exports.CatchError = CatchError;
