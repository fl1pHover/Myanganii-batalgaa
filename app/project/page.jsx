"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ProjectPage() {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    try {
      await fetch(`/api/project`).then(async (d) => {
        if (d.status == 200) {
          let data = await d.json();
          console.log(data);
          setProjects(data.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <>
      {projects?.map((project, i) => {
        return (
          <div key={i}>
            <div> {JSON.stringify(project)}</div>
            <Link href={`/project/${project._id}`}>oroh</Link>
          </div>
        );
      })}
    </>
  );
}
