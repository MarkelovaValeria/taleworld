"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import ModalPlayTask from "@/components/modals/ModalPlayTask/ModalPlayTask";
import { useProgress } from "@/hooks/useProgress";
import { getCourseById, getUserByCourseId } from "@/services/connect";
import { mockTasks } from "@/data/tasks";

import locImage from "/public/images/locations/location1.png";
import style from "./StudentLocationPlay.module.css";

const defaultPoints = {
  1: [
    { id: 1, x: 85, y: 10 },
    { id: 2, x: 75, y: 25 },
    { id: 3, x: 45, y: 65 },
  ],
  2: [
    { id: 1, x: 35, y: 10 },
    { id: 2, x: 25, y: 25 },
    { id: 3, x: 35, y: 75 },
    { id: 4, x: 15, y: 65 },
  ],
  3: [
    { id: 1, x: 15, y: 10 },
    { id: 2, x: 55, y: 65 },
    { id: 3, x: 65, y: 75 },
  ],
  4: [
    { id: 1, x: 85, y: 50 },
    { id: 2, x: 75, y: 35 },
    { id: 3, x: 25, y: 25 },
    { id: 4, x: 35, y: 25 },
  ],
};

const StudentLocationPlay = ({ courseId, locId, studentId }) => {
  const router = useRouter();
  const locNum = Number(locId);

  const {
    isPointCompleted,
    getPointResult,
    isPointHinted,
    completePoint,
    markHint,
    completeLocation,
  } = useProgress(studentId, courseId);

  const [points, setPoints] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [activePoint, setActivePoint] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const load = async () => {
      let loadedTasks = mockTasks;
      let rawPoints = null;

      try {
        // Fetch course and teacher in parallel
        const [course, teacher] = await Promise.all([
          getCourseById(courseId),
          getUserByCourseId(courseId),
        ]);

        const mapId = course?.mapId ?? 1;
        const teacherId = teacher?.id ?? teacher?.userId;

        if (teacherId) {
          const tRaw = localStorage.getItem(`tasks_${teacherId}`);
          const pRaw = localStorage.getItem(`points_${teacherId}`);

          const teacherTasks = tRaw ? JSON.parse(tRaw) : [];
          const teacherPoints = pRaw ? JSON.parse(pRaw) : {};

          if (teacherTasks.length > 0) loadedTasks = teacherTasks;

          // Primary key: mapId_locId (shared between creation and edit flows)
          // Fallback: bare locId (old data before this fix)
          const mapKey = `${mapId}_${locId}`;
          if (teacherPoints[mapKey]?.length > 0) {
            rawPoints = teacherPoints[mapKey];
          } else if (teacherPoints[locId]?.length > 0) {
            rawPoints = teacherPoints[locId];
          }
        }
      } catch (_) {
        // API недоступний — використовуємо дефолти
      }

      let finalPoints;

      if (rawPoints) {
        // ── Дані від викладача ──────────────────────────────────────────
        // Показуємо ТІЛЬКИ ті точки, де taskId призначено (не null)
        finalPoints = rawPoints.filter((p) => p.taskId != null);
      } else {
        // ── Дефолтний режим (без налаштувань викладача) ─────────────────
        // Призначаємо по колу з mockTasks і показуємо всі точки
        finalPoints = (defaultPoints[locNum] || []).map((p, i) => ({
          ...p,
          taskId: loadedTasks[i % loadedTasks.length]?.id ?? null,
        }));
      }

      setPoints(finalPoints);
      setTasks(loadedTasks);
    };

    load();
  }, [courseId, locId, locNum]);

  const getTask = (taskId) => tasks.find((t) => t.id === taskId) ?? null;

  const handlePointClick = (point) => {
    // Блокуємо зелені та оранжеві (підказка вже показана)
    if (getPointResult(locNum, point.id) === true) return;
    if (isPointHinted(locNum, point.id)) return;
    const task = getTask(point.taskId);
    if (!task) return;
    setActivePoint({ point, task });
    setModalOpen(true);
  };

  const handleAnswer = (isCorrect) => {
    if (!activePoint) return;
    // Зберігаємо і факт завершення, і чи правильно
    completePoint(locNum, activePoint.point.id, isCorrect);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActivePoint(null);
  };

  // Можна завершувати: всі точки або зелені (правильно) або оранжеві (підказка)
  const allDone =
    points.length > 0 &&
    points.every(
      (p) =>
        getPointResult(locNum, p.id) === true || isPointHinted(locNum, p.id),
    );

  const handleFinishLocation = () => {
    completeLocation(locNum);
    router.push(`/play/${courseId}`);
  };

  // Визначаємо клас точки за результатом + чи була підказка
  const getSpotClass = (point) => {
    const hinted = isPointHinted(locNum, point.id);
    const result = getPointResult(locNum, point.id);
    if (hinted) return `${style.spot} ${style.spotHinted}`; // підказка → оранжева
    if (result === true) return `${style.spot} ${style.spotCorrect}`; // правильно → зелена
    if (result === false) return `${style.spot} ${style.spotWrong}`; // неправильно → червона
    return style.spot;
  };

  return (
    <section className={style.play}>
      {/* Fullscreen map — covers the entire viewport below the header */}
      <div className={style.play_map}>
        <Image src={locImage} alt="location" width={2200} height={1100} />

        {/* Back button — absolute top-right overlay */}
        <button
          className={style.backBtn}
          onClick={() => router.push(`/play/${courseId}`)}
        >
          Назад до карти
        </button>

        {/* "Finish location" appears bottom-right when all points done */}
        {allDone && (
          <button
            className={style.finishBtn}
            onClick={handleFinishLocation}
          >
            Завершити локацію ✓
          </button>
        )}

        {points.map((point) => (
          <button
            key={point.id}
            className={getSpotClass(point)}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => handlePointClick(point)}
            disabled={
              getPointResult(locNum, point.id) === true ||
              isPointHinted(locNum, point.id)
            }
            title={
              getPointResult(locNum, point.id) === true
                ? "Правильно ✓"
                : isPointHinted(locNum, point.id)
                  ? "Підказку використано"
                  : getPointResult(locNum, point.id) === false
                    ? "Спробуй ще раз"
                    : "Натисни, щоб відповісти"
            }
          />
        ))}
      </div>

      {modalOpen && activePoint && (
        <ModalPlayTask
          task={activePoint.task}
          onClose={handleCloseModal}
          onAnswer={handleAnswer}
          onHint={() => markHint(locNum, activePoint.point.id)}
        />
      )}
    </section>
  );
};

export default StudentLocationPlay;
