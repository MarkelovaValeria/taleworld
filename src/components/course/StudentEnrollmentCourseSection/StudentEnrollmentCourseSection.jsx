"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

import { getCourseById, getUserByCourseId } from "@/services/connect.js";
import { useEnrollment } from "@/hooks/useEnrollment";

import style from "./StudentEnrollmentCourseSection.module.css";

import BaseContainer from "@/components/common/BaseContainer/BaseContainer";
import PageBottomNavButtons from "@/components/common/PageBottomNavButtons/PageBottomNavButtons";

const StudentEnrollmentCourseSection = ({ id, studentId }) => {
  const router = useRouter();
  const { enroll, isEnrolled } = useEnrollment(studentId);

  const [reviews] = useState([
    {
      id: 1,
      name: "Roman Kovinia",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula libero sit amet mi venenatis, in egestas eros convallis.",
    },
    {
      id: 2,
      name: "Roman Kovinia",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula libero sit amet mi venenatis, in egestas eros convallis.",
    },
    {
      id: 3,
      name: "Roman Kovinia",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula libero sit amet mi venenatis, in egestas eros convallis.",
    },
  ]);

  const [course, setCourse] = useState(null);
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    getCourseById(id).then(setCourse);
    getUserByCourseId(id).then(setTeacher);
  }, [id]);

  const alreadyEnrolled = isEnrolled(id);

  const handleStart = () => {
    enroll(id);
    router.push(`/play/${id}`);
  };

  return (
    <div className={style.enrollment}>
      <BaseContainer>
        <div className={style.enrollment_inner}>
          <div className={style.enrollment_content}>
            <Image
              width={720}
              height={490}
              alt="course cover"
              src={
                course?.image ??
                course?.coursePhoto ??
                "/images/locations/location1.png"
              }
              className={style.enrollment_content_img}
            />

            <div className={style.enrollment_content_text}>
              <div className={style.enrollment_content_text_top}>
                <h2>{course?.title}</h2>
                <span>
                  {teacher?.name} {teacher?.surname}
                </span>
              </div>
              <p className={style.enrollment_content_text_descr}>
                {course?.description ??
                  "TaleWorld — навчальна пригода у вигляді інтерактивної карти. Обирайте локації, виконуйте завдання та розвивайте свої знання."}
              </p>
            </div>
          </div>

          <div className={style.enrollment_reviews}>
            {reviews.map((rev) => (
              <div key={rev.id} className={style.enrollment_reviews_item}>
                <h4>{rev.name}</h4>
                <p>
                  {rev.text.length > 100
                    ? `${rev.text.slice(0, 89)}...`
                    : rev.text}
                </p>
              </div>
            ))}
          </div>

          <PageBottomNavButtons
            isWhite
            buttons={[
              { text: "ПЕРЕГЛЯНУТИ ІНШІ ВАРІАНТИ", link: "/home" },
              {
                text: alreadyEnrolled ? "ПРОДОВЖИТИ" : "РОЗПОЧАТИ",
                onHandleClick: handleStart,
              },
            ]}
          />
        </div>
      </BaseContainer>
    </div>
  );
};

export default StudentEnrollmentCourseSection;
