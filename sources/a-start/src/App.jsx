import { Fragment, useState } from "react";

function App() {
  // Since this data won't be changed, we won't use useState
  const topAnimes = [
    {
      title: "Steins;Gate",
      imageUrl: "https://cdn.myanimelist.net/images/anime/1935/127974.jpg",
      totalEpisodes: 24,
      status: "Finished Airing",
    },
    {
      title: "Gintama°",
      imageUrl: "https://cdn.myanimelist.net/images/anime/3/72078.jpg",
      totalEpisodes: 51,
      status: "Finished Airing",
    },
    {
      title: "Shingeki no Kyojin Season 3 Part 2",
      imageUrl: "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
      totalEpisodes: 10,
      status: "Finished Airing",
    },
  ];

  const [showOrHideComponentName, setShowOrHideComponentName] = useState(false);
  const [whichContent, setWhichContent] = useState("home");
  const [stateData, setStateData] = useState("");
  const [formInputData, setFormInputData] = useState("");

  const formSubmissionOnClickHandler = (e) => {
    e.preventDefault();
    setStateData(formInputData);
  };

  return (
    <>
      <div className="p-2 flex flex-col gap-2 text-slate-700">
        {/* <!-- NavBar --> */}
        <section
          className={
            (showOrHideComponentName ? "border-2 border-slate-200" : "") +
            " p-4"
          }
        >
          <h1
            className={(showOrHideComponentName ? "" : "hidden") + " text-xl"}
          >
            Component NavBar
          </h1>

          <nav className="flex gap-2 justify-between bg-gray-200 py-4 px-4 rounded-xl">
            <div className="my-auto">Brand Logo</div>

            <div className="flex gap-2">
              <a
                href="#"
                className="my-auto hover:text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  setWhichContent("home");
                }}
              >
                Home
              </a>
              <a
                href="#"
                className="my-auto hover:text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  setWhichContent("animes");
                }}
              >
                Animes
              </a>
              <a
                href="#"
                className="my-auto hover:text-blue-600 hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  setWhichContent("contactMe");
                }}
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-2">
              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-slate-600"
                >
                  <path
                    fill="currentColor"
                    d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
                  />
                </svg>
              </div>

              <div>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  className="text-slate-600"
                >
                  <path
                    fill="currentColor"
                    d="m17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4l-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z"
                  />
                </svg>
              </div>
            </div>
          </nav>
        </section>

        {/* <!-- Content --> */}
        <section
          className={
            (showOrHideComponentName ? "border-2 border-red-100" : "") + " p-4"
          }
        >
          <h1
            className={(showOrHideComponentName ? "" : "hidden") + " text-xl"}
          >
            Component Content
          </h1>

          {/* <!-- Content Home --> */}
          {whichContent === "home" && (
            <div className="p-4 bg-gray-200 rounded-xl flex gap-2 flex-col">
              <h3 className="text-base">Ini adalah bagian konten (Home)</h3>
            </div>
          )}

          {/* <!-- Content Animes --> */}
          {whichContent === "animes" && (
            <div className="p-4 bg-gray-200 rounded-xl flex gap-2 flex-col">
              <h3 className="text-base">Ini adalah bagian konten (Animes)</h3>

              <section
                className={
                  (showOrHideComponentName ? "border-2 border-red-400" : "") +
                  " p-4"
                }
              >
                <h1
                  className={
                    (showOrHideComponentName ? "" : "hidden") + " text-xl"
                  }
                >
                  Component Table Animes
                </h1>

                {/* <!-- Table Animes --> */}
                <table
                  className="
              mx-auto
              table-auto
              border border-spacing-2 border-separate border-red-300
            "
                >
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
                      <Fragment key={"anime" + idx}>
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
                          <td className="border border-red-300">
                            {anime.title}
                          </td>
                          <td className="border border-red-300">
                            {anime.totalEpisodes}
                          </td>
                          <td className="border border-red-300">
                            {anime.status}
                          </td>
                        </tr>
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
          )}

          {/* <!-- Content Contact --> */}
          {whichContent === "contactMe" && (
            <div className="p-4 bg-gray-200 rounded-xl flex gap-2 flex-col">
              <h3 className="text-base">
                Ini adalah bagian konten (Contact Me)
              </h3>

              {/* <!-- Form Input --> */}
              <section
                className={
                  (showOrHideComponentName ? "border-2 border-red-400" : "") +
                  " p-4"
                }
              >
                <h1
                  className={
                    (showOrHideComponentName ? "" : "hidden") + " text-xl"
                  }
                >
                  Component Form Input
                </h1>

                <form
                  className="my-2 flex flex-col gap-2"
                  onSubmit={formSubmissionOnClickHandler}
                >
                  <input
                    type="text"
                    className="py-4 px-2 rounded-xl"
                    placeholder="Inputan dari Form"
                    value={formInputData}
                    onChange={(e) => {
                      setFormInputData(e.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    className="
                bg-blue-200
                hover:bg-blue-400
                mx-auto
                mt-4
                p-4
                rounded-full
                w-96
              "
                  >
                    Kirimin Yuk !
                  </button>
                </form>
              </section>

              {/* <!-- Form Result --> */}
              <section
                className={
                  (showOrHideComponentName ? "border-2 border-red-400" : "") +
                  " p-4"
                }
              >
                <h1
                  className={
                    (showOrHideComponentName ? "" : "hidden") + " text-xl"
                  }
                >
                  Component Form Result
                </h1>

                <div className="p-4 my-2 bg-green-200 rounded-xl">
                  Tulisan dari Form adalah:
                  {stateData ? stateData : "Empty Placeholder"}
                </div>
              </section>
            </div>
          )}
        </section>

        {/* <!-- Footer --> */}
        <section
          className={
            (showOrHideComponentName ? "border-2 border-green-200" : "") +
            " p-4"
          }
        >
          <h1
            className={(showOrHideComponentName ? "" : "hidden") + " text-xl"}
          >
            Component Footer
          </h1>

          <div className="p-4 bg-gray-200 rounded-xl">
            <h3 className="text-base text-center">
              &copy;&nbsp;withered-flowers - 2023
            </h3>
          </div>
        </section>

        {/* <!-- Toggle Button --> */}
        <section className="mx-auto mt-4">
          <button
            className={
              (showOrHideComponentName
                ? "bg-blue-200 hover:bg-blue-400"
                : "bg-red-200 hover:bg-red-400") + " p-4 rounded-full w-96"
            }
            onClick={() => {
              setShowOrHideComponentName(!showOrHideComponentName);
            }}
          >
            {!showOrHideComponentName ? "Show Component" : "Hide Component"}
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
