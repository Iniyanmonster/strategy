import React, { useState } from "react";
import InputField from "../atoms/input-field";
import { getUser, updateUser } from "../../actions/utils";

const fieldPerPage = 3;

export default function Form({ username }) {
  const [data, setData] = useState({
    brandName: "",
    brandLogo: "",
    about: "",
    brandVideo: "",
    brandPoster: "",
    customerNo: "",
    category: "",
    customUrl: "",
  });

  const fields = [
    { type: "text", label: "Brand Name", id: "brandName" },
    { type: "file", label: "Brand Logo", id: "brandLogo" },
    { type: "textArea", label: "About your Brand", id: "about" },
    { type: "file", label: "Brand Video", id: "brandVideo" },
    { type: "file", label: "Brand Poster", id: "brandPoster" },
    { type: "text", label: "Customer Support Number", id: "customerNo" },
    {
      type: "select",
      label: "Category",
      options: ["Category 1", "Category 2"],
      id: "category",
    },
    { type: "text", label: "Custom URL", id: "customUrl" },
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = await getUser();
    const user = users.find((user) => user.username === username);
    try {
      const update = await updateUser(user.$id, data);
      if (update) {
        alert("Form submitted successfully!");
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="space-y-4 w-full max-w-md">
        {currentFields.map((field, index) => {
          const { type, label, options, id } = field;
          const handleData = (e) => {
            setData({ ...data, [id]: e.target.value });
          };
          return (
            <InputField
              key={index}
              type={type}
              label={label}
              options={options}
              onChange={handleData}
            />
          );
        })}
        {page === fields.length % fieldPerPage ? (
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md w-full"
            onClick={handleSubmit}
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
