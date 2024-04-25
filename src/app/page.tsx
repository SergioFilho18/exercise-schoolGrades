import { Cardinfo } from "./components/cardInfo";
import { students } from "./data/students";

const Page = () =>{
  return (
    <div className="container mx-auto">
    <Cardinfo students={students} />
    </div>
  );
}


export default Page;