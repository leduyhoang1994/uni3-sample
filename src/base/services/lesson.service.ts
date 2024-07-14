export default class LessonService {
  async getLesson(lessonSlug: string, unitSlug: string, courseSlug: string) {
    console.log('Get Lesson Data');

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: 'Lesson',
          slug: 'lesson-slug',
          tasks: [
            {name: 'Task 1'},
            {name: 'Task 2'},
            {name: 'Task 3'},
          ],
          unit: {
            name: 'Unit',
            slug: 'unit-slug',
          },
          course: {
            name: 'Course',
            slug: 'course-slug',
          },
        });
      }, 200);
    })
  }
}