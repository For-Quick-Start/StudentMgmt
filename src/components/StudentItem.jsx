function StudentItem({ student, course, onToggle, onDelete }) {
  const timeAdded = new Date(student.createdAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <li
      className={`student-item${student.completed ? ' student-item--completed' : ''}`}
      aria-label={`Student: ${student.text}`}
    >
      <button
        className="student-item__check"
        onClick={() => onToggle(student.id)}
        aria-label={student.completed ? 'Mark graduated' : 'Mark complete'}
        title={student.completed ? 'Mark graduated' : 'Mark complete'}
      >
        <span className="student-item__checkbox">
          <span className="student-item__checkmark">✓</span>
        </span>
      </button>

      <div className="student-item__content">
        <span className="student-item__text">{student.name}</span>
        <span className="student-item__meta">added {timeAdded}</span>
      </div>

      <div className="student-item__content">
        <span className="student-item__text">{student.course}</span>
      </div>

      <button
        className="student-item__delete"
        onClick={() => onDelete(student.id)}
        aria-label={`Delete student: ${student.text}`}
        title="Delete student"
      >
        ✕
      </button>
    </li>
  );
}

export default StudentItem
