import UnitService from "@/base/services/unit.service";
import { useCourseStore } from "@/stores/course.store";
import { useLayoutEffect } from "react";

function LessonsSlide(props: any) {
  const { setCourseDataFromUnit, lessons } = useCourseStore() as any;

  async function loadLessons(unitSlug: string, courseSlug: string) {
    const unitService = new UnitService();

    const unitData = await unitService.getUnit(unitSlug, courseSlug);

    setCourseDataFromUnit(unitData);
  }

  useLayoutEffect(() => {
    if (!props.unitSlug || !props.courseSlug) {
      return;
    }

    const unitSlug = props.unitSlug;
    const courseSlug = props.courseSlug;

    loadLessons(unitSlug, courseSlug);
  }, [props.unitSlug, props.courseSlug]);

  return (
    <div>
      {lessons.map((lesson: any) => (
        <div key={lesson.name}>{lesson.name}</div>
      ))}
    </div>
  );
}

export default LessonsSlide;
