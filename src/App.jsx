import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client'

import './App.css';

import Header      from './components/Header';
import AddStudentForm from './components/AddStudentForm';
import FilterBar   from './components/FilterBar';
import StudentList    from './components/StudentList';
import FooterBar   from './components/FooterBar';

function makeId() {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function loadStudents() {
  try {
    const raw = localStorage.getItem('studentsJSON');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [students, setStudents] = useState(loadStudents);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('studentsJSON', JSON.stringify(students));
  }, [students]);

  const counts = {
    all:    students.length,
    active: students.filter(t => !t.completed).length,
    done:   students.filter(t =>  t.completed).length,
  };

  const remaining = counts.active;

  const filteredStudents = students.filter(student => {
    if (filter === 'active') return !student.completed;
    if (filter === 'done')   return  student.completed;
    return true;
  });

  function addStudent(name, course) {
    const newStudent = {
      id: makeId(),
      name: name,
      course: course,
      createdAt: Date.now(),
      completed: false,
    };
    setStudents(prev => [newStudent, ...prev]);
  }

  function toggleStudent(id) {
    setStudents(prev =>
      prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }

  function deleteStudent(id) {
    setStudents(prev => prev.filter(t => t.id !== id));
  }

  function clearDone() {
    setStudents(prev => prev.filter(t => !t.completed));
  }

  return (
    <div className="app">
      <Header total={students.length} remaining={remaining} />

      <div className="divider" />

      <AddStudentForm onAdd={addStudent} />

      {students.length > 0 && (
        <FilterBar
          current={filter}
          onChange={setFilter}
          counts={counts}
        />
      )}

      <StudentList
        students={filteredStudents}
        filter={filter}
        onToggle={toggleStudent}
        onDelete={deleteStudent}
      />

      {students.length > 0 && (
        <FooterBar
          remaining={remaining}
          completedCount={counts.done}
          onClearDone={clearDone}
        />
      )}
    </div>
  );
}
