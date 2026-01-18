import CourseCard from "./CourseCard";

export default function CoursesSection({ title = "Cursos", items = [] }) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-10">
      <h2 className="text-3xl font-bold text-black mb-2">{title}</h2>
      <p className="text-black-300 mb-6">
        Escolha uma tecnologia para começar seu aprendizado.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <CourseCard key={item.to} {...item} />
        ))}
      </div>
    </section>
  );
}
