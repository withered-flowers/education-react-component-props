/* eslint-disable react/prop-types */
// import { Fragment } from "react";
import TableAnimesRow from "./TableAnimesRow";

const TableAnimes = (
  // This is the props that we passed from App.jsx
  // We can use destructuring to get the value
  { topAnimes, showOrHideComponentName }
) => {
  return (
    <table className="mx-auto table-auto border border-spacing-2 border-separate border-red-300">
      <thead>
        <tr>
          <th className="border border-red-300">#</th>
          <th className="border border-red-300">Thumbnail</th>
          <th className="border border-red-300">Title</th>
          <th className="border border-red-300">Episodes</th>
          <th className="border border-red-300">Status Airing</th>
        </tr>
      </thead>
      <tbody>
        {topAnimes.map((anime, idx) => (
          <TableAnimesRow
            key={"anime" + idx}
            anime={anime}
            idx={idx}
            showOrHideComponentName={showOrHideComponentName}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableAnimes;
