import React, { useState } from 'react';
import './App.css';  // Import custom CSS file

function App() {
  const [query, setQuery] = useState('');
  const [courses, setCourses] = useState([]);
  
  // Handle search functionality
  const handleSearch = async () => {
    // Assume you fetch course data from your backend here
    const courseData = [
      { title: 'Web Development for Beginners', image: 'path/to/image1.jpg' },
      { title: 'Digital Marketing Strategies', image: 'path/to/image2.jpg' },
      { title: 'Data Science with R', image: 'path/to/image3.jpg' }
    ];
    setCourses(courseData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <span>EduAid</span>
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#research">Research</a>
            <a href="#contributions">Our Contributions</a>
          </div>
        </nav>
        <div className="search-section">
          <h1>EduAid</h1>
          <p>Creating efficient and functional humans for your home</p>
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>

      <section className="courses-section">
        <h2>Courses and Material</h2>
        <div className="courses">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="profile-section">
        <div className="profile">
          <img src="path/to/john_doe_image.jpg" alt="John Doe" />
          <h3>John Doe</h3>
          <p>Learn about the wonders of learning and achieve incredible knowledge.</p>
          <button>Download</button>
        </div>
      </section>
    </div>
  );
}

export default App;
