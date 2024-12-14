import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="course-card">
            <img src={course.imageUrl} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-description">{course.description}</p>
            <p className="course-type">{course.isFree ? "Free" : "Paid"}</p>
        </div>
    );
};

export default CourseCard;
