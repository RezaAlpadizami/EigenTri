import React, { FC } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

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

interface CardItemProps {
  item: Item;
}

const CardItem: FC<CardItemProps> = ({ item }) => {
  const websiteUrl = item?.url;
  const website = websiteUrl?.split("https://").pop()?.split("/")[0];

  const date = item.publishedAt;
  const formatDate = date.replace("T", " ");
  const formatTime = formatDate.replace("Z", "");

  return (
    <Link to={item.url} className="w-[22.5em] overflow-hidden">
      <Card
        hoverable
        style={{ width: 300, height: 500 }}
        className="relative"
        cover={
          <img
            alt={item.title}
            src={item.urlToImage}
            className="w-[200px] h-[160px]"
          />
        }
      >
        <div className="flex flex-col justify-between px-[0.5em] flex-grow gap-4 items-start ">
          <div className="flex justify-start items-center gap-2">
            <img
              src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16"`}
              alt={item.source.id}
            />
            <span>{item.source.name}</span>
          </div>
          <div className="font-bold text-lg">
            <h2>{item.title}</h2>
          </div>
          <p className="article-description leading-relaxed text-xs text-[#555] h-16 overflow-hidden">
            {item.description}
          </p>
          <div className="absolute bottom-4">
            <small>
              <b className="mr-1">Published At:</b>
              {formatTime}
            </small>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CardItem;
