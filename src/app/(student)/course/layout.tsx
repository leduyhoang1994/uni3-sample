"use client";

import CourseSidebar from "./components/course-sidebar";
import Header from "./components/header";

export default function CourseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="course-layout">
      <Header></Header>
      <div className="course-body">
        {children}
      </div>
    </div>
  );
}
