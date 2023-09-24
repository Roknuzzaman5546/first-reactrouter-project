import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div>
            <div className=" border-2 border-sky-400 rounded-lg p-10 mt-5 space-y-2 shadow-xl">
                <img src={logo} alt="" />
                <h2>{job_title}</h2>
                <h3>{company_name}</h3>
                <div>
                    <button className="border border-sky-200 inline-block px-1 my-2 mr-2">{job_type}</button>
                    <button className=" border border-sky-200 inline-block px-1 my-2">{remote_or_onsite}</button>
                </div>
                <h2 className="flex items-center gap-2">
                    <p className="flex items-center gap-1"><CiLocationOn></CiLocationOn>{location}</p>
                    <p className="flex items-center"><AiOutlineDollar></AiOutlineDollar> {salary}</p>
                </h2>
                <NavLink to={`/job/${id}`}><button className="btn btn-primary">view details</button></NavLink>
            </div>
        </div>
    );
};

export default Job;