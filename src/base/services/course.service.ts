export default class CourseService {
  async getCourse(courseSlug: string) {
    console.log('Get Course Data');

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: 'Course',
          slug: 'course-slug',
          units: [
            {name: 'Unit 1'},
            {name: 'Unit 2'},
            {name: 'Unit 3'},
          ],
          unit: {
            name: 'Unit',
            slug: 'slug',
            lesson: {
              name: 'Lesson',
              slug: 'slug',
            },
          }
        });
      }, 200);
    })
  }
}