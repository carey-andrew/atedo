const isDarkMode = () => {
  if (document.documentElement.classList.contains("dark")) {
    return true;
  } 
  return false;
};

export default isDarkMode;
