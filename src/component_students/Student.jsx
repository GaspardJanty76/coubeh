import React, { useState } from 'react';

function Student({ student, index, deleteStudent }) {
  const [editedStudent, setEditedStudent] = useState(student);
  const { name, grades } = editedStudent;

  const handleChange = (e, subject) => {
    const updatedStudent = { ...editedStudent };
    updatedStudent.grades[subject] = parseFloat(e.target.value);
    setEditedStudent(updatedStudent);
  };

  const calculateAverage = () => {
    let total = 0;
    Object.values(grades).forEach((grade) => {
      total += grade;
    });
    return (total / Object.keys(grades).length).toFixed(2);
  };

  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-3">{name}</td>
      {Object.keys(grades).map((subject) => (
        <td key={subject} className="px-4 py-3">
          <input
            className="w-20 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none"
            type="number"
            value={grades[subject]}
            onChange={(e) => handleChange(e, subject)}
          />
        </td>
      ))}
      <td className="px-4 py-3">{calculateAverage()}</td>
      <td className="px-4 py-3">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg focus:outline-none"
          onClick={() => deleteStudent(index)}
        >
          Supprimer
        </button>
      </td>
    </tr>
  );
}

export default Student;