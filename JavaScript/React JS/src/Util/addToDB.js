const getStoredlawyer = () => {
    
    const lawyer_str = localStorage.getItem("Lawyer");

    if (lawyer_str)
    {
        const lawyer_data = JSON.parse(lawyer_str);
        return lawyer_data;
    }
    else
    {
        return [];
    }
}

const addToStoreDB = (id) => {

    const stored_lawyer_data = getStoredlawyer();

    if (stored_lawyer_data.includes(id))
    {
        alert("jkasdf");
    }
    else
    {
        stored_lawyer_data.push(id);
        const data = JSON.stringify(stored_lawyer_data);
        localStorage.setItem("Lawyer", data);
    }
    
}

export { addToStoreDB ,getStoredlawyer };