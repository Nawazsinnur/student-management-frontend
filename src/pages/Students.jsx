import { useEffect, useState } from "react";
import API from "../services/api";

function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", rollNumber: "", course: "", marks: "" });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await API.get("/students");
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addStudent = async (e) => {
    e.preventDefault();
    try {
      await API.post("/students", form);
      setForm({ name: "", rollNumber: "", course: "", marks: "" });
      fetchStudents();
    } catch (err) {
      alert("Error adding student (Admin only)");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Students</h2>

      <form onSubmit={addStudent}>
        <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Roll No" value={form.rollNumber} onChange={(e) => setForm({ ...form, rollNumber: e.target.value })} />
        <input placeholder="Course" value={form.course} onChange={(e) => setForm({ ...form, course: e.target.value })} />
        <input placeholder="Marks" type="number" value={form.marks} onChange={(e) => setForm({ ...form, marks: e.target.value })} />
        <button type="submit">Add Student</button>
      </form>

      <ul>
        {students.map((s) => (
          <li key={s._id}>
            {s.name} ({s.rollNumber}) - {s.course} : {s.marks}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
