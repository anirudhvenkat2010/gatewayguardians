import React from 'react';
import  './home.css';
import Header from './header.tsx';

const staffMembers = [
  {
    name: "Coach John Smith",
    role: "Head Coach - 18U",
    image: "/assets/staff/john-smith.jpg",
    bio: "Coach Smith has over 15 years of experience developing elite athletes and leading teams to national championships."
  },
  {
    name: "Coach Emily Davis",
    role: "Pitching Coordinator",
    image: "/assets/staff/emily-davis.jpg",
    bio: "Emily brings professional-level insights into pitching development and injury prevention."
  },
  {
    name: "Coach Mike Lee",
    role: "Strength & Conditioning",
    image: "/assets/staff/mike-lee.jpg",
    bio: "Mike focuses on athlete performance, mobility, and strength through customized training programs."
  }
];

export default function Staff() {
  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Meet Our Staff</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {staffMembers.map((staff, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow p-6 text-center hover:shadow-lg transition duration-300"
          >
            <img
              src={staff.image}
              alt={staff.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{staff.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{staff.role}</p>
            <p className="text-gray-700 text-sm">{staff.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}