import CourseNavbar from "./CourseNavbar";

export default function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  return (
    <section className="p-5 w-full mx-auto rounded-lg shadow-sm">
      <CourseNavbar params={params}></CourseNavbar>
      {children}
    </section>
  );
}
