// src/dateUtils.js

// Function to format a date into a readable string
const formatDate = (date, format = 'YYYY-MM-DD') => {
    const d = new Date(date);
    const day = (`0${d.getDate()}`).slice(-2);
    const month = (`0${d.getMonth() + 1}`).slice(-2);
    const year = d.getFullYear();
  
    if (format === 'YYYY-MM-DD') return `${year}-${month}-${day}`;
    if (format === 'DD-MM-YYYY') return `${day}-${month}-${year}`;
    return d.toString();
  };
  
  // Function to add days to a date
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };
  
  // Function to calculate the difference in days between two dates
  const differenceInDays = (date1, date2) => {
    const diffTime = Math.abs(new Date(date2) - new Date(date1));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };
  
  module.exports = {
    formatDate,
    addDays,
    differenceInDays,
  };
  