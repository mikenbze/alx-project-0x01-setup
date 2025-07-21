// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState<Omit<UserData, "id">>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nestedFields = name.split(".");
    if (nestedFields.length > 1) {
      setFormData((prev: any) => {
        const updated = { ...prev };
        let current = updated;
        for (let i = 0; i < nestedFields.length - 1; i++) {
          current = current[nestedFields[i]];
        }
        current[nestedFields[nestedFields.length - 1]] = value;
        return updated;
      });
    } else {
      setFormData((prev: any) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const newUser: UserData = { ...formData, id: Date.now() };
    onSubmit(newUser);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <div className="grid grid-cols-2 gap-4">
          <input name="name" placeholder="Name" onChange={handleChange} className="border p-2" />
          <input name="username" placeholder="Username" onChange={handleChange} className="border p-2" />
          <input name="email" placeholder="Email" onChange={handleChange} className="border p-2" />
          <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2" />
          <input name="website" placeholder="Website" onChange={handleChange} className="border p-2" />
          <input name="address.street" placeholder="Street" onChange={handleChange} className="border p-2" />
          <input name="address.city" placeholder="City" onChange={handleChange} className="border p-2" />
          <input name="company.name" placeholder="Company" onChange={handleChange} className="border p-2" />
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-400 rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
