export async function registerUser(userData) {
  try {
    const res = await fetch("http://localhost:5123/api/Auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Помилка при реєстрації");
    }

    const data = await res.json();
    return data.message;
  } catch (error) {
    console.error("Помилка при POST-запиті:", error);
    return null;
  }
}

export async function loginUser(userData) {
  try {
    const res = await fetch("http://localhost:5123/api/Auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Помилка при реєстрації");
    }

    const data = await res.json();
    return data.message;
  } catch (error) {
    console.error("Помилка при POST-запиті:", error);
    return null;
  }
}
