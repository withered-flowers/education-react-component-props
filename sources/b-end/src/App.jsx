import { useState } from "react";

// Import the component Here
import NavBar from "./components/NavBar";
import TableAnimes from "./components/TableAnimes";
import CustomFooter from "./components/CustomFooter";
import FormInput from "./components/FormInput";
import FormResult from "./components/FormResult";

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
        <NavBar
          showOrHideComponentName={showOrHideComponentName}
          setWhichContent={setWhichContent}
        />

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
                <TableAnimes
                  topAnimes={topAnimes}
                  showOrHideComponentName={showOrHideComponentName}
                />
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
              <FormInput
                showOrHideComponentName={showOrHideComponentName}
                formInputData={formInputData}
                setFormInputData={setFormInputData}
                formSubmissionOnClickHandler={formSubmissionOnClickHandler}
              />

              {/* <!-- Form Result --> */}
              <FormResult
                showOrHideComponentName={showOrHideComponentName}
                stateData={stateData}
              />
            </div>
          )}
        </section>

        {/* <!-- Footer --> */}
        {/* Use the imported Component here */}
        {/* Don't forget to pass the props (variable and functions) */}
        <CustomFooter
          showOrHideComponentName={showOrHideComponentName}
          setShowOrHideComponentName={setShowOrHideComponentName}
        />
      </div>
    </>
  );
}

export default App;
