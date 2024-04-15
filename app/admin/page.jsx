"use client";

import { useEffect, useState } from "react";
import { ProjectForm } from "../../components/form/project";
import { DefaultModal } from "../../components/modal";
import { useDisclosure } from "@mantine/hooks";
import { Button, Group, Table } from "@mantine/core";
import { IoPencil } from "react-icons/io5";
import { RiFolderOpenFill } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";
import { project } from "@/constants";

export default function AdminPage() {
  const [projects, setProjects] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedProject, setSelectedProject] = useState();
  const [edit, setEdit] = useState(null);
  const [loading, setLoading] = useState(false);
  const deleteProject = async (index) => {
    try {
      await fetch(`/api/project/${projects[index]._id}`, {
        method: "DELETE",
      })
        .then((d) => d.json())
        .then((d) => {
          console.log(d)
          getProjects()
        });
    } catch (error) {}
  };
  const submit = async (body) => {
    setLoading(true);
    const data = new FormData();
    body.image.forEach(async (image) => {
      data.append("file", image);
      data.append("fileName", image.name);
    });

    try {
      let uploadedImages = await fetch("/api/upload", {
        method: "POST",
        body: data,
      }).then((d) => d.json());

      await fetch(
        `${
          edit != undefined
            ? `/api/project/${projects[edit]._id}`
            : `/api/project`
        }`,
        {
          method: edit != undefined ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            date: body.date,
            title: body.title,
            description: body.description,
            type: body.type,
            image: uploadedImages,
          }),
        }
      )
        .then((d) => {
          return d.json();
        })
        .then((d) => console.log("added project", d));

      edit != undefined ? setEdit(undefined) : close();
      getProjects();
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const getProjects = async () => {
    try {
      await fetch(`/api/project`).then(async (d) => {
        if (d.status == 200) {
          let data = await d.json();

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
                  <Table.Td>{i + 1}</Table.Td>
                  <Table.Td>{project.title.substring(0, 20)}</Table.Td>
                  <Table.Td>{project.type}</Table.Td>
                  <Table.Td>{project.description.substring(0, 20)}</Table.Td>
                  <Table.Td>
                    <Group>
                      <Button
                        onClick={() => {
                          setSelectedProject(project);
                        }}
                      >
                        <RiFolderOpenFill />
                      </Button>
                      <Button bg={"yellow"} onClick={() => setEdit(i)}>
                        <IoPencil />
                      </Button>
                      <Button bg={"red"} onClick={() => deleteProject(i)}>
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
      <DefaultModal
        close={() => {
          setSelectedProject(undefined);
        }}
        opened={selectedProject != undefined}
        title="Дэлгэрэнгүй"
      >
        <section>
          <>
            {/* Cover tom zurag bn gvl Container aasa gadna bhar bn */}
            <p>{selectedProject?.title}</p>
            <p>{selectedProject?.description}</p>
            <p>{selectedProject?.type}</p>
            <p>{selectedProject?.date}</p>
            {selectedProject?.image?.map((img, i) => {
              return (
                <img
                  width={200}
                  height={200}
                  key={i}
                  src={`/api/upload/${img}`}
                />
              );
            })}
          </>
        </section>
      </DefaultModal>
      <DefaultModal
        close={async () => {
          close();
          if (edit != undefined) {
            setEdit(undefined);
          }
   
        }}
        opened={edit != undefined ? true : opened}
        title="Бүртгэл"
      >
        <ProjectForm
          submit={(e) => submit(e)}
          data={edit != null ? projects[edit] : undefined}
          loading={loading}
        />
      </DefaultModal>
    </>
  );
}
