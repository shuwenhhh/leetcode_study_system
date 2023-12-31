import db from "../Database";
import { Link } from "react-router-dom";
function Groups() {
  const courses = db.courses;
  return (
    <div className="mt-5">
      <h2>Study Groups ({courses.length})</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        
          {courses.map((course, index) => (
            <div className="col">
            <div className="card h-100 course-card">
              <img src="/images/react.png" class="card-img-top" alt="..." />
              <div className="card-body">

                <Link
                  key={course._id}
                  to={`/HomePage/Courses/${course._id}`}
                  className="card-title text-danger"
                >
                  {course.name}
                </Link>
                        <p class="card-text">2023 Fall, Section 3</p>
              </div>
            </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Groups;
