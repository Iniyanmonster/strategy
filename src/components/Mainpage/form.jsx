import {Aside , Form} from '../index'
export default function Home({username}) {
  return (
    <div className="bg-black grid grid-cols-[30%_60%]">
      <Aside />
      <Form username={username}/>
    </div>
  );
}
