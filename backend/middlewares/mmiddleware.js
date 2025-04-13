const jwt = require('jsonwebtoken');

class Middleware {
    auth = async (req, res, next) => {
        try {
            const { authorization } = req.headers;
            if (!authorization || !authorization.startsWith('Bearer ')) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            const token = authorization.split(' ')[1]; 
            const userInfo = jwt.verify(token, process.env.SECRET); 

            req.userInfo = userInfo;
            next();
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized" });
        }
    };

    role = (req, res, next) => {
        const { userInfo } = req;
        if (!userInfo || !userInfo.role) {
            return res.status(403).json({ message: "Forbidden" });
        }

        if (userInfo.role === 'admin' || userInfo.role === 'backoffice') {
            return next();
        }

        return res.status(403).json({ message: "Unable to access this API" });
    };
}

module.exports = new Middleware();
