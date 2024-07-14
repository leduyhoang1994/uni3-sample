"use client";

import { useParams } from "next/navigation";
import CourseSidebar from "../components/course-sidebar";
import { useCourseStore } from "@/stores/course.store";
import updateCourseUrl from "@/base/helpers/url.helper";
import CourseService from "@/base/services/course.service";
import { useLayoutEffect } from "react";

function CourseDetail() {
  const params = useParams();
  const currentCourseSlug = params["course-slug"];
  const { currentCourse, setCourseData } = useCourseStore() as any;

  async function loadCourse(courseSlug: string) {
    const courseService = new CourseService();
    const courseData = (await courseService.getCourse(courseSlug)) as any;

    setCourseData(courseData);
  }

  useLayoutEffect(() => {
    const courseSlug = params["course-slug"] as string;
    loadCourse(courseSlug);
  }, []);

  if (currentCourseSlug != currentCourse.slug) {
    updateCourseUrl(currentCourse.slug);
  }

  return (
    <div className="course-detail">
      <CourseSidebar />
      <div className="course-detail__body">
        Course Detail
        <div>Course Name: {currentCourse.name}</div>
      </div>
    </div>
  );
}

export default CourseDetail;
