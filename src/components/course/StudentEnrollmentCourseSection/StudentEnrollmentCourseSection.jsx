"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { getCourseById, getUserByCourseId } from "@/services/connect.js";

import style from "./StudentEnrollmentCourseSection.module.css";

import BaseContainer from "@/components/common/BaseContainer/BaseContainer";
import PageBottomNavButtons from "@/components/common/PageBottomNavButtons/PageBottomNavButtons";

const StudentEnrollmentCourseSection = ({ id }) => {
  const [reviews, setReviews] = useState([
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

  const [course, setCourse] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await getCourseById(id);
      setCourse(data);
      console.log(data);
    };
    getData();
  }, [id]);

  useEffect(() => {
    const getData = async () => {
      const data = await getUserByCourseId(id);
      setUser(data);
      console.log(data);
    };
    getData();
  }, [id]);

  return (
    <div className={style.enrollment}>
      <BaseContainer>
        <div className={style.enrollment_inner}>
          <div className={style.enrollment_content}>
            <Image
              width={720}
              height={490}
              alt="map"
              src={
                course?.coursePhoto
                  ? course.coursePhoto
                  : "/images/locations/location1.png"
              }
              className={style.enrollment_content_img}
            />

            <div className={style.enrollment_content_text}>
              <div className={style.enrollment_content_text_top}>
                <h2>{course?.title}</h2>
                <span>
                  {user?.name} {user?.surname}
                </span>
              </div>
              <p className={style.enrollment_content_text_descr}>
                {course?.descritpion
                  ? course.descritpion
                  : "TaleWorld -  ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula libero sit amet mi venenatis, in egestas eros convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula libero sit amet mi venenatis, in egestas eros convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vehicula libero sit amet mi venenatis, in egestas eros convallis. "}
              </p>

              <div className={style.enrollment_content_bottom}>
                <div className={style.enrollment_content_bottom_progress}>
                  <span>Ваш прогрес</span>
                  <div
                    className={
                      style.enrollment_content_bottom_progressbar_wrapper
                    }
                  >
                    <div
                      className={style.enrollment_content_bottom_progressbar}
                    ></div>
                    <span>63%</span>
                  </div>
                </div>
                <Image
                  src={"/images/enrollment/underprogg.png"}
                  alt="underprogg photo"
                  width={530}
                  height={120}
                />
              </div>
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
              { text: "РОЗПОЧАТИ", link: `#` },
            ]}
          />
        </div>
      </BaseContainer>
    </div>
  );
};

export default StudentEnrollmentCourseSection;
