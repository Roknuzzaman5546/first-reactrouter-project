
const Appliyejjobdetail = ({job}) => {
    const {logo, job_title, remote_or_onsite} = job
    return (
        <div>
            <img src={logo} alt="" />
            <h2>{job_title}</h2>
            <h3>Job type {remote_or_onsite}</h3>
        </div>
    );
};

export default Appliyejjobdetail;