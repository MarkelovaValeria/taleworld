"use client";

import { createContext, useContext, useEffect, useState } from "react";

const TasksContext = createContext();

export const TasksProvider = ({ children, userId }) => {
  const [tasks, setTasks] = useState([]);
  const [points, setPoints] = useState({});

  useEffect(() => {
    const storedTasks = localStorage.getItem(`tasks_${userId}`);
    const storedPoints = localStorage.getItem(`points_${userId}`);

    if (storedTasks) setTasks(JSON.parse(storedTasks));
    if (storedPoints) setPoints(JSON.parse(storedPoints));
  }, [userId]);

  useEffect(() => {
    localStorage.setItem(`tasks_${userId}`, JSON.stringify(tasks));
  }, [tasks, userId]);

  useEffect(() => {
    localStorage.setItem(`points_${userId}`, JSON.stringify(points));
  }, [points, userId]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)),
    );
  };

  const getAllTasks = () => tasks;

  const initPointsForLesson = (lessonId, pointsArray) => {
    setPoints((prev) => ({
      ...prev,
      [lessonId]: pointsArray.map((p) => ({
        ...p,
        taskId: null,
      })),
    }));
  };

  const getPoints = (lessonId) => {
    return points?.[lessonId] || [];
  };

  const assignTaskToPoint = (lessonId, pointId, taskId) => {
    setPoints((prev) => ({
      ...prev,
      [lessonId]: prev[lessonId].map((point) =>
        point.id === pointId ? { ...point, taskId } : point,
      ),
    }));
  };

  const removeTaskFromPoint = (lessonId, pointId) => {
    setPoints((prev) => ({
      ...prev,
      [lessonId]: prev[lessonId].map((point) =>
        point.id === pointId ? { ...point, taskId: null } : point,
      ),
    }));
  };

  const isInitialized = (lessonId) => !!points?.[lessonId];

  const hasTask = (lessonId, pointId) => {
    return !!points?.[lessonId]?.find((p) => p.id === pointId)?.taskId;
  };

  const getTaskForPoint = (lessonId, pointId) => {
    const point = points?.[lessonId]?.find((p) => p.id === pointId);
    return tasks.find((t) => t.id === point?.taskId) || null;
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        updateTask,
        getAllTasks,

        initPointsForLesson,
        getPoints,
        isInitialized,

        assignTaskToPoint,
        removeTaskFromPoint,
        hasTask,
        getTaskForPoint,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);
