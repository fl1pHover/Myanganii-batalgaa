"use client";

import { useRouter } from "next/navigation";


export default function AuthPage() {
    const router = useRouter()
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    const email = formData.get("email");
    const phone = formData.get("phone");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          phone: phone,
          email: email,
        }),
      }).then((d) => {
        console.log(d);
        if(d.status == 201) {
            router.push('/login')
        }
        return d.json();
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <form onSubmit={submit} className="flex flex-col">
        <input
          type="text"
          name="username"
          className="border-solid border-2 "
          placeholder="Username"
        />
        <input
          type="number"
          name="phone"
          className="border-solid border-2 "
          placeholder="Phone"
        />
        <input
          type="text"
          name="email"
          className="border-solid border-2 "
          placeholder="Email"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border-solid border-2 "
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
