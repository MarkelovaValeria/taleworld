"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import ModalSuccessCreationCourse from "@/components/modals/ModalSuccessCreationCourse/ModalSuccessCreationCourse";
import PageBottomNavButtons from "@/components/common/PageBottomNavButtons/PageBottomNavButtons.jsx";

import { getMapById } from "@/services/connect";

const MapTemplateSection = ({ id }) => {
  const [map, setMap] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [locations, setLocations] = useState([
    {
      id: 1,
      background: "/images/locations/location1.png",
    },
    {
      id: 2,
      background: "/images/locations/location1.png",
    },
    {
      id: 3,
      background: "/images/locations/location1.png",
    },
    {
      id: 4,
      background: "/images/locations/location1.png",
    },
  ]);

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

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await getMapById(id);
      setMap(res);
    };
    getData();
  }, [id]);

  return (
    <>
      <div className="create-lesson-map">
        <div className="create-lesson-map__content">
          <div className="create-lesson-map__img-wrapper">
            <Image
              src={
                map.backgroundTitle
                  ? map.backgroundTitle
                  : "/images/Home_bg.png"
              }
              alt="map image"
              width={2000}
              height={1000}
            />
          </div>

          <div className="create-lesson-map__info">
            <h3>{map.name}</h3>
            <p>{map.description}</p>

            <div className="create-lesson-map__info-locations">
              <h4>Зображення</h4>
              <div className="create-lesson-map__info-locations-images-container">
                {locations.map((loc) => (
                  <div key={loc.id}>
                    <Image
                      src={loc.background}
                      alt="location image"
                      width={220}
                      height={124}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="create-lesson-map__reviews">
          {reviews.map((review) => (
            <div key={review.id} className="create-lesson-map__reviews-item">
              <h4>{review.name}</h4>
              <p>{review.text}</p>
            </div>
          ))}
        </div>

        <PageBottomNavButtons
          buttons={[
            { text: "ПЕРЕГЛЯНУТИ ІНШІ ВАРІАНТИ", link: "/choose-template" },
            { text: "СТВОРИТИ КУРС", onHandleClick: handleOpenModal },
          ]}
        />
      </div>
      {isOpenModal && (
        <ModalSuccessCreationCourse closeModal={handleCloseModal} mapId={id} />
      )}
    </>
  );
};

export default MapTemplateSection;
