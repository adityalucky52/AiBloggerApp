import  jwt from "jsonwebtoken";

export const auth = async (req, res,next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access: Token is missing or malformed.",
      });
    }

    const token = authHeader.split(" ")[1];

    try {
        jwt.verify(token, process.env.JWT_SECRET)
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        res.status(401).json({ success: false, message: "Unauthorized access: Invalid token." });
    }
}

export default auth;