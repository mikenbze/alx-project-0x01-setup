
// src/pages/users/index.tsx
import React from "react";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </main>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
