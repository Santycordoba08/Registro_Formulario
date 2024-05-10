// App.jsx
import React, { useState } from 'react';
import StudentForm from './Componentes/Layouts/Formulario/StudentForm';
import StudentList from './Componentes/Layouts/Lista/StudentList';
import './index.css'



const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (studentData) => {
    setStudents([...students, studentData]);
  };

  
  return (
    <div>
      <h1>Registro de Estudiantes</h1>
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
};

export default App;
