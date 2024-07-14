export default class TaskService {
  async getTask(taskSlug: string, lessonSlug: string, unitSlug: string, courseSlug: string) {
    console.log('Get Task Data');

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: 'Task',
          slug: 'task-slug',
          lesson: {
            name: 'Lesson',
            slug: 'lesson-slug',
          },
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