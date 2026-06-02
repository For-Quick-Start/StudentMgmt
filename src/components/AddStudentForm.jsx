import { useState } from 'react';

export default function AddStudentForm({ onAdd }) {
  const [studentName, setStudentName] = useState('');
  const [studentCourse, setStudentCourse] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const trimmedName = studentName.trim();
    const trimmedCourse = studentCourse.trim();
    if (!(trimmedName || trimmedCourse)) return;
    onAdd(trimmedName, trimmedCourse);
    setStudentName('');
    setStudentCourse('');
  }

  return (
    <form className="add-student-form" onSubmit={handleSubmit} noValidate>
      <div className="add-student-form__input_div">
        <input
          className="add-student-form__input_name"
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          placeholder="enter a student"
          aria-label="New student"
          maxLength={200}
          autoComplete="off"
          autoFocus
        />
        <input
          className="add-student-form__input_course"
          type="text"
          value={studentCourse}
          onChange={(e) => setStudentCourse(e.target.value)}
          placeholder="enter a course"
          aria-label="Enter course"
          maxLength={200}
          autoComplete="off"
        />
      </div>
      <button
        className="add-student-form__btn"
        type="submit"
        disabled={!(studentName.trim() && studentCourse.trim())}
        aria-label="Add student and course"
      >
        ADD +
      </button>
    </form>
  );
}
