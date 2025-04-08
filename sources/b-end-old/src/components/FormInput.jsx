/* eslint-disable react/prop-types */
const FormInput = (
  // This is the props that we passed from App.jsx
  // We can use destructuring to get the value
  {
    showOrHideComponentName,
    formSubmissionOnClickHandler,
    formInputData,
    setFormInputData,
  }
) => {
  return (
    <>
      <section
        className={
          (showOrHideComponentName ? "border-2 border-red-400" : "") + " p-4"
        }
      >
        <h1 className={(showOrHideComponentName ? "" : "hidden") + " text-xl"}>
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
    </>
  );
};

export default FormInput;
