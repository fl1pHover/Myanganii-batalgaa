"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const router = useRouter()
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await fetch(`/api/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }).then((d) => {
        
        if(d.status == 201){
          router.push('/admin')
        }
        return d.json()
      });

    } catch (error) {
        console.error(error)
    }
  };
  return (
    <>
      <form onSubmit={submit} className="flex flex-col">
        <input type="text" name="username" className="border-solid border-2 " />
        <input
          type="password"
          name="password"
          className="border-solid border-2 "
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
