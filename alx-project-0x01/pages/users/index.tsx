import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const UsersPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <p>List of users will be displayed here.</p>
      </main>
      <Footer />
    </>
  );
};

export default UsersPage;
