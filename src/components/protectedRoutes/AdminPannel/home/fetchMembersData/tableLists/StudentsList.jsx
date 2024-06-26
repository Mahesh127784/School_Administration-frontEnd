import React from "react";
import DeleteUser from "./deleteUser/DeleteUser";

function StudentsList({ members, deleteUser, updateUser }) {
  return (
    <div className="lg:w-[800px] mx-5 px-2 md:px-4 mt-8 text-white inline">
      <h2 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-blue-700">
        Total Students List
      </h2>
      <table className="min-w-full bg-gray-500 border border-gray-300 text-white">
        <thead className="text-[12px] md:text-base ">
          <tr>
            <th className="p-2 border-b ">Name</th>
            <th className="p-2 border-b ">Students ID</th>
            <th className="pp-2 border-b ">Date of Birth</th>
            <th className="p-2 border-b ">Contact (Parents)</th>
            <th className="p-2 border-b ">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center text-[12px] lg:text-base">
          {members.map((member) => (
            <tr key={member._id}>
              <td className="p-2 border-b">{member.studentName}</td>
              <td className="p-2 border-b">{member.studentId}</td>

              <td className="p-2 border-b">{member.DOB.slice(0, 10)}</td>

              <td className="p-2 border-b">{member.guardianPhone}</td>

              <td className="text-[13px] md:text-base lg:text-[18px]  p-2 border-b">
                <i
                  onClick={() => updateUser(member)}
                  className="fa-solid fa-user-pen mr-2 text-green-300 cursor-pointer hover:transform hover:scale-125 transition-all duration-300 ease-in-out "
                ></i>
                <DeleteUser deleteUser={deleteUser} member={member} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentsList;
