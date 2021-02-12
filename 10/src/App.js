import logo from './logo.svg';
import './App.css';
import BookDetails from './components/BookDetails';
import CourseDetails from './components/CourseDetails';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <div className="App">
      <div className="Column Book">
        <h1 style={{ color: "teal" }}>Book Details</h1>
        <BookDetails />
      </div>

      <div className="Column Course">
        <h1 style={{ color: "teal" }}>Course Details</h1>
        <CourseDetails />
      </div>

      <div className="Column Blog">
        <h1 style={{ color: "teal" }}>Blog Details</h1>
        <BlogDetails />
      </div>

    </div>
  );
}

export default App;
