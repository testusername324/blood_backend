import express from "express";
import UserService from "./service.js";

const router = express.Router();

router.post("/registerUser", async (req, res) => {
  const { username, password, email, telephone_number } = req.body;

  if (!username || !password || !email || !telephone_number) {
    console.log("[registerUser] Validation Error: Missing required fields");

    return res.status(400).json({
      status: "error",
      message: "username, password, email, and telephone_number are required",
    });
  }

  try {
    const user = await UserService.registerUser({
      username,
      password,
      email,
      telephone_number,
    });
    res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: user,
    });
    console.log("[registerUser] User registered successfully:", user);
  } catch (error) {
    console.error("[registerUser] Error registering user:", error.message);
    res.status(500).json({
      status: "error",
      message: "Failed to register user",
      error: error.message,
    });
  }
});

router.post("/getUser", async (req, res) => {
  const { email, telephone_number } = req.body;

  if (!email && !telephone_number) {
    console.log(
      "[getUser] Validation Error: Missing email or telephone_number"
    );
    return res.status(400).json({
      status: "error",
      message: "Either email or telephone_number must be provided",
    });
  }

  try {
    const user = await UserService.fetchUser(email, telephone_number);
    if (user.length === 0) {
      console.log(
        "[getUser] No user found with the provided email or telephone_number"
      );
      return res.status(404).json({
        status: "error",
        message: "No user found with the provided email or telephone_number",
      });
    }
    console.log("[getUser] User fetched successfully :", user);
    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    console.error("[getUser] Error fetching user data:", error.message);
    res.status(500).json({
      status: "error",
      message: "Failed to fetch user data",
      error: error.message,
    });
  }
});

export default router;
