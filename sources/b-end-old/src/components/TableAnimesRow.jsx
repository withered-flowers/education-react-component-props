/* eslint-disable react/prop-types */
const TableAnimesRow = (
  // This is the props that we passed from TableAnimes.jsx
  // We can use destructuring to get the value
  { showOrHideComponentName, anime, idx }
) => {
  return (
    <>
      <tr className={showOrHideComponentName ? "" : "hidden"}>
        <td colSpan="5" className="text-xl">
          <p>Component Table Animes Row</p>
        </td>
      </tr>
      <tr>
        <td className="border border-red-300">{idx + 1}</td>
        <td className="border border-red-300">
          <img src={anime.imageUrl} className="w-16 h-24" />
        </td>
        <td className="border border-red-300">{anime.title}</td>
        <td className="border border-red-300">{anime.totalEpisodes}</td>
        <td className="border border-red-300">{anime.status}</td>
      </tr>
    </>
  );
};

export default TableAnimesRow;
