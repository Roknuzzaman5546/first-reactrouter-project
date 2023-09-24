const getItemtoLocalstorage = () =>{
    const localApplications = localStorage.getItem('job-application');
    if(localApplications){
        return JSON.parse(localApplications);
    }
    return [];
}

const saveLocalStorage = id =>{
    const storedLocalstorage = getItemtoLocalstorage();
    const exists = storedLocalstorage.find(jobid => jobid === id)
    if(!exists){
        storedLocalstorage.push(id)
        localStorage.setItem('job-application', JSON.stringify(storedLocalstorage));
    }
}

export {getItemtoLocalstorage, saveLocalStorage}
