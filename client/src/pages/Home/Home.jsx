import CustomTable from "../../components/CustomTable";
import { useFetch } from "../../hooks";
import { EXPENSE_COLUMNS } from "./Home.constants";
import "./Home.scss";

export default function Home() {
  const { data, error, loading } = useFetch(
    "https://instimanage.onrender.com/api/exchange/get"
  );
  console.log({ data, error, loading });
  return (
    <section>
      <CustomTable
        data={data}
        className="tableWrapper"
        tableHeaderClassName="tableHeader"
        columns={EXPENSE_COLUMNS}
      />
    </section>
  );
}
