const jwt = require('jsonwebtoken');
const admin = require('../model/adminmodel')
const visitor = require('../model/VisitorSchema')
const security = require('../model/securitymodel')
const emp = require('../model/empmodel')

const protect = (roles =[]) =>{
    return async (req, res, next) => {
    let token = req.headers.authorization?.split(' ')[1];
 if(!token) return res.status(401).json({message: 'Unauthorized'})

try {
    const decoded = jwt.verify(token ,process.env.secret)
    if(roles.length && !roles.includes(decoded.role)){
        return res.status(401).json({
            message: 'role not permitted'
         })

    }
    let user;
            if (decoded.role === 'admin') user = await admin.findById(decoded.id);
            if (decoded.role === 'employee') user = await emp.findById(decoded.id);
            if (decoded.role === 'security') user = await security.findById(decoded.id);
            if (decoded.role === 'visitor') user = await visitor.findById(decoded.id);

            if (!user) return res.status(401).json({ message: "User no longer exists" });

            req.user = user;
            next();
} catch (error) {
    
}
    }
}
module.exports = { protect };