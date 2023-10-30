/* eslint-disable react/prop-types */
const NavBar = (
  // This is the props that we passed from App.jsx
  // We can use destructuring to get the value
  { showOrHideComponentName, setWhichContent }
) => {
  return (
    // We will use Fragment to wrap the JSX (Optional)
    <>
      <section
        className={
          (showOrHideComponentName ? "border-2 border-slate-200" : "") + " p-4"
        }
      >
        <h1 className={(showOrHideComponentName ? "" : "hidden") + " text-xl"}>
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
    </>
  );
};

export default NavBar;
