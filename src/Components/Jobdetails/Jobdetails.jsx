import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveLocalStorage } from "../../Localstorage/Localstorage";

const Jobdetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const parsid = parseInt(id)
    const job = jobs.find(job => job.id === parsid)

    const ShowJobdetails = () =>{
        saveLocalStorage(parsid)
        toast('Data details show cartj') 

    }
    return (
        <div>
            <h2 className=" text-4xl font-bold text-center my-20">Job details of {job.id}</h2>
            <div className=" grid md:grid-cols-4 gap-4 mb-10">
                <div className=" border col-span-3 p-2 space-y-2 bg-gray-300 rounded-lg">
                    <h2><span className=" text-black font-bold">Job Description:</span>{job.job_description}</h2>
                    <h2><span className=" text-black font-bold">Job Responsibility:</span>{job.job_responsibility}</h2>
                    <h2><span className=" text-black font-bold">Educational requirements</span> <br />{job.educational_requirements}</h2>
                    <h2><span className="text-black font-bold">Experiences</span>{job.experiences}</h2>
                </div>
                <div className=" border p-2 bg-sky-200 rounded-lg space-y-2">
                    <h2 className=" text-2xl font-bold border-b border-black pb-2">Job details: </h2>
                    <h3><span className=" text-black font-bold">Salary: </span>{job.salary}</h3>
                    <h3 className="border-b border-black pb-2"><span className=" text-black font-bold">Job title: </span> {job.job_title}</h3>
                    <div>
                        <h2 className="text-2xl font-bold">Contact information</h2>
                        <h3><span className=" text-black font-bold">Phone: </span>{job.contact_information.phone}</h3>
                        <h3><span className=" text-black font-bold">Email: </span>{job.contact_information.email}</h3>
                        <h3><span className=" text-black font-bold">Address: </span>{job.contact_information.address}</h3>
                    </div>
                    <button 
                    onClick={ShowJobdetails}
                    className="btn btn-primary w-full">Appply now</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Jobdetails;