"use client";
import Loading from "@/components/loading";
import Container from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/Title";
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
  // return <>{JSON.stringify(data)}</>;
  // console.log(data);
  return (
    <section>
      {data == undefined ? (
        // <Loading />
        <Container className="flex flex-col gap-10">
          <div className="flex justify-between">
            <div className="animate-pulse h-[50px] w-[50%] bg-gray-1"></div>
            <div className="animate-pulse h-[25px] w-[25%] bg-gray-1 mt-auto"></div>
          </div>
          <div className="animate-pulse h-[300px] w-full bg-gray-1"></div>
        </Container>
      ) : (
        <>
          <Container className="sectionPadding_top"></Container>
          {/* Cover tom zurag bn gvl Container aasa gadna bhar bn */}

          {data?.image == "" ? (
            <div className="h-[200px] w-full bg-gray-0 grid place-items-center">
              Зураг байхгүй байна
            </div>
          ) : (
            <img src={data?.image} className="banner_container" />
          )}

          <Container className={"flex flex-col sectionPadding_top"}>
            <PageHeader
              header={data?.title}
              currentPage={`Projects / ${data?.title.slice(0, 10)}`}
            />
            <div className="flex flex-col gap-6 py-20">
              <h1 className="smallTitle">{data?.title}</h1>
              <p className="p">{data?.description}</p>
              <img
                src={data?.image}
                alt="Project Images"
                className="object-cover aspect-2/1"
              />
            </div>
          </Container>
        </>
      )}
    </section>
  );
}
