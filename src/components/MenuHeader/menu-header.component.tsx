import React, { FC } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo-news.png";

interface MenuItem {
  id: number;
  name: string;
  value: string;
}

interface MenuHeaderProps {
  active: number;
  setActive: (id: number) => void;
  setCategory: (value: string) => void;
}

const MenuHeader: FC<MenuHeaderProps> = ({
  active,
  setActive,
  setCategory,
}) => {
  const links: MenuItem[] = [
    {
      id: 1,
      name: "General",
      value: "general",
    },
    {
      id: 2,
      name: "Business",
      value: "business",
    },
    {
      id: 3,
      name: "Entertainment",
      value: "entertainment",
    },
    {
      id: 4,
      name: "Science",
      value: "health",
    },
    {
      id: 5,
      name: "Health",
      value: "science",
    },
    {
      id: 6,
      name: "Sports",
      value: "sports",
    },
    {
      id: 7,
      name: "Technology",
      value: "technology",
    },
  ];

  const handleOnClick = (id: number, value: string) => {
    setActive(id);
    setCategory(value);
  };

  return (
    <header className="flex items-center justify-between px-8 mt-6 mb-12">
      <Link to={"/"}>
        <img src={logo} alt="Logo" className="w-20" />
      </Link>

      <nav className="flex items-center justify-between">
        <ul className="flex gap-20">
          {links.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.id ? "text-yellow-500" : "text-gray-300"
              } 
                hover:text-yellow-500 transition duration-300 ease-in cursor-pointer`}
              onClick={() => handleOnClick(link.id, link.value)}
            >
              {link.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MenuHeader;
