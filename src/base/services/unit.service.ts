export default class UnitService {
  async getUnit(unitSlug: string, courseSlug: string) {
    console.log("Get Unit Data");

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (unitSlug != 'unit-slug') {
          resolve({
            name: "Unit",
            slug: "unit-slug",
            lessons: [
              { name: "Lesson xxx" },
            ],
            course: {
              name: "Course Name",
              slug: "course-slug",
            },
          });

          return;
        }
        resolve({
          name: "Unit",
          slug: "unit-slug",
          lessons: [
            { name: "Lesson 1" },
            { name: "Lesson 2" },
            { name: "Lesson 3" },
          ],
          course: {
            name: "Course Name",
            slug: "course-slug",
          },
        });
      }, 200);
    });
  }
}
