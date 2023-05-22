import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/actions/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css";

function AddProduct() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const handleAdd = (product) => {
    product.image = image;
    dispatch(addProduct(product));
    alert("Thêm sản phẩm thành công");
    navigate("/dashboard");
  };
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      const newImage = "data:image/png;base64," + base64String;
      setImage(newImage);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div>
      <Link className="back" to="/dashboard">
        {"<<"}Quay về
      </Link>
      <div className="add-container">
        <form onSubmit={handleSubmit(handleAdd)}>
          <div className="add-form">
            Mã sản phẩm:{" "}
            <input className="input" {...register("id")} type="text" />
            Tên: <input className="input" {...register("name")} type="text" />
            Năm:
            <input className="input" {...register("year")} type="text" />
            Giá:
            <input className="input" {...register("price")} type="text" />
            Hình:
            <input hidden {...register("image")} type="text" />
            <img  className="image" src={image ? image : ""} alt="" />
            <input
              type="file"
              onChange={(e) => {
                handleImageUpload(e);
              }}
            />
            Mô tả:
            <input className="input" {...register("description")} type="text" />
            <button className="button">Thêm</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
