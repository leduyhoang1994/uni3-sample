"use client";

import { useCourseStore } from "@/stores/course.store";
import LessonSidebar from "./[task-slug]/components/lesson-sidebar";
import { useParams } from "next/navigation";
import updateCourseUrl from "@/base/helpers/url.helper";
import { useLayoutEffect } from "react";
import LessonService from "@/base/services/lesson.service";

function LessonDetail() {
  const params = useParams();

  const { currentLesson, currentUnit, currentCourse, setCourseDataFromLesson } = useCourseStore() as any;

  const lessonName = currentLesson.name;

  async function loadLesson(lessonSlug: string, unitSlug: string, courseSlug: string) {
    const lessonService = new LessonService();
    const lessonData = await lessonService.getLesson(lessonSlug, unitSlug, courseSlug) as any;

    setCourseDataFromLesson(lessonData);

    updateCourseUrl(lessonData.course.slug, lessonData.unit.slug, lessonData.slug);
  }

  useLayoutEffect(() => {
    const courseSlug = params["course-slug"] as any;
    const unitSlug = params["unit-slug"] as any;
    const lessonSlug = params["lesson-slug"] as any;

    loadLesson(lessonSlug, unitSlug, courseSlug);

  }, []);

  return (
    <div className="lesson-detail">
      <LessonSidebar unitSlug={currentUnit.slug} courseSlug={currentCourse.slug} />
      <div className="lesson-detail__body">
        <div>Lesson Name: {lessonName}</div>
      </div>
    </div>
  );
}

export default LessonDetail;
