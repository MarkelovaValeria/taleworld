"use client";
import { useCallback, useEffect, useState } from "react";

const TOTAL_LOCATIONS = 4;
const isBrowser = typeof window !== "undefined";

export const useProgress = (studentId, courseId) => {
  const progressKey = `progress_${studentId}_${courseId}`;
  const empty = {
    completedLocations: [],
    completedPoints: {},  // { [locId]: [pointId, ...] }
    pointResults: {},     // { [locId]: { [pointId]: true | false } }
    hintedPoints: {},     // { [locId]: [pointId, ...] } — використали підказку
  };

  const [progress, setProgress] = useState(empty);

  useEffect(() => {
    if (!studentId || !courseId) return;
    const data = localStorage.getItem(progressKey);
    if (data) setProgress({ ...empty, ...JSON.parse(data) });
    else setProgress(empty);
  }, [progressKey, studentId, courseId]);

  const persist = (updated) => {
    if (isBrowser) localStorage.setItem(progressKey, JSON.stringify(updated));
    return updated;
  };

  // Позначити точку як пройдену + зберегти результат
  const completePoint = useCallback(
    (locId, pointId, isCorrect) => {
      setProgress((prev) => {
        const locPoints = prev.completedPoints[locId] || [];
        const locResults = prev.pointResults?.[locId] || {};
        return persist({
          ...prev,
          completedPoints: {
            ...prev.completedPoints,
            [locId]: locPoints.includes(Number(pointId))
              ? locPoints
              : [...locPoints, Number(pointId)],
          },
          pointResults: {
            ...prev.pointResults,
            [locId]: { ...locResults, [pointId]: isCorrect },
          },
        });
      });
    },
    [progressKey],
  );

  // Позначити, що студент використав підказку для цієї точки
  const markHint = useCallback(
    (locId, pointId) => {
      setProgress((prev) => {
        const existing = prev.hintedPoints?.[locId] || [];
        if (existing.includes(Number(pointId))) return prev;
        return persist({
          ...prev,
          hintedPoints: {
            ...prev.hintedPoints,
            [locId]: [...existing, Number(pointId)],
          },
        });
      });
    },
    [progressKey],
  );

  // Позначити локацію як завершену
  const completeLocation = useCallback(
    (locId) => {
      setProgress((prev) => {
        if (prev.completedLocations.includes(Number(locId))) return prev;
        return persist({
          ...prev,
          completedLocations: [...prev.completedLocations, Number(locId)],
        });
      });
    },
    [progressKey],
  );

  const isLocationCompleted = useCallback(
    (locId) => progress.completedLocations.includes(Number(locId)),
    [progress],
  );

  const isLocationAvailable = useCallback(
    (locId) => {
      const n = Number(locId);
      if (n === 1) return true;
      return progress.completedLocations.includes(n - 1);
    },
    [progress],
  );

  const isPointCompleted = useCallback(
    (locId, pointId) =>
      (progress.completedPoints[locId] || []).includes(Number(pointId)),
    [progress],
  );

  // null → не відповідав | true → правильно | false → неправильно
  const getPointResult = useCallback(
    (locId, pointId) => {
      const results = progress.pointResults?.[locId];
      if (!results || !(pointId in results)) return null;
      return results[pointId];
    },
    [progress],
  );

  // Чи використав підказку для цієї точки
  const isPointHinted = useCallback(
    (locId, pointId) =>
      (progress.hintedPoints?.[locId] || []).includes(Number(pointId)),
    [progress],
  );

  const getCompletionPercent = useCallback(
    () =>
      Math.round((progress.completedLocations.length / TOTAL_LOCATIONS) * 100),
    [progress],
  );

  return {
    progress,
    completePoint,
    markHint,
    completeLocation,
    isLocationCompleted,
    isLocationAvailable,
    isPointCompleted,
    getPointResult,
    isPointHinted,
    getCompletionPercent,
  };
};
