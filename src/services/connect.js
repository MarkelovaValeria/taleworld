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

export async function getAllCoursesByUserId(teacherId) {
  try {
    const res = await fetch(
      `http://localhost:5123/api/Course/byUserGetAllCourses?teacherId=${teacherId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Помилка отримання курсів викладача");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Помилка при отриманні курсів викладача:", error);
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
      },
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

export async function getMapById(id) {
  console.log(id);
  try {
    const res = await fetch(`http://localhost:5123/api/Map/byId?id=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Помилка отримання карти");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Помилка при GET-запиті:", error);
    return null;
  }
}

export async function createCourse(courseData) {
  try {
    const createC = await fetch(
      "http://localhost:5123/api/Course/createCourse",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(courseData),
        credentials: "include",
      },
    );

    if (!createC.ok) {
      const errorText = await createC.text();
      throw new Error(errorText || "Помилка при реєстрації");
    }

    const data = await createC.json();
    return data.message;
  } catch (error) {
    console.error("Помилка при POST-запиті:", error);
    return null;
  }
}

// ML
const ABSA_URL = "http://localhost:8000";

export async function analyzeReviews(reviews) {
  try {
    const response = await fetch(`${ABSA_URL}/analyze`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reviews: reviews.map((r) => r.text),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Помилка аналізу відгуків");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка ABSA аналізу:", error);
    return null;
  }
}

export async function analyzeSingleReview(text) {
  try {
    const response = await fetch(`${ABSA_URL}/analyze/single`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Помилка аналізу відгуку");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Помилка ABSA аналізу:", error);
    return null;
  }
}

export async function checkAbsaHealth() {
  try {
    const response = await fetch(`${ABSA_URL}/health`);
    if (!response.ok) return false;
    const data = await response.json();
    return data.model_loaded;
  } catch {
    return false;
  }
}
