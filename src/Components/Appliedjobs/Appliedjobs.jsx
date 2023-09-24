import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemtoLocalstorage } from "../../Localstorage/Localstorage";
import Appliyejjobdetail from "../Applijobdetails/Appliyejjobdetail";

const Appliedjobs = () => {
    const jobs = useLoaderData();
    const [jobapplied, setjobapplied] = useState([]);
    const [jobfilter, setfilter] = useState([]);

    const handlejobfilter = filter =>{
        if(filter === 'all'){
            setfilter(jobapplied)
        }
        else if(filter === 'remote'){
            const remotjobs = jobapplied.filter(job => job.remote_or_onsite === 'Remote')
            setfilter(remotjobs)
        }
        else if(filter === 'onsite'){
            const onsitejobs = jobapplied.filter(job => job.remote_or_onsite === 'Onsite')
            setfilter(onsitejobs)
        }
    }
    useEffect(() => {
        const savelocalal = getItemtoLocalstorage();
        if (jobs.length > 0) {
            // const appliedjobs = jobs.filter(job => savelocalal.includes(job.id))
            const appliedjobs = [];
            for (const id in savelocalal) {
                const newid = jobs.find(job => job.id == id)
                if (newid) {
                    appliedjobs.push(newid)
                }
            }
            setjobapplied(appliedjobs);
            setfilter(appliedjobs);
        }
    }, [])
    return (
        <div>
            <h2>Applied jobs {jobapplied.length}</h2>
            <details className="dropdown mb-32">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handlejobfilter('all')}><a>All</a></li>
                    <li onClick={() => handlejobfilter('remote')}><a>Remot</a></li>
                    <li onClick={() => handlejobfilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <div>
                {
                    jobfilter.map(job => <Appliyejjobdetail key={job.id} job={job}></Appliyejjobdetail>)
                }
            </div>
        </div>
    );
};

export default Appliedjobs;