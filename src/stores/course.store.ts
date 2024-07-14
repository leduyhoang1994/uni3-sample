import { create } from "zustand";

const formatCourse = function (data: any) {
  const modifiedData = data;

  return modifiedData;
};

const formatUnit = function (data: any) {
  const modifiedData = data;

  return modifiedData;
};

const formatLesson = function (data: any) {
  const modifiedData = data;

  return modifiedData;
};

const formatTask = function (data: any) {
  const modifiedData = data;

  return modifiedData;
};

export const useCourseStore = create((set) => ({
  currentCourse: {
    loading: true,
    name: "Course Name",
    slug: undefined,
  },
  units: [
    {
      name: "Unit 1",
    },
  ],
  currentUnit: {
    loading: true,
    name: "unit name",
    slug: undefined,
  },
  lessons: [],
  currentLesson: {
    loading: true,
    name: "lesson name",
    slug: undefined,
  },
  tasks: [],
  currentTask: {
    loading: true,
    name: "task name",
    slug: undefined,
  },
  setCourseData: (data: any) =>
    set(() => {
      const currentCourse = formatCourse(data);
      currentCourse.loading = false;

      return {
        currentCourse,
        units: currentCourse.units,
      };
    }),
  setCourseDataFromUnit: (data: any) =>
    set((state: any) => {
      const currentCourse = formatCourse(data.course);
      const currentUnit = formatUnit(data);
      currentUnit.loading = false;

      return {
        currentCourse,
        currentUnit,
        lessons: currentUnit.lessons,
      };
    }),
  setCourseDataFromLesson: (data: any) =>
    set(() => {
      const currentCourse = formatCourse(data.course);
      const currentUnit = formatUnit(data.unit);
      const currentLesson = formatLesson(data);
      currentLesson.loading = false;

      return {
        currentCourse,
        currentUnit,
        currentLesson,
        tasks: currentLesson.tasks,
      };
    }),
  setCourseDataFromTask: (data: any) =>
    set(() => {
      const currentCourse = formatCourse(data.course);
      const currentUnit = formatUnit(data.unit);
      const currentLesson = formatLesson(data.lesson);
      const currentTask = formatTask(data);
      currentTask.loading = false;

      return {
        currentCourse,
        currentUnit,
        currentLesson,
        currentTask,
      };
    }),
}));
