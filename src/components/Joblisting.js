import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsStart,fetchJobsSuccess } from '../utils/jobSlice';
const Joblisting = () => {
    const dispatch = useDispatch()
    const [loading,setLoading] =useState(false)
    const { jobs, hasMore } = useSelector(state => state.job);
    const [errorMessage,setErrorMessage] =useState('')
    useEffect(()=>{
        fetchJobs()
    },[])
    const fetchJobs = async () => {
        setLoading(true)
        const offset = jobs.length;
        const limit = 10;
    
        try {
          const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ limit, offset })
          });
          const data = await response.json();
          dispatch(fetchJobsSuccess({ jobs: data.jdList }));
        } catch (error) {
          setErrorMessage(error.message)
        }
        finally{
            setLoading(false)
        }
      };
      console.log(jobs,"joblist")
  return (
    <div>Joblisting</div>

  )
}

export default Joblisting