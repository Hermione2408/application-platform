import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import InfiniteScroll from 'react-infinite-scroll-component';
import JobCard from './jobCard/jobCard';
import { fetchJobsStart, fetchJobsSuccess } from "../utils/jobSlice";
import { Box } from '@material-ui/core';
import NoJobsImage from "../assets/img/noJobs.png"
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
    console.log(filters,"filter")
    const filtered = jobs.filter(job => {
      const minExp = job.minExp || 0;
      const maxExp = job.maxExp || 'Unlimited';
      const experienceRange = `${minExp} - ${maxExp}`;
    
      return (
        (!filters.minExperience || experienceRange === filters.minExperience) &&
        (!filters.companyName || job.companyName.toLowerCase().includes(filters.companyName.toLowerCase())) &&
        (filters.location.length === 0 || filters.location.includes(job.location.toLowerCase())) &&
        (filters.role.length === 0 || filters.role.includes(job.jobRole.toLowerCase())) &&
        (filters.minBasePay === '' || job.minJdSalary >= filters.minBasePay.replace('L', ''))
      );
    });
    setFilteredJobs(filtered);
  };
  

  console.log(filteredJobs, "Filtered job list");
  return (
    <>
    {false ?(<InfiniteScroll
      dataLength={filteredJobs.length}
      next={fetchJobs}
      hasMore={hasMore}
      loader={<div>Loading...</div>}
    >
      <Grid container spacing={3}>
        {filteredJobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <JobCard {...job} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>):(
      <Box className='noJobs'>
        <img src={NoJobsImage} alt="No jobs" width={150} height={150} />
        <span>No jobs available for this category at the moment</span>
      </Box>
    )}
    </>
  );
};

export default Joblisting;
