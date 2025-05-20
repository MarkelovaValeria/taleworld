"use client";
import { use } from "react";
import React from "react";
import { useEffect, useState } from "react";
import { getCourseById } from "@/services/connect.js";
import { getUserByCourseId } from "@/services/connect.js";
import Link from "next/link";
import Image from "next/image";

const CoursePage = ({ params }) => {
  const { id } = use(params);
  const [course, setCourse] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await getCourseById(id);
      setCourse(data);
      console.log(data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const data = await getUserByCourseId(id);
      setUser(data);
      console.log(data.photo);
    };
    getData();
  }, []);

  return (
    <div className="view-course">
      <div
        className="view-course__inner"
        style={{ backgroundImage: `url(${course?.coursePhoto})` }}
      >
        <div className="view-course__left">
          <div className="view-course__left-description">
            <h2>{course?.title}</h2>
            <h3>
              {user?.surname} {user?.name}
            </h3>
          </div>

          <div className="view-course__left-start">
            <Link href="#" className="view-course__left-start-link">
              Розпочати курс
            </Link>
            <div className="view-course__left-start-rating">
              <Image
                src="/images/star.svg"
                alt="rating"
                width="15"
                height="15"
              />
              <Image
                src="/images/star.svg"
                alt="rating"
                width="15"
                height="15"
              />
              <Image
                src="/images/star.svg"
                alt="rating"
                width="15"
                height="15"
              />
              <Image
                src="/images/star.svg"
                alt="rating"
                width="15"
                height="15"
              />
              <Image
                src="/images/star.svg"
                alt="rating"
                width="15"
                height="15"
              />
            </div>
          </div>

          <p>
            We provide a wealth of health information to help pet parents take
            the best care for their furry friends
          </p>

          <div className="view-course__left-imgs">
            <div className="view-course__left-imgs-img"></div>
            <div className="view-course__left-imgs-img"></div>
          </div>
        </div>
        <div className="view-course__right">
          <Image
            src={`${user?.photo ? user.photo : "/images/home_bg.png"}`}
            width="150"
            height="150"
            alt="account"
            className="view-course__right-avatar"
          />
          {/* <div
            className="view-course__right-avatar"
            style={{ backgroundImage: `url(${user?.photo})` }}
          ></div> */}
          <p>
            We provide a wealth of health information to help pet parents take
            the best care for their furry friends
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
