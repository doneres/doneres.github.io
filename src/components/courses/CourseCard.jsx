import { Link } from "react-router-dom";

export default function CourseCard({ title, language, to, icon }) {
  return (
    <Link
      to={to}
      className="group relative bg-gray-900 rounded-xl p-5 flex items-center gap-4 border border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-blue-500 hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-800 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-transparent group-hover:to-transparent transition-all duration-300" />
      
      <div className="w-10 h-10 shrink-0 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-blue-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/50 relative z-10">
        {icon}
      </div>
      <div className="flex-1 relative z-10">
        <p className="text-sm text-gray-400 group-hover:text-blue-300 transition-colors">{language}</p>
        <h3 className="text-white font-semibold group-hover:text-purple-200 transition-colors">{title}</h3>
      </div>
    </Link>
  );
}
