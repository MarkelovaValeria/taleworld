"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { getCourseById } from "@/services/connect";
import { useProgress } from "@/hooks/useProgress";
import BaseContainer from "@/components/common/BaseContainer/BaseContainer";

import style from "./MyCoursesComponent.module.css"; // ті самі стилі карток
import studentStyle from "./StudentCoursesComponent.module.css";

// Картка курсу з прогресом
const StudentCourseCard = ({ course, studentId }) => {
  const { getCompletionPercent } = useProgress(studentId, course.id);
  const percent = getCompletionPercent();

  return (
    <Link
      className={`${style.courses_list_item} ${studentStyle.card}`}
      href={`/play/${course.id}`}
    >
      <Image
        className={style.courses_list_item_img}
        src={course.image ?? "/images/Home_bg.png"}
        alt="course"
        width={846}
        height={454}
      />
      <span className={style.course_list_item_title}>{course.title}</span>

      {/* Прогрес-бар */}
      <div className={studentStyle.progress_wrap}>
        <div
          className={studentStyle.progress_bar}
          style={{ width: `${percent}%` }}
        />
        <span className={studentStyle.progress_pct}>{percent}%</span>
      </div>
    </Link>
  );
};

const StudentCoursesComponent = ({ userId }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    const enrolled = JSON.parse(
      localStorage.getItem(`enrolled_${userId}`) ?? "[]",
    );

    if (enrolled.length === 0) {
      setLoading(false);
      return;
    }

    Promise.all(enrolled.map((e) => getCourseById(e.courseId)))
      .then((data) => setCourses(data.filter(Boolean)))
      .finally(() => setLoading(false));
  }, [userId]);

  return (
    <div className={style.courses}>
      <BaseContainer>
        <h2 className={studentStyle.heading}>Мої курси</h2>
        <div className={style.courses_list}>
          {loading ? (
            <span style={{ color: "white" }}>Завантаження...</span>
          ) : courses.length > 0 ? (
            courses.map((course) => (
              <StudentCourseCard
                key={course.id}
                course={course}
                studentId={userId}
              />
            ))
          ) : (
            <p className={studentStyle.empty}>
              Ви ще не записані на жоден курс.{" "}
              <Link href="/home" style={{ color: "#a6ff00" }}>
                Переглянути каталог
              </Link>
            </p>
          )}
        </div>
      </BaseContainer>
    </div>
  );
};

export default StudentCoursesComponent;
