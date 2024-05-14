import React, { useState } from 'react';

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState('');
  const [grades, setGrades] = useState({
    Math: 0,
    SVT: 0,
    Histoire: 0,
    Sport: 0,
    'Maîtrise du Kebab': 0,
  });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, grades };
    addStudent(newStudent);
    setName('');
    setGrades({
      Math: 0,
      SVT: 0,
      Histoire: 0,
      Sport: 0,
      'Maîtrise du Kebab': 0,
    });
    setShowForm(false);
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Kakoukakounotes</h2>
      {showForm ? (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="mb-2">Nom de l'élève</label>
          <input
            className="px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="flex flex-wrap">
            {Object.keys(grades).map((subject) => (
              <div key={subject} className="w-1/2 pr-2">
                <label>{subject}</label>
                <input
                  className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none"
                  type="number"
                  value={grades[subject]}
                  onChange={(e) =>
                    setGrades((prevGrades) => ({
                      ...prevGrades,
                      [subject]: parseFloat(e.target.value),
                    }))
                  }
                />
              </div>
            ))}
          </div>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg focus:outline-none" type="submit">
            Ajouter
          </button>
        </form>
      ) : (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none"
          onClick={() => setShowForm(true)}>
          Ajouter un élève
        </button>
      )}
    </div>
  );
}

export default AddStudentForm;
