import { useEffect, useState } from "react";
import axios from "axios";
import CustomTable from "../../components/CustomTable";
import FullPageLoader from "../../components/FullPageLoader/FullPageLoader";
import { EXPENSE_COLUMNS } from "./Home.constants";
import "./Home.scss";
import AddExchanges from "../../components/AddExchanges";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch("https://instimanage.onrender.com/api/exchange/get")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const actions = {
    delete: (id) => {
      axios
        .delete(`https://instimanage.onrender.com/api/exchange/delete?id=${id}`)
        .then(() => {
          console.log(`Deleted Exchange ID: ${id}`);
          fetchData();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  };

  return (
    <section>
      {loading && <FullPageLoader />}
      <AddExchanges fetchData={fetchData} />
      <CustomTable
        actions={actions}
        data={data}
        className="tableWrapper"
        tableHeaderClassName="tableHeader"
        columns={EXPENSE_COLUMNS}
      />
    </section>
  );
}
