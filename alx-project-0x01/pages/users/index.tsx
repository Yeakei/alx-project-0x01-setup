import PostCard from "@/components/common/PostCard";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import {  UserData, UserProps } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<UserProps[]> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);
    
    
      const handleAddUser = (newUser: UserData) => {
        setUser({ ...newUser, id: posts.length + 1 });
      };
    
  
  console.log(posts)
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">User Content</h1>
        <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add user</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts.map(({ title, body, userId, id }: UserProps, key: number) => (
              <UserCard title={title} body={body} userId={userId} id={id} key={key} />
            ))
          }
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default Users;