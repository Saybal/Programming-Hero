const removeLawyer = (idToRemove) => {
    const stored = localStorage.getItem("Lawyer");
    if (stored) {
      const data = JSON.parse(stored);
      const updated = data.filter(id => id !== idToRemove);
      localStorage.setItem("Lawyer", JSON.stringify(updated));
    }
};
  
export { removeLawyer };