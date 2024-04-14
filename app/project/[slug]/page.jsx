"use client";
import { useEffect, useState } from "react";

export default function DynamicProjectPage({ params }) {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      let res = await fetch(`/api/project/${params.slug}`).then((d) =>
        d.json()
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params.slug) {
      getData();
    }
  }, [params.slug]);
  return <>{JSON.stringify(data)}</>;
}
