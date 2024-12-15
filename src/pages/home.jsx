import { Aside, Form } from "../components";

export default function Home() {
  return (
    <div className="bg-black grid grid-cols-[30%_60%]">
      <Aside />
      <Form />
    </div>
  );
}
