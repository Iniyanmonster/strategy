import { Aside, Form, Product } from "../index";
import { useState } from "react";
export default function Home({ username }) {
  const [tab, setCurrTab] = useState(1);
  console.log(tab);
  return (
    <div className="bg-black grid grid-cols-[30%_60%]">
      <Aside setCurrTab={setCurrTab} />
      {tab === 1 ? <Form username={username} /> : <Product />}
    </div>
  );
}
