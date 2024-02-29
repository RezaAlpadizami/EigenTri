import React, { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import MenuHeader from "../MenuHeader/menu-header.component";

const PageLayout: FC = () => {
  const [active, setActive] = useState<number>(1);
  const [category, setCategory] = useState<string>("general");

  return (
    <>
      <MenuHeader
        active={active}
        setActive={setActive}
        setCategory={setCategory}
      />
      <div className="p-[2rem]">
        <Outlet />
      </div>
    </>
  );
};

export default PageLayout;
