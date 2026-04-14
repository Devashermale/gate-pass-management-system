const jwt = require('jsonwebtoken');
const admin = require('../model/adminmodel');
const visitor = require('../model/VisitorSchema');
const security = require('../model/securitymodel');
const emp = require('../model/empmodel');

const protect = (roles = []) => {
    return async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization || req.headers.Authorization;

            if (!authHeader || !authHeader.startsWith('Bearer ')) {
                return res.status(401).json({ message: 'Unauthorized: No token provided' });
            }

            let token = authHeader.split(' ')[1];
            
            token = token.replace(/['"]+/g, '').trim();

            if (!token) {
                return res.status(401).json({ message: 'Unauthorized: Token is empty' });
            }

            const decoded = jwt.verify(token, process.env.SECRET);

            if (roles.length && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: 'Forbidden: Access denied' });
            }

            let user;
            if (decoded.role === 'admin') user = await admin.findById(decoded.id);
            else if (decoded.role === 'employee') user = await emp.findById(decoded.id);
            else if (decoded.role === 'security') user = await security.findById(decoded.id);
            else if (decoded.role === 'visitor') user = await visitor.findById(decoded.id);

            if (!user) {
                return res.status(401).json({ message: "User no longer exists in database" });
            }

        req.user = await user.findOne({ _id }).select('_id');
            next();

        } catch (error) {
            console.log("❌ JWT Error:", error.message);
            
            // Helpful messages for debugging
            const msg = error.message === 'jwt malformed' 
                ? 'Token structure is incorrect (malformed)' 
                : 'Invalid or expired token';
                
            return res.status(401).json({ message: `Unauthorized: ${msg}` });
        }
    };
};

module.exports = { protect };