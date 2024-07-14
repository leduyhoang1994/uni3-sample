export default function updateCourseUrl(course: string, unit?: string, lesson?: string, task?: string) {
  if (!course) {
    return;
  }
  
  let newUrl = `/course/${course}`;

  if (unit) {
    newUrl += `/${unit}`;
  }

  if (lesson) {
    newUrl += `/${lesson}`;
  }

  if (task) {
    newUrl += `/${task}`;
  }

  console.log('Updating Slug');
  window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl);
}