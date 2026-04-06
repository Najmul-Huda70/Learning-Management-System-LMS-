import CourseHeader from "./CourseDetails";

export default function layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ CourseCode: string }>;
}) {
  return (
    <section className="m-5 p-5 w-full mx-auto rounded-lg shadow-sm">
      <CourseHeader params={params}></CourseHeader>
      {children}
    </section>
  );
}
