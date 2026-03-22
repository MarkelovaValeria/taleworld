"use client";

import { useState } from "react";

import ModalCreateCourse from "@/components/modals/ModalCreateCourse/ModalCreateCourse.jsx";
import StudentHomeSection from "@/components/home/StudentHomeSection/StudentHomeSection";
import TeacherHomeSection from "@/components/home/TeacherHomeSection/TeacherHomeSection";

const HomeSectionPage = ({ role, userId }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {role == "Teacher" ? (
        <TeacherHomeSection setModalIsOpen={setModalIsOpen} />
      ) : (
        <StudentHomeSection />
      )}
      {modalIsOpen && (
        <ModalCreateCourse closeModal={closeModal} userId={userId} />
      )}
    </>
  );
};

export default HomeSectionPage;
