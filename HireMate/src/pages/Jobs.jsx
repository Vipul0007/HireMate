import { useEffect, useState } from "react";
import { axiosInstance } from "../services/fetchJobs";
import JobCard from "./JobCard";
import useJobs from "../hooks/useJobs";

export default function JobsList() {
  const { jobList, loader, error } = useJobs();
  const [filterJobs, setFilterJobs] = useState([]);
  const [query, setQuery] = useState("");

  // const filterJobs = jobList.filter((item)=>
  //   item.title.toLowerCase().includes(query.toLowerCase())
  // )

  useEffect(() => {
    setFilterJobs(() =>
      jobList.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [filterJobs]);

  return (
    <>
      {loader && <div>Loading...</div>}
      {!loader && (
        <>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search job title..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-2 border border-black border-solid rounded my-2 w-1/2"
            />
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterJobs
              ? filterJobs.map((job) => <JobCard key={job.id} job={job} />)
              : jobList.map((job) => <JobCard key={job.id} job={job} />)}
          </div>
        </>
      )}
      {error && <div className="text-red-500">{error}</div>}
      {/* <h1>Hello</h1> */}
    </>
  );
}
