import jwt from "jsonwebtoken";
import cookie from "cookie";

export default function handler(req, res) {
  const cookies = cookie.parse(req.headers.cookie || "");
  const token = cookies["tasty-cookies"];

  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const decoded = jwt.verify(
      token,
      "eW91ci0yNTYtYml0LXNlY3JldC1rZXktd2hpY2hpc19pcy0zMi1ieXRlcy1sb25nLWhlcmU="
    );

    // Припустимо, у payload токена є поля: id, name, email
    const userInfo = {
      id: decoded.id,
      name: decoded.name || null,
      email: decoded.email || null,
    };

    return res.status(200).json(userInfo);
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}