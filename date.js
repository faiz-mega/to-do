exports.getDate = () => {
    const gDate = new Date();
  
    const options = {
      year: "numeric",
      day: "numeric",
      month: "long",
    };
  
    const day = gDate.toLocaleDateString("en-US", options);
  
    return day;
};
