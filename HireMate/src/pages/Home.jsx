import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../services/FetchJobs";

const Home = () => {
  const navigate = useNavigate();
  const [allUser, setAllUser] = useState([]);

  // const getUser = async () => {
  //   const reponse = await axiosInstance.get("/auth/me");
  //   console.log("Response", reponse);
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hi I am from Home.jsx</h1>
      <div className="flex items-center gap-3 my-4">
        <p>To navigate to job section press --{">"}</p>{" "}
        <button
          onClick={() => navigate("/jobs")}
          className="border border-black rounded-md bg-[#f0f0f0] p-1"
        >
          Click Me
        </button>
      </div>
    </>
  );
};

export default Home;
