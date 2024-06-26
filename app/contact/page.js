"use client";
import Container from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/Title";
import { contactData } from "@/constants";
import React, { useState } from "react";
import { getSheetData } from "../api/sheet/route";

const Contact = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleOnGetSheetDataClick = async () => {
    await getSheetData(payload.name, payload.email, payload.message);
  };
  return (
    <section className="flex flex-col sectionPadding_top">
      <Container className="flex flex-col gap-20 md:gap-28">
        <div className="flex items-center justify-between w-full ">
          <PageHeader
            header="Dream Comes True With Our Talented Architect"
            currentPage="contact"
          />
        </div>
        <div className="footer_grid">
          <h1 className="largeTitle">Contact Us</h1>
          {contactData.map((c) => (
            <div key={c.id} className="flex flex-col ">
              {/* <p className="text-[35px] text-gray-3 ">{c.icon}</p> */}
              <h1 className="flex items-center gap-6 mt-0 mb-6 smallTitle">
                <span className="text-[35px] text-gray-3">{c.icon}</span>{" "}
                {c.title}
              </h1>
              <p className="mb-5 p">{c.info}</p>
              {c.additional}
            </div>
          ))}
        </div>
        <div className="footer_grid">
          <h1 className="largeTitle">Drop A Mail</h1>

          <form
            action=""
            onSubmit={handleOnGetSheetDataClick}
            className="grid grid-cols-2 col-span-2 gap-8"
          >
            <input
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              required
              placeholder="Name"
              className="col-span-1 footer_input p"
            />
            <input
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
              placeholder="Email"
              required
              className="col-span-1 footer_input p"
            />
            <textarea
              required
              row="10"
              onChange={(e) =>
                setPayload((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Type you message"
              className="col-span-2 footer_input p min-h-[100px]"
            />
            <button
              type="submit"
              className="btn_green w-[200px] p uppercase flex-nowrap"
            >
              Send message
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
