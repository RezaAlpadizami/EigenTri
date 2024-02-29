import React, { FC } from "react";
import { Row } from "antd";

import CardItem from "../Card/card.component";

interface Item {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  description: string;
  source: {
    id: string;
    name: string;
  };
}

interface CardGridProps {
  items: Item[];
}

const CardGrid: FC<CardGridProps> = ({ items }) => {
  return (
    <>
      {items.length > 0 ? (
        <div className="flex items-center justify-start gap-x-[0.2rem] gap-y-[3.9rem] mx-10  flex-wrap mt-10">
          {items.map((item, i) => (
            <CardItem key={i} item={item} />
          ))}
        </div>
      ) : (
        <Row justify={"center"} align={"middle"} className="text-empty">
          <h2>{"Film tidak ditemukan :("}</h2>
        </Row>
      )}
    </>
  );
};

export default CardGrid;
