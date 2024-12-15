import React from "react";
import fileIcon from "../../assets/file-upload.png";

function getInputField(type, options, onChange, value) {
  switch (type) {
    case "textArea":
      return (
        <textarea
          className="p-2 border rounded text-black"
          value
          onChange={onChange}
        />
      );
    case "password":
      return (
        <input
          type="password"
          id="password"
          value={value}
          onChange={onChange}
          name="password"
          className="p-2 border rounded text-black"
        />
      );
    case "select":
      return (
        <select
          className="p-2 rounded text-black"
          value={value}
          onChange={onChange}
        >
          {options?.map((option) => (
            <option>{option}</option>
          ))}
        </select>
      );
    case "text":
      return (
        <input
          type="text"
          id="email"
          name="email"
          value={value}
          onChange={onChange}
          className="p-2 border rounded text-black"
        />
      );
    case "file":
      return (
        <div className="flex gap-3">
          <img src={fileIcon} className="size-12" />
          <input
            type="file"
            id="file"
            name="file"
            value={value}
            onChange={onChange}
            className="p-2 border rounded text-black"
          />
        </div>
      );
    default:
      return (
        <input
          type="text"
          id="email"
          name="email"
          value={value}
          onChange={onChange}
          className="p-2 border rounded text-black"
        />
      );
  }
}

export default function InputField({ label, type, options = [], onChange ,value }) {
  return (
    <div className="flex flex-col space-y-2">
      <label className=" text-lg font-bold text-white">{label}</label>
      {getInputField(type, options, onChange ,value)}
    </div>
  );
}
