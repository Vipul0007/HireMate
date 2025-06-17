import { useEffect, useState } from "react";
import { axiosInstance } from "../services/fetchJobs";

export default function useJobs(){
  const [jobList, setJobList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
      axiosInstance.get("/products")
        .then((res) => {
          setJobList(res.data.products);
          setLoader(false);
        })
        .catch((err) => {
          console.error(err);
          setLoader(false);
          setError('Something went wrong')
        });
    }, []);
    return { jobList, loader, error };
}