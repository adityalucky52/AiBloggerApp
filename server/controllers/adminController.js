import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // For debugging: Log received and expected credentials
    // console.log("--- Admin Login Attempt ---");
    // console.log("Received:", { email, password });
    // console.log("Expected:", {
    //   email: process.env.ADMIN_EMAIL,
    //   password: process.env.ADMIN_PASSWORD,
    // });

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.error("Admin login error:", error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred during login." });
  }
};
