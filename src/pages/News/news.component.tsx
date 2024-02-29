import React, { useState, useEffect, useCallback, FC } from "react";
import { Row } from "antd";
import CardGrid from "../../components/CardGrid/card-grid.component";
import { api } from "../../services/api";
import LoadingCustom from "../../components/LoadingCustom/loading-custom.component";
import MenuHeader from "../../components/MenuHeader/menu-header.component";

// Define the type for article data
interface Article {
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

const ListNews: FC = () => {
  const [dataArticles, setDataArticles] = useState<Article[]>([]);
  const [category, setCategory] = useState<string>("general");
  const [active, setActive] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = useCallback(async () => {
    try {
      const response = await api.get(
        `top-headlines?country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
      );

      const data: { articles: Article[] } = await response.data;

      setDataArticles(data.articles);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData, category]); // Ensure `category` is included as a dependency

  return (
    <div>
      <MenuHeader
        active={active}
        setActive={setActive}
        setCategory={setCategory}
      />
      <div className="px-11">
        <h1>
          See Top News - <span>Highlight</span>
        </h1>
      </div>
      <div>
        {isLoading ? <LoadingCustom /> : <CardGrid items={dataArticles} />}
      </div>
    </div>
  );
};

export default ListNews;
