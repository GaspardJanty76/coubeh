import React, { useState, useEffect } from 'react';
import StudentList from './component_students/StudentList';
import AddStudentForm from './component_students/AddStudentForm';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem('students'));
    if (savedStudents) {
      setStudents(savedStudents);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents([...students, student]);
    toast.success("Ajout de l'élève réussi !");
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
    toast.success('Suppression de l\'élève réussie !', {
      iconTheme: {
        primary: '#F03A17',
        secondary: '#FFFAEE',
      },
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Toaster />
      </div>
      <AddStudentForm addStudent={addStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;
