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

export async function getAllCourses() {
  try {
    const res = await fetch("http://localhost:5123/api/Course/all-courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Помилка отримання курсів");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Помилка при GET-запиті:", error);
    return null;
  }
}

export async function getCourseById(id) {
  console.log(id);
  try {
    const res = await fetch(`http://localhost:5123/api/Course/byId?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Помилка отримання курсу");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Помилка при GET-запиті:", error);
    return null;
  }
}

export async function getUserByCourseId(courseId) {
  try {
    const res = await fetch(
      `http://localhost:5123/api/User/by-courseId?courseId=${courseId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Помилка отримання користувача");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Помилка при GET-запиті:", error);
    return null;
  }
}

export async function getAllMaps() {
  try {
    const res = await fetch("http://localhost:5123/api/Map/all-maps", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Помилка отримання карт");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Помилка при GET-запиті:", error);
    return null;
  }
}
