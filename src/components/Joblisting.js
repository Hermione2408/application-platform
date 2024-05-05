import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import InfiniteScroll from 'react-infinite-scroll-component';
import JobCard from './jobCard/jobCard';
import { fetchJobsStart, fetchJobsSuccess } from "../utils/jobSlice";

const Joblisting = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { jobs, hasMore, filters } = useSelector((state) => state.job);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    filterJobs();
  }, [jobs, filters]);

  const fetchJobs = async () => {
    console.log("Fetching jobs");
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
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterJobs = () => {
    const filtered = jobs.filter(job => {
      return (
        (filters.minExperience ? job.minExp >= filters.minExperience : true) &&
        (filters.companyName ? job.companyName.toLowerCase().includes(filters.companyName.toLowerCase()) : true) &&
        (filters.location.length > 0 ? filters.location.includes(job.location.toLowerCase()) : true) &&
        (filters.role.length > 0 ? filters.role.includes(job.jobRole.toLowerCase()) : true) &&
        (filters.noOfEmployees.length > 0 ? filters.noOfEmployees.includes(job.noOfEmployees) : true) &&
        (filters.techStack.length > 0 ? job.techStack.some(stack => filters.techStack.includes(stack.toLowerCase())) : true) &&
        (filters.minBasePay ? job.minJdSalary >= filters.minBasePay : true)
      );
    });
    setFilteredJobs(filtered);
  };

  console.log(filteredJobs, "Filtered job list");
  return (
    <InfiniteScroll
      dataLength={filteredJobs.length}
      next={fetchJobs}
      hasMore={hasMore}
      loader={<div>Loading...</div>}
    >
      <Grid container spacing={3}>
        {filteredJobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <JobCard {...job} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default Joblisting;
