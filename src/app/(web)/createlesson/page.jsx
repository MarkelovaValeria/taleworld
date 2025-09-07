"use client";
import React from "react";
import { useEffect, useState } from "react";
import { getAllCourses, getAllMaps } from "@/services/connect.js";
import Image from "next/image";
import Link from "next/link";
import Searchbar from "@/components/searchbar/Searchbar.jsx";

const CreateLesson = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllMaps();
      setMaps(data);
    };
    getData();
  }, []);

  return (
    <div className="create-lesson">
      <div className="create-lesson__inner">
        <h1>Оберіть шаблон для вашого уроку</h1>
        <Searchbar />
        <div className="home-teacher__catalog-view">
          {maps.map((map) => (
            <Link className="create-lesson__catalog-item" key={map.id} href="#">
              <Image
                className="create-lesson__catalog-view-item"
                src={
                  map.backgroundTitle
                    ? map.backgroundTitle
                    : "/images/Home_bg.png"
                }
                alt="bg map"
                width="446"
                height="254"
              />
              <div className="create-lesson__catalog-item-text">
                <h3>{map.name}</h3>
                <p>{map.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreateLesson;
