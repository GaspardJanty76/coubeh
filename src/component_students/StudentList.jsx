import React from 'react';
import Student from './Student';

function StudentList({ students, deleteStudent }) {
  return (
    <div className="student-list overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-blue-900 text-white">
            <th className="px-4 py-3 text-center">Nom de l'élève</th>
            <th className="px-4 py-3 text-center">Mathématiques</th>
            <th className="px-4 py-3 text-center">SVT</th>
            <th className="px-4 py-3 text-center">Histoire</th>
            <th className="px-4 py-3 text-center">Sport</th>
            <th className="px-4 py-3 text-center">Maîtrise du Kebab</th>
            <th className="px-4 py-3 text-center">Moyenne</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student key={index} index={index} student={student} deleteStudent={deleteStudent} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;