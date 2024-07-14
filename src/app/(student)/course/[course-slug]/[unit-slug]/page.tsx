"use client";

import { useParams } from "next/navigation";
import CourseSidebar from "../../components/course-sidebar";
import { useCourseStore } from "@/stores/course.store";
import updateCourseUrl from "@/base/helpers/url.helper";
import UnitService from "@/base/services/unit.service";
import { useLayoutEffect } from "react";

function UnitDetail() {
  const params = useParams();
  const { currentCourse, currentUnit, setCourseDataFromUnit } =
    useCourseStore() as any;
  
  const shouldLoadCourse = !currentUnit.loading;

  async function loadUnit(unitSlug: string, courseSlug: string) {
    const unitService = new UnitService();
    const unitData = (await unitService.getUnit(unitSlug, courseSlug)) as any;

    await setCourseDataFromUnit(unitData);
    updateCourseUrl(unitData.course.slug, unitData.slug);
  }

  useLayoutEffect(() => {
    const courseSlug = params["course-slug"] as string;
    const unitSlug = params["unit-slug"] as string;

    loadUnit(unitSlug, courseSlug);
  }, []);

  return (
    <div className="unit-detail">
      <CourseSidebar courseSlug={currentCourse.slug} selfLoad={shouldLoadCourse} />
      <div className="unit-detail__body">
        Unit Detail
        <div>Unit Name: {currentUnit.name}</div>
      </div>
    </div>
  );
}

export default UnitDetail;
