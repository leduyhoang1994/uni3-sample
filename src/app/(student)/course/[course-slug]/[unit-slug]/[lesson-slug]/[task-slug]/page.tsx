"use client";

import LessonSidebar from "./components/lesson-sidebar";
import updateCourseUrl from "@/base/helpers/url.helper";
import TaskService from "@/base/services/task.service";
import { useCourseStore } from "@/stores/course.store";
import { useParams } from "next/navigation";
import { useLayoutEffect } from "react";
function TaskDetail() {
  const params = useParams();

  const {
    currentCourse,
    currentUnit,
    currentTask,
    setCourseDataFromTask,
  } = useCourseStore() as any;

  const shouldLoadSidebar = !currentTask.loading;

  async function loadTask(
    taskSlug: string,
    lessonSlug: string,
    unitSlug: string,
    courseSlug: string
  ) {
    const taskService = new TaskService();
    const taskData = (await taskService.getTask(
      taskSlug,
      lessonSlug,
      unitSlug,
      courseSlug
    )) as any;

    setCourseDataFromTask(taskData);

    updateCourseUrl(
      taskData.course.slug,
      taskData.unit.slug,
      taskData.lesson.slug,
      taskData.slug,
    );
  }

  useLayoutEffect(() => {
    const courseSlug = params["course-slug"] as any;
    const unitSlug = params["unit-slug"] as any;
    const lessonSlug = params["lesson-slug"] as any;
    const taskSlug = params["task-slug"] as any;

    loadTask(taskSlug, lessonSlug, unitSlug, courseSlug);
  }, []);

  // if (currentCourseSlug != currentCourse.slug || currentUnitSlug != currentUnit.slug || currentLessonSlug != currentLesson.slug || currentTaskSlug != currentTask.slug) {
  //   updateCourseUrl(currentCourse.slug, currentUnit.slug, currentLesson.slug, currentTask.slug);
  // }

  return (
    <div className="lesson-detail">
      <LessonSidebar
        selfLoad={shouldLoadSidebar}
        unitSlug={currentUnit.slug}
        courseSlug={currentCourse.slug}
      />
      <div className="lesson-detail__body">Task Detail</div>
    </div>
  );
}

export default TaskDetail;
