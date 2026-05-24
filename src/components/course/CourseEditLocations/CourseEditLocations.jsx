"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { getCourseById, getMapById } from "@/services/connect";
import PageBottomNavButtons from "@/components/common/PageBottomNavButtons/PageBottomNavButtons";

const locations = [
  { id: 1, background: "/images/locations/location1.png", name: "Location 1" },
  { id: 2, background: "/images/locations/location1.png", name: "Location 2" },
  { id: 3, background: "/images/locations/location1.png", name: "Location 3" },
  { id: 4, background: "/images/locations/location1.png", name: "Location 4" },
];

const CourseEditLocations = ({ courseId }) => {
  const [map, setMap] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const course = await getCourseById(courseId);

      if (course?.mapId) {
        const mapData = await getMapById(course.mapId);
        setMap(mapData);
      } else {
        const mapData = await getMapById(1);
        setMap(mapData);
      }
    };
    getData();
  }, [courseId]);

  const handleLocationClick = (locId) => {
    router.push(`/mycourses/${courseId}/locations/${locId}`);
  };

  return (
    <div className="create-lesson-choose-location">
      <h1 className="create-lesson-choose-location__title">
        Оберіть локацію для редагування завдань
      </h1>

      <div className="create-lesson-choose-location__content">
        <div className="create-lesson-choose-location__content-left">
          {locations.slice(0, locations.length / 2).map((loc) => (
            <div
              key={loc.id}
              className="create-lesson-choose-location__content-location"
            >
              <button
                onClick={() => handleLocationClick(loc.id)}
                className="create-lesson-choose-location__content-location-btn"
              >
                <Image
                  src={loc.background}
                  alt={loc.name}
                  width={314}
                  height={77}
                />
              </button>
              <h3>{loc.name}</h3>
            </div>
          ))}
        </div>

        <div className="create-lesson-choose-location__content-map">
          <div className="create-lesson-choose-location__content-map-wrapper">
            <Image
              src={map?.backgroundTitle ?? "/images/Home_bg.png"}
              alt="map image"
              width={600}
              height={400}
            />
          </div>
        </div>

        {/* Права колонка — локації 3–4 */}
        <div className="create-lesson-choose-location__content-right">
          {locations.slice(locations.length / 2).map((loc) => (
            <div
              key={loc.id}
              className="create-lesson-choose-location__content-location"
            >
              <button
                onClick={() => handleLocationClick(loc.id)}
                className="create-lesson-choose-location__content-location-btn"
              >
                <Image
                  src={loc.background}
                  alt={loc.name}
                  width={314}
                  height={77}
                />
              </button>
              <h3>{loc.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <PageBottomNavButtons
        buttons={[{ text: "Назад до курсу", link: `/mycourses/${courseId}` }]}
      />
    </div>
  );
};

export default CourseEditLocations;
