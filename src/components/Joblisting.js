import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsStart, fetchJobsSuccess } from "../utils/jobSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@material-ui/core/Grid";
import JobCard from "./jobCard/jobCard";
const Joblisting = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { jobs, hasMore } = useSelector((state) => state.job);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    fetchJobs();
  }, []);
  const fetchJobs = async () => {
    console.log("hiiiii")
    setLoading(true);
    const offset = jobs.length;
    const limit = 10;

    try {
      const response = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ limit, offset }),
        }
      );
      const data = await response.json();
      dispatch(fetchJobsSuccess({ jobs: data.jdList }));
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };
  console.log(jobs, "joblist");
  return (
      <InfiniteScroll
        dataLength={jobs.length}
        next={fetchJobs}
        hasMore={true}
        //loader={<Loading />}
        
      >
        <Grid container spacing={3}>
          {jobs.map((job, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <JobCard {...job} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
  );
};

export default Joblisting;
