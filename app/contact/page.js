import Container from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/Title";
import { contactData } from "@/constants";
import React from "react";

const Contact = () => {
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
              <p className="text-[35px] text-gray-3 ">{c.icon}</p>
              <h1 className="mt-8 mb-6 smallTitle">{c.title}</h1>
              <p className="mb-5 p">{c.info}</p>
              {c.additional}
            </div>
          ))}
        </div>
        <div className="footer_grid">
          <h1 className="largeTitle">Drop A Mail</h1>

          <form action="" className="grid grid-cols-2 col-span-2 gap-8">
            <input
              type="text"
              placeholder="Name"
              className="col-span-1 footer_input p"
            />
            <input
              type="email"
              placeholder="Email"
              className="col-span-1 footer_input p"
            />
            <textarea
              row="10"
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
