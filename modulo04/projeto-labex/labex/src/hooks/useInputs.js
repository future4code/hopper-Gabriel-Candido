import { useState } from "react";

const useInputs = () => {
  const [ data, setData ] = useState({
    id: '',
    person: '',
    text: '',
    profession: '',
    country: ''
  });

  const handleData = (e) => {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
        [e.target.name]: e.target.value
    }));
  };
  return { data, handleData };
};

export default useInputs;
