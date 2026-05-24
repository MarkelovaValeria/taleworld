"use client";
import { useCallback, useEffect, useState } from "react";

export const useEnrollment = (studentId) => {
  const enrollKey = `enrolled_${studentId}`;
  const [enrolled, setEnrolled] = useState([]);

  // Читаємо localStorage тільки на клієнті (useEffect не виконується на сервері)
  useEffect(() => {
    if (!studentId) return;
    const data = localStorage.getItem(enrollKey);
    if (data) setEnrolled(JSON.parse(data));
  }, [enrollKey, studentId]);

  const enroll = useCallback(
    (courseId) => {
      setEnrolled((prev) => {
        if (prev.find((e) => String(e.courseId) === String(courseId)))
          return prev;
        const updated = [...prev, { courseId, enrolledAt: Date.now() }];
        // localStorage доступний лише на клієнті — enroll викликається тільки з onClick
        if (typeof window !== "undefined") {
          localStorage.setItem(enrollKey, JSON.stringify(updated));
        }
        return updated;
      });
    },
    [enrollKey],
  );

  // Читаємо зі STATE, а не з localStorage — безпечно і на сервері, і на клієнті.
  // На SSR повертає false (enrolled = []), після гідрації — реальне значення.
  const isEnrolled = useCallback(
    (courseId) =>
      !!enrolled.find((e) => String(e.courseId) === String(courseId)),
    [enrolled],
  );

  return { enrolled, enroll, isEnrolled };
};
