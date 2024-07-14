'use client'

import { useCourseStore } from "@/stores/course.store";
import LessonsSlide from "./lessons-slide";
import { useLayoutEffect } from "react";
import LessonService from "@/base/services/lesson.service";

function LessonSidebar(props: any) {
  const { setCourseDataFromLesson, tasks } = useCourseStore() as any;
    
  const courseSlug = props.courseSlug;
  const unitSlug = props.unitSlug;
  const lessonSlug = props.lessonSlug;

  async function loadTasks(lessonSlug: string, unitSlug: string, courseSlug: string) {
    const lessonService = new LessonService();
    const lessonData = await lessonService.getLesson(lessonSlug, unitSlug, courseSlug);

    setCourseDataFromLesson(lessonData);
  }

  useLayoutEffect(() => {
    if (!props.selfLoad) {
      return;
    }

    loadTasks(lessonSlug, unitSlug, courseSlug);
  }, [props.unitSlug, props.courseSlug]);

  return (
    <div className="lesson-sidebar">
      LessonSideBar
      <LessonsSlide unitSlug={unitSlug} courseSlug={courseSlug} />
      <div>
        Task List:
        <ul>
          {tasks.map((task: any) => {
            return <li key={task.name}>{task.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default LessonSidebar;