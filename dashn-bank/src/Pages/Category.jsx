import { Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <h1>Category Page</h1>
      <Outlet />
    </div>
  );
};

export default Category;
