import moment from "moment";
import { MdOutlineDelete } from 'react-icons/md';

import Phil from "../../components/Phil/Phil";

import './Home.scss';

export const EXPENSE_COLUMNS = [
  {
    header: "Exchange Number",
    key: "_id",
    width: 200,
    cell: ({ _id }) => <div>{_id}</div>,
  },
  {
    header: "Exchanger",
    key: "exchanger",
    width: 200,
    cell: ({ exchanger }) => <div>{exchanger}</div>,
  },
  {
    header: "Open Date",
    key: "openDate",
    width: 200,
    cell: ({ openDate }) => moment(openDate).format("LL"),
  },
  {
    header: "Close Date",
    key: "closeDate",
    width: 200,
    cell: ({ closeDate }) => moment(closeDate).format("LL"),
  },
  {
    header: "Last Modified Date",
    key: "lastModifiedDate",
    width: 200,
    cell: ({ lastModifiedDate }) => moment(lastModifiedDate).format("LL"),
  },
  {
    header: "Account Balance",
    key: "accountBalance",
    width: 100,
    cell: ({ accountBalance }) => <div>{accountBalance}</div>,
  },
  {
    header: "Status",
    key: "status",
    width: 100,
    cell: ({ status }) => <Phil background='#000' color='#fff' content={status}/>,
  },
  {
    header: "Action",
    key: "action",
    width: 50,
    cell: ({ _id }, actions) => {
      return (
        <MdOutlineDelete className="icon" onClick={() => actions.delete(_id)} />
      );
    },
  },
];
