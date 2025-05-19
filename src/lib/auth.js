import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getUserFromToken() {
  try {
    // Отримуємо всі кукі асинхронно
    const cookieStore = cookies();
    const token = (await cookieStore).get("tasty-cookies")?.value;
    console.log("1: " + token);
    // Якщо токен відсутній, повертаємо null
    if (!token) return null;

    // Перевіряємо і декодуємо токен
    const decoded = jwt.verify(
      token,
      "eW91ci0yNTYtYml0LXNlY3JldC1rZXktd2hpY2hpc19pcy0zMi1ieXRlcy1sb25nLWhlcmU="
    );
    return decoded;
  } catch (error) {
    console.error("Invalid JWT:", error);
    return null;
  }
}
