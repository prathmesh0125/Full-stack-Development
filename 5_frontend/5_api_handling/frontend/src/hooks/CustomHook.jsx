import { useEffect, useState } from "react";
import axios from "axios";
const CustomHook = (userpath) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      try {
        setloading(true);
        setError(false);
        const respone = await axios.get(userpath);
        console.log(respone.data);
        setData(respone.data);
        setloading(false);
      } catch (error) {
        setError(true);
        setloading(false);
      }
    };
    fetchdata();
  }, []);
  return [loading, data, error, search, setSearch];
};

export default CustomHook;
