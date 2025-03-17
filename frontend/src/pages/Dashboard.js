import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");  // Redirect to login if no token
      return;
    }

    axios
      .get("http://localhost:5000/api/students", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setStudents(res.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, [navigate]);

  const addStudent = async () => {
    const name = prompt("Enter Student Name:");
    const age = prompt("Enter Student Age:");
    
    if (!name || !age) return;
  
    try {
      const res = await axios.post("http://localhost:5000/api/students", { name, age }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setStudents([...students, res.data]);  // Update UI
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };
  
  const deleteStudent = async (id) => {
    if (!window.confirm("Are you sure?")) return;
  
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setStudents(students.filter((student) => student.id !== id));  // Update UI
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };
  
  const editStudent = async (id, currentName, currentAge) => {
    const newName = prompt("Enter new name:", currentName);
    const newAge = prompt("Enter new age:", currentAge);
  
    if (!newName || !newAge) return;
  
    try {
      const res = await axios.put(`http://localhost:5000/api/students/${id}`, 
        { name: newName, age: newAge }, 
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
  
      // Update UI
      setStudents(students.map(student => 
        student.id === id ? res.data : student
      ));
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/students/${id}/status`,
        {},
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );
  
      // Update UI
      setStudents(students.map(student => 
        student.id === id ? { ...student, status: res.data.status } : student
      ));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };  

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Student Management</h2>
      <button onClick={() => { localStorage.removeItem("token"); navigate("/"); }}>Logout</button>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="text-center">
              <td className="border p-2">{student.id}</td>
              <td className="border p-2">{student.name}</td>
              <td className="border p-2">{student.age}</td>
              <td className="border p-2">{student.status}</td>
              <td className="border p-2">
                <button 
                onClick={() => toggleStatus(student.id, student.status)}
                className={`px-2 py-1 rounded ${
                    student.status === "Active" ? "bg-green-500" : "bg-gray-500"
                } text-white`}
                >
                {student.status}
                </button>
            </td>
              <td>
                <button 
                onClick={() => editStudent(student.id, student.name, student.age)}
                className="bg-blue-500 text-white px-2 py-1 rounded mx-1"
                >
                Edit
                </button>
                <button 
                onClick={() => deleteStudent(student.id)}
                className="bg-red-500 text-white px-2 py-1 rounded mx-1"
                >
                Delete
                </button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
