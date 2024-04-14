"use client";

import { useEffect, useState } from "react";
import { ProjectForm } from "../../components/form/project";
import { DefaultModal } from "../../components/modal";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Table } from "@mantine/core";
import { IoPencil } from "react-icons/io5";
import { RiFolderOpenFill } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";

export default function AdminPage() {
  const [projects, setProjects] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const submit = async (data) => {
    // e.preventDefault();
    console.log(data);
    // const data = new FormData();
    // const formData = new FormData(e.currentTarget);
    // const title = formData.get("title");
    // const description = formData.get("description");
    // const type = formData.get("type");
    // const date = formData.get("date");
    // const images = formData.getAll("images");
    // images.forEach(async (image) => {
    //   data.append("file", image);
    //   data.append("fileName", image.name);
    // });

    // try {
    //   let uploadedImages = await fetch("/api/upload", {
    //     method: "POST",
    //     body: data,
    //   }).then((d) => d.json());

    //   const res = await fetch(`/api/project`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       date: date,
    //       title: title,
    //       description: description,
    //       type: type,
    //       image: uploadedImages,
    //     }),
    //   }).then((d) => {
    //     return d.json();
    //   });
    //   console.log(res);
    // } catch (error) {
    //   console.error(error);
    // }
  };
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
      {projects?.length > 0 && (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Дугаар</Table.Th>
              <Table.Th>Гарчиг</Table.Th>
              <Table.Th>Төрөл</Table.Th>
              <Table.Th>Дэлгэрэнгүй</Table.Th>
              <Table.Th>Үйлдэл</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {projects?.map((project, i) => {
              return (
                <Table.Tr key={project._id}>
                  <Table.Td>{project._id}</Table.Td>
                  <Table.Td>{project.title.substring(0, 20)}</Table.Td>
                  <Table.Td>{(project.image ?? []).length}</Table.Td>
                  <Table.Td>{project.description.substring(0, 20)}</Table.Td>
                  <Table.Td>
                    <Group>
                      <Button>
                        <RiFolderOpenFill />
                      </Button>
                      <Button>
                        <IoPencil />
                      </Button>
                      <Button>
                        <MdOutlineDelete />
                      </Button>
                    </Group>
                  </Table.Td>
                </Table.Tr>
              );
            })}
          </Table.Tbody>
        </Table>
      )}

      <Button onClick={() => open()}>Нэмэх</Button>
      <DefaultModal close={close} opened={opened} title="Бүртгэл">
        <ProjectForm submit={(e) => submit(e)} />
      </DefaultModal>
    </>
  );
}
