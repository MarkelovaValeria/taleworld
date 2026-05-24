"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import BaseContainer from "@/components/common/BaseContainer/BaseContainer";
import { getCourseById, getMapById } from "@/services/connect";
import { useProgress } from "@/hooks/useProgress";

import style from "./StudentCourseMap.module.css";

const locations = [
  { id: 1, background: "/images/locations/location1.png", name: "Location 1" },
  { id: 2, background: "/images/locations/location1.png", name: "Location 2" },
  { id: 3, background: "/images/locations/location1.png", name: "Location 3" },
  { id: 4, background: "/images/locations/location1.png", name: "Location 4" },
];

const StudentCourseMap = ({ courseId, studentId }) => {
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [map, setMap] = useState(null);

  const { isLocationCompleted, isLocationAvailable, getCompletionPercent } =
    useProgress(studentId, courseId);

  useEffect(() => {
    const load = async () => {
      const c = await getCourseById(courseId);
      setCourse(c);
      if (c?.mapId) {
        const m = await getMapById(c.mapId);
        setMap(m);
      } else {
        const m = await getMapById(1);
        setMap(m);
      }
    };
    load();
  }, [courseId]);

  const handleLocationClick = (locId) => {
    if (!isLocationAvailable(locId)) return;
    router.push(`/play/${courseId}/locations/${locId}`);
  };

  const percent = getCompletionPercent();

  const getLocStatus = (locId) => {
    if (isLocationCompleted(locId)) return "completed";
    if (isLocationAvailable(locId)) return "available";
    return "locked";
  };

  return (
    <div className={style.map}>
      <BaseContainer>
        {/* Заголовок + прогрес */}
        <div className={style.map_header}>
          <div>
            <h1 className={style.map_title}>{course?.title ?? "Курс"}</h1>
            <p className={style.map_subtitle}>
              Оберіть локацію для проходження
            </p>
          </div>
          <div className={style.map_progress}>
            <span className={style.map_progress_label}>Прогрес</span>
            <div className={style.map_progress_bar_wrap}>
              <div
                className={style.map_progress_bar}
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className={style.map_progress_pct}>{percent}%</span>
          </div>
        </div>

        {/* Контент: ліво / карта / право */}
        <div className="create-lesson-choose-location__content">
          {/* Ліва колонка — 1–2 */}
          <div className="create-lesson-choose-location__content-left">
            {locations.slice(0, 2).map((loc) => {
              const status = getLocStatus(loc.id);
              return (
                <div
                  key={loc.id}
                  className="create-lesson-choose-location__content-location"
                >
                  <button
                    onClick={() => handleLocationClick(loc.id)}
                    className={`create-lesson-choose-location__content-location-btn ${style[`loc_${status}`]}`}
                    title={
                      status === "locked"
                        ? "Завершіть попередню локацію"
                        : status === "completed"
                          ? "Пройдено ✓"
                          : "Натисніть щоб грати"
                    }
                  >
                    <Image
                      src={loc.background}
                      alt={loc.name}
                      width={314}
                      height={77}
                    />
                    <span className={style.loc_badge}>
                      {status === "completed" && "✓"}
                      {status === "locked" && "🔒"}
                    </span>
                  </button>
                  <h3>{loc.name}</h3>
                </div>
              );
            })}
          </div>

          {/* Центр — карта */}
          <div className="create-lesson-choose-location__content-map">
            <div className="create-lesson-choose-location__content-map-wrapper">
              <Image
                src={map?.backgroundTitle ?? "/images/Home_bg.png"}
                alt="map"
                width={600}
                height={400}
              />
            </div>
          </div>

          {/* Права колонка — 3–4 */}
          <div className="create-lesson-choose-location__content-right">
            {locations.slice(2).map((loc) => {
              const status = getLocStatus(loc.id);
              return (
                <div
                  key={loc.id}
                  className="create-lesson-choose-location__content-location"
                >
                  <button
                    onClick={() => handleLocationClick(loc.id)}
                    className={`create-lesson-choose-location__content-location-btn ${style[`loc_${status}`]}`}
                    title={
                      status === "locked"
                        ? "Завершіть попередню локацію"
                        : status === "completed"
                          ? "Пройдено ✓"
                          : "Натисніть щоб грати"
                    }
                  >
                    <Image
                      src={loc.background}
                      alt={loc.name}
                      width={314}
                      height={77}
                    />
                    <span className={style.loc_badge}>
                      {status === "completed" && "✓"}
                      {status === "locked" && "🔒"}
                    </span>
                  </button>
                  <h3>{loc.name}</h3>
                </div>
              );
            })}
          </div>
        </div>

        <div className={style.map_back}>
          <button
            className={style.map_back_btn}
            onClick={() => router.push("/mycourses")}
          >
            Мої курси
          </button>
        </div>
      </BaseContainer>
    </div>
  );
};

export default StudentCourseMap;
