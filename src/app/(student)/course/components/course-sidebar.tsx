"use client";

import CourseService from "@/base/services/course.service";
import { useCourseStore } from "@/stores/course.store";
import { useLayoutEffect } from "react";

function CourseSidebar(props: any) {
  const { currentCourse, setCourseData, units }: any = useCourseStore();
  const courseName = currentCourse.name;
  const courseSlug = currentCourse.slug;
  const isLoading = currentCourse.loading;

  async function loadCourse(courseSlug: string) {
    if (props.courseSlug === false) {
      return;
    }
    
    console.log('Load Course Data');
    
    const courseService = new CourseService();
    const courseData = await courseService.getCourse(courseSlug) as any;

    setCourseData(courseData);
  }

  useLayoutEffect(() => {
    if (!props.selfLoad) {
      return;
    }
    
    const courseSlug = props.courseSlug;
    loadCourse(courseSlug);
  }, [props.selfLoad]);

  if (isLoading) {
    return <div className="course-sidebar">Skeleton Load</div>;
  }

  return (
    <div className="course-sidebar">
      <div>Course Name: {courseName}</div>
      <div>Course Slug: {courseSlug}</div>
      <div>
        Unit list:
        <ul>
          {units.map((unit: any) => {
            return <li key={unit.name}>{unit.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default CourseSidebar;
