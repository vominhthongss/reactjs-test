import { useSelector } from "react-redux";

function Home() {
  const user = useSelector((state) => state.app.user);
  return (
    <div>
      <span>{user.email}</span>
      <span>Home</span>
    </div>
  );
}

export default Home;
