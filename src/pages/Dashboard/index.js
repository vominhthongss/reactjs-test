import { Route, Routes } from "react-router-dom";
import ListProduct from "./ListProduct";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListProduct />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
