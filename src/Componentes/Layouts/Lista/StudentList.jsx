
import React from 'react';
import './StudentList.css';

const StudentList = ({ students }) => {
  return (
    <div className="list-container">
      <h2>Lista de Estudiantes</h2>
      {students.map((student, index) => (
        <div key={index} className="student-item">
          <div className="student-info">
            <h3>{student.nombre} {student.apellido}</h3>
            <p><strong>Correo:</strong> {student.correo}</p>
            <p><strong>Edad:</strong> {student.edad}</p>
            <p><strong>Nota del Curso:</strong> {student.nota}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
