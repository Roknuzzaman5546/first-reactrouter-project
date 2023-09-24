import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [datalength, setdatalength] = useState(4);
    
    useEffect(() =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])
    return (
        <div className="my-4">
            <div className=" text-center">
                <h2 className=" text-4xl font-bold">Featured Jobs</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
                {
                    jobs.slice(0, datalength).map(job => <Job
                        key={job.id}
                        job={job}
                        ></Job>)
                }
            </div>
            <div className={datalength === jobs.length ? 'hidden' : "flex justify-center my-5"}>
            <button onClick={() => setdatalength(jobs.length)}
            className="btn btn-primary" >Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;