import { useEffect, useState } from "react";
import { axiosInstance } from "../services/fetchJobs";
import JobCard from "./JobCard";

export default function JobsList() {
  const [jobList, setJobList] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((res) => {
        setJobList(res.data.products);
        setLoader(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // console.log(jobList);

  return (
    <>
      {loader && <div>Loading...</div>}
      {!loader && (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobList.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
      {/* <h1>Hello</h1> */}
    </>
  );
}
