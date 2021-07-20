import { Request, Response, NextFunction  } from "express";
import { verify } from "jsonwebtoken";

function ensureAutheticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            message: "Token is missing"
        });
    }
    const [, token] = authToken.split(" ");
    try {
        verify(token, process.env.SECRET_KEY);
        return next();
    } catch(e) {
        return response.status(401).json({
            message: "Token invalid!"
        });
    }
    
}

export { ensureAutheticated };