import React from "react";
import Container from "../components/ui/Container";
import { PageHeader } from "../components/ui/Title";

const NotFound = () => {
  return (
    <Container className="flex flex-col gap-20 pb-10 sectionPadding_top">
      <PageHeader
        header="Dream comes true with our talented architect"
        currentPage="404 Error"
      />
      <div className="inline-flex flex-col gap-10 text-center">
        <div className="background_header">404</div>
        <h1 className="sectionTitle">Хуудас олдсонгүй</h1>
        <div>
          <a href="/" className="btn_green p">
            Нүүр хуудас руу буцах
          </a>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
