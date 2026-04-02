"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import Searchbar from "@/components/searchbar/Searchbar.jsx";
import BaseContainer from "@/components/common/BaseContainer/BaseContainer";

import { getAllMaps } from "@/services/connect.js";

import style from "./CourseCreationTemplateSection.module.css";

const CourseCreationTemplateSection = () => {
  const [maps, setMaps] = useState([]);

  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const userId = searchParams.get("userId");

  useEffect(() => {
    const getData = async () => {
      const data = await getAllMaps();
      setMaps(data);
    };
    getData();
  }, []);

  return (
    <section className={style.choose_template}>
      <BaseContainer>
        <div className={style.choose_template_inner}>
          <h2>Оберіть шаблон для вашого курсу</h2>
          <Searchbar />
          <div className={style.choose_template_inner_list}>
            {maps.map((map) => (
              <Link
                className={style.choose_template_inner_list_item}
                key={map.id}
                href={`/choose-template/map/${map.id}?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&userId=${encodeURIComponent(userId)}`}
              >
                <Image
                  className={style.choose_template_inner_list_item_img}
                  src={
                    map.backgroundTitle
                      ? map.backgroundTitle
                      : "/images/Home_bg.png"
                  }
                  alt="bg map"
                  width="446"
                  height="254"
                />
                <div className={style.choose_template_inner_list_item_text}>
                  <h3>{map.name}</h3>
                  <p>{map.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </BaseContainer>
    </section>
  );
};

export default CourseCreationTemplateSection;
