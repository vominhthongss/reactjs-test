import { useForm } from "react-hook-form";
import { editProduct } from "../../../store/actions/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "./style.css";

function EditProduct() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const handleEdit = (product) => {
    product.image = image;
    const obj = {
      id: id,
      product: product,
    };
    dispatch(editProduct(obj));
  };
  const products = useSelector((state) => state.app.products);

  const product = products.find((x) => x.id.toString() === id.toString());
  const [image, setImage] = useState(product.image);
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
      <div className="edit-container">
        <form onSubmit={handleSubmit(handleEdit)}>
          <div className="edit-form">
            Id:
            <input
              defaultValue={product ? product.id : ""}
              {...register("id")}
              type="text"
            />
            Name:
            <input
              defaultValue={product ? product.name : ""}
              {...register("name")}
              type="text"
            />
            Year:
            <input
              defaultValue={product ? product.year : ""}
              {...register("year")}
              type="text"
            />
            Price:
            <input
              defaultValue={product ? product.price : ""}
              {...register("price")}
              type="text"
            />
            Image:
            <input
              hidden
              defaultValue={product ? product.image : ""}
              {...register("image")}
              type="text"
            />
            <img src={image ? image : ""} alt="" />
            <input
              type="file"
              onChange={(e) => {
                handleImageUpload(e);
              }}
            />
            Description:
            <input
              defaultValue={product ? product.description : ""}
              {...register("description")}
              type="text"
            />
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
