import { useState } from 'react';
import axios from 'axios';

function AddCourse() {
  const [course, setCourse] = useState({ title: '', description: '', content: '', videoUrl: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/courses', course)
      .then(() => alert('Course added successfully!'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Tambah Materi Baru</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Judul" className="border p-2 w-full" onChange={(e) => setCourse({ ...course, title: e.target.value })} />
        <textarea placeholder="Deskripsi" className="border p-2 w-full" onChange={(e) => setCourse({ ...course, description: e.target.value })} />
        <textarea placeholder="Konten" className="border p-2 w-full" onChange={(e) => setCourse({ ...course, content: e.target.value })} />
        <input type="text" placeholder="URL Video" className="border p-2 w-full" onChange={(e) => setCourse({ ...course, videoUrl: e.target.value })} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Tambah
        </button>
      </form>
    </div>
  );
}

export default AddCourse;
