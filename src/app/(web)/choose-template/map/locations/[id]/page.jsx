"use client";

import PageBottomNavButtons from "@/components/common/PageBottomNavButtons/PageBottomNavButtons";
import { getMapById } from "@/services/connect";
import Image from "next/image";
import { use, useEffect, useState } from "react";

const ChooseMapLocaiton = ({ params }) => {
  const { id } = use(params);

  const [map, setMap] = useState("");
  const [choosedLocaition, setChoosedLocaion] = useState(0);

  const [locations, setLocations] = useState([
    {
      id: 1,
      background: "/images/locations/location1.png",
      name: "Location 1",
    },
    {
      id: 2,
      background: "/images/locations/location1.png",
      name: "Location 2",
    },
    {
      id: 3,
      background: "/images/locations/location1.png",
      name: "Location 3",
    },
    {
      id: 4,
      background: "/images/locations/location1.png",
      name: "Location 4",
    },
  ]);

  useEffect(() => {
    const getData = async () => {
      const res = await getMapById(id);
      setMap(res);
    };
    getData();
  }, []);

  return (
    <div className="create-lesson-choose-location">
      <h1 className="create-lesson-choose-location__title">
        Оберіть локацію, щоб додати завдання
      </h1>
      <div className="create-lesson-choose-location__content">
        <div className="create-lesson-choose-location__content-left">
          {locations.slice(0, locations.length / 2).map((loc) => (
            <div
              key={loc.id}
              className="create-lesson-choose-location__content-location"
            >
              <button
                onClick={() => setChoosedLocaion(loc.id)}
                className={`create-lesson-choose-location__content-location-btn ${
                  loc.id == choosedLocaition ? "active" : " "
                }`}
              >
                <Image
                  src={loc.background}
                  alt={"location image"}
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
              src={
                map.backgroundTitle
                  ? map.backgroundTitle
                  : "/images/Home_bg.png"
              }
              alt="map image"
              width={1000}
              height={500}
            />
          </div>
          <p>
            {choosedLocaition !== 0
              ? `Ви обрали локацію - ${locations[choosedLocaition - 1].name}`
              : "Оберіть локацію"}
          </p>
        </div>

        <div className="create-lesson-choose-location__content-right">
          {locations.slice(locations.length / 2).map((loc) => (
            <div
              key={loc.id}
              className="create-lesson-choose-location__content-location"
            >
              <button
                onClick={() => setChoosedLocaion(loc.id)}
                className={`create-lesson-choose-location__content-location-btn ${
                  loc.id == choosedLocaition ? "active" : " "
                }`}
              >
                <Image
                  src={loc.background}
                  alt={"location image"}
                  width={800}
                  height={400}
                />
              </button>
              <h3>{loc.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <PageBottomNavButtons
        buttons={[
          { text: "НАЗАД", link: `#` },
          { text: "ПРОДОВЖИТИ", link: "#`" },
        ]}
      />
    </div>
  );
};

export default ChooseMapLocaiton;
