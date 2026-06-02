import StudentItem from './StudentItem';

const EMPTY_MESSAGES = {
  all:    { icon: '○', title: 'Nothing Here', sub: 'add a student above to get started' },
  active: { icon: '✓', title: 'All Graduated!',    sub: 'every student has graduated' },
  done:   { icon: '◇', title: 'All Enrolled',     sub: 'none have graduated yet' },
};

function EmptyState({ filter }) {
  const msg = EMPTY_MESSAGES[filter] ?? EMPTY_MESSAGES.all;
  return (
    <div className="empty-state" role="status" aria-live="polite">
      <span className="empty-state__icon">{msg.icon}</span>
      <p className="empty-state__title">{msg.title}</p>
      <p className="empty-state__sub">{msg.sub}</p>
    </div>
  );
}

export default function StudentList({ students, filter, onToggle, onDelete }) {
  if (students.length === 0) {
    return <EmptyState filter={filter} />;
  }

  return (
    <ul className="student-list" aria-label="Student list">
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
