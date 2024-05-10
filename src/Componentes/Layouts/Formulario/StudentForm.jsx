
// StudentForm.jsx
import React, { useState } from 'react';
import './StudentForm.css'; // Importa el archivo de estilos CSS

const StudentForm = ({ addStudent }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    edad: '',
    correo: '',
    nota: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    setFormData({
      nombre: '',
      apellido: '',
      edad: '',
      correo: '',
      nota: '',
    });
  };

  return (
    <div className="form-container">
      <h2>Registro de Estudiantes</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Apellido</label>
          <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input type="number" name="edad" value={formData.edad} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input type="email" name="correo" value={formData.correo} onChange={handleChange} className="form-control" />
        </div>
        <div className="form-group">
          <label>Nota del Curso</label>
          <input type="number" name="nota" value={formData.nota} onChange={handleChange} className="form-control" />
        </div>
        <button type="submit" className="btn-submit">Registrar</button>
      </form>
    </div>
  );
};

export default StudentForm;
