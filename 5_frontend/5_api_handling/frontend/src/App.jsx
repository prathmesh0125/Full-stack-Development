import axios from "axios";
import customHook from "./hooks/CustomHook";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    const fetchdata = async () => {
      try {
        setloading(true);
        setError(false);
        const respone = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(respone.data);
        setData(respone.data);
        setloading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          log("request canceled", error.message);
          return;
        }
        setError(true);
        setloading(false);
      }
    };
    fetchdata();

    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <h1>data</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Loading...</h1>}
      {error && <h1>errrr...</h1>}

      {data.map((e) => {
        return (
          <div key={e.id}>
            <p>product name: {e.name}</p>
            <p> product price: {e.price}</p>
          </div>
        );
      })}

      <h2>Number of products {data.length}</h2>
    </>
  );
}

export default App;
