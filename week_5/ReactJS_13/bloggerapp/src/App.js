import './App.css';

import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

import { books, blogs, courses } from './Data';

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div className="container">

            {/* Logical && */}

            <div className="box">
                {showCourses && <CourseDetails courses={courses} />}
            </div>

            {/* Ternary */}

            <div className="box">
                {showBooks ? <BookDetails books={books} /> : null}
            </div>

            {/* Element Variable */}

            <div className="box">
                {showBlogs ? <BlogDetails blogs={blogs} /> : null}
            </div>

        </div>

    );
}

export default App;