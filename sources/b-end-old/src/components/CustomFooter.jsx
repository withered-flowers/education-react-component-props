/* eslint-disable react/prop-types */
const CustomFooter = (
  // This is the props that we passed from App.jsx
  // We can use destructuring to get the value
  { showOrHideComponentName, setShowOrHideComponentName }
) => {
  return (
    // We will use Fragment to wrap the JSX (Optional)
    <>
      <section
        className={
          (showOrHideComponentName ? "border-2 border-green-200" : "") + " p-4"
        }
      >
        <h1 className={(showOrHideComponentName ? "" : "hidden") + " text-xl"}>
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
    </>
  );
};

export default CustomFooter;
