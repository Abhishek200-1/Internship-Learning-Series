import React from 'react'
import { useForm } from "react-hook-form"
import { useState } from 'react'
import './App.css'

const App = () => {

  const {
    register,
    handleSubmit,
    reset: resetForm,
    setValue,
    formState: { errors },
  } = useForm();

  const [imagePreview, setImagePreview] = useState('');
  const [records, setRecords] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    const record = records[index];
    setValue("FirstName", record.FirstName);
    setValue("MiddleName", record.MiddleName);
    setValue("LastName", record.LastName);
    setValue("age", record.age);
    setValue("gender", record.gender);
    record.hobbies?.forEach(hobby => setValue("hobbies", record.hobbies));
    setImagePreview(record.imagePreview);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newRecords = records.filter((_, i) => i !== index);
    setRecords(newRecords);
  };

  function onSubmit(data) {
      const newData = { ...data, imagePreview };
      if (editIndex !== null) {
        const updatedRecords = [...records];
        updatedRecords[editIndex] = newData;
        setRecords(updatedRecords);
        setEditIndex(null);
      } else {
        setRecords([...records, newData]);
      }
      resetForm();
      setImagePreview('');
    }

  return (
    <div className='container'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">First Name : </label>
      <input type="text" {...register("FirstName", { required: true, maxLength: 20, minLength: 5, pattern: /^[A-Za-z]+$/i })} aria-invalid={errors.FirstName ? "true" : "false"}  />

      <label htmlFor="">Middle Name : </label>
      <input type="text" {...register("MiddleName", { required: true, maxLength: 20, minLength: 5, pattern: /^[A-Za-z]+$/i })} aria-invalid={errors.MiddleName ? "true" : "false"} />

      <label htmlFor="">Last Name : </label>
      <input type="text" {...register("LastName", { required: true, maxLength: 20, minLength: 5, pattern: /^[A-Za-z]+$/i })} aria-invalid={errors.LastName ? "true" : "false"} />

      <label htmlFor="">Age : </label>
      <input type="number" {...register("age", { min: 18, max: 99 })} />

      <div className='gender-container'>
        <label htmlFor="">Gender Selection</label>
        <label><input type="radio" value="Male" {...register("gender")} /> Male</label>
        <label><input type="radio" value="Female" {...register("gender")} /> Female</label>
        <label><input type="radio" value="Other" {...register("gender")} /> Other</label>
      </div>
    
      <div className='hobbies-container'>
        <label htmlFor="">Hobbies</label>
        <label><input type="checkbox" value="reading" {...register("hobbies")} /> reading</label>
        <label><input type="checkbox" value="travelling" {...register("hobbies")} /> travelling</label>
        <label><input type="checkbox" value="gaming" {...register("hobbies")} /> gaming</label>
        <label><input type="checkbox" value="coding" {...register("hobbies")} /> coding</label>
      </div>

      <label htmlFor="">Upload Image</label>
      <input type="file" accept="image/*" {...register("image")} onChange={(e) => {const file = e.target.files[0]; if (file) { const reader = new FileReader(); reader.onload = () => {setImagePreview(reader.result);}; reader.readAsDataURL(file);}}} />
      {imagePreview && (<img src={imagePreview} alt="Preview" style={{ width: "100px", marginTop: "10px" }} /> )}

      <input type="submit" value={editIndex !== null ? "Update" : "Submit"} />
    </form>

    <div className="card-container">
      {records.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.imagePreview} alt="" className="card-img" />
            <h5>{item.FirstName} {item.MiddleName} {item.LastName}</h5>
            <p><strong>Age:</strong> {item.age}</p>
            <p><strong>Gender:</strong> {item.gender}</p>
            <p><strong>Hobbies:</strong> {item.hobbies?.join(', ')}</p>
            <div className='buttons'>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
