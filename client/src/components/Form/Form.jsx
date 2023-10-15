import { useState } from "react";
import axios from "axios";
import "./Form.scss";

export default function ExchangeForm({ fetchData, setIsOpen }) {
  const [formData, setFormData] = useState({
    // accountBalance: 0,
    // closeDate: "",
    // exchanger: "",
    // lastModifiedDate: "",
    // openDate: "",
    // status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://instimanage.onrender.com/api/exchange/add`, formData)
      .then(() => {
          fetchData();
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => setIsOpen(false));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="accountBalance">Account Balance:</label>
        <input
          type="number"
          name="accountBalance"
          value={formData.accountBalance}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="closeDate">Close Date:</label>
        <input
          type="datetime-local"
          name="closeDate"
          value={formData.closeDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="exchanger">Exchanger:</label>
        <input
          type="text"
          name="exchanger"
          value={formData.exchanger}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastModifiedDate">Last Modified Date:</label>
        <input
          type="datetime-local"
          name="lastModifiedDate"
          value={formData.lastModifiedDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="openDate">Open Date:</label>
        <input
          type="datetime-local"
          name="openDate"
          value={formData.openDate}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
