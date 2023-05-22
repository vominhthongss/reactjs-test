import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../store/actions/appSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

function AddProduct() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [image, setImage] = useState("");
  const handleAdd = (product) => {
    product.image = image;
    dispatch(addProduct(product));
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
      <Link to="/dashboard">Quay về</Link>
      <div>Thêm sản phẩm</div>
      <form onSubmit={handleSubmit(handleAdd)}>
        <div>
          Id: <input {...register("id")} type="text" />
          Name: <input {...register("name")} type="text" />
          Year:
          <input {...register("year")} type="text" />
          Price:
          <input {...register("price")} type="text" />
          Image:
          <input hidden {...register("image")} type="text" />
          <img src={image ? image : ""} alt="" />
          <input
            type="file"
            onChange={(e) => {
              handleImageUpload(e);
            }}
          />
          Description:
          <input {...register("description")} type="text" />
          <button>Thêm</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
