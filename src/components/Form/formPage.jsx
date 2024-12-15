import React, { useState } from "react";
import InputField from "../atoms/input-field"; // Import InputField component

const fieldPerPage = 3;

export default function Form() {
  const fields = [
    { type: "text", label: "Brand Name" },
    { type: "file", label: "Brand Logo" },
    { type: "textArea", label: "About your Brand" },
    { type: "file", label: "Brand Video" },
    { type: "file", label: "Brand Poster" },
    { type: "text", label: "Customer Support Number" },
    {
      type: "select",
      label: "Category",
      options: ["Category 1", "Category 2"],
    },
    { type: "text", label: "Custom URL" },
  ];

  const [page, setPage] = useState(0);

  const currentFields = fields.slice(
    page * fieldPerPage,
    (page + 1) * fieldPerPage
  );

  const handleNext = () => {
    if ((page + 1) * fieldPerPage < fields.length) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="space-y-4 w-full max-w-md">
        {currentFields.map((field, index) => {
          const { type, label, options } = field;
          return (
            <InputField
              key={index}
              type={type}
              label={label}
              options={options}
            />
          );
        })}
        {page === fields.length % fieldPerPage ? (
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md w-full"
          >
            Save
          </button>
        ) : null}
      </form>

      {page !== fields.length % fieldPerPage ? (
        <button
          onClick={handleNext}
          className="absolute bottom-10 right-10 p-3 bg-blue-500 text-white rounded-full shadow-md"
        >
          Next
        </button>
      ) : null}
    </div>
  );
}
