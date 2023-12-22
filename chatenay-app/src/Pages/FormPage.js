import Navbar from "../components/Navbar";
import Form from "../components/Form";

const FormPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex w-1280 p-7 gap-10 shadow-md mb-8">
        <h1 className="text-gray-900 font-inter font-bold text-3xl leading-9">
          Ajouter un professionnel
        </h1>
      </div>
      <Form />
    </div>
  );
};
export default FormPage;
