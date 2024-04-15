"use client";
import Loading from "@/components/loading";
import Container from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/Title";
import mergeNames from "@/util/mergeNames";
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
  console.log(data?.image.length);
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
          <Container className="sectionPadding_top">
            <PageHeader
              header={data?.title}
              currentPage={`Projects / ${data?.title.slice(0, 10)}`}
            />
          </Container>
          {/* Cover tom zurag bn gvl Container aasa gadna bhar bn */}

          <div
            className={mergeNames(
              " bg-gray-0 banner_container",
              // "aspect-2/1"
              "h-[40vh]"
            )}
          >
            {data?.image.length == 0 ? (
              <div className="mx-auto my-auto">Зураг байхгүй байна</div>
            ) : (
              <img
                src={`/api/upload/${data?.image}`}
                className="flex items-center object-cover w-full h-full text-center justify-evenly"
                alt="Зураг байхгүй байна"
              />
            )}
          </div>
          <Container className={"flex flex-col"}>
            <div className="flex flex-col gap-6">
              <h1 className="smallTitle">{data?.title}</h1>
              <p className="p">{data?.description}</p>
              <img
                src={`/api/upload/${data?.image}`}
                alt="Project Images"
                className="object-cover border aspect-2/1 border-1 border-gray-1"
              />
            </div>
          </Container>
        </>
      )}
    </section>
  );
}
