/* eslint-disable react/prop-types */
const FormResult = (
  // This is the props that we passed from App.jsx
  // We can use destructuring to get the value
  { showOrHideComponentName, stateData }
) => {
  return (
    <section
      className={
        (showOrHideComponentName ? "border-2 border-red-400" : "") + " p-4"
      }
    >
      <h1 className={(showOrHideComponentName ? "" : "hidden") + " text-xl"}>
        Component Form Result
      </h1>

      <div className="p-4 my-2 bg-green-200 rounded-xl">
        Tulisan dari Form adalah:
        {stateData ? stateData : "Empty Placeholder"}
      </div>
    </section>
  );
};

export default FormResult;
