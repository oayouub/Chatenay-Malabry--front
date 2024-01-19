import Navbar from "../components/Navbar"
import Form from "../components/Form"

const FormPage = () => {
  
  const urlSearchString = window.location.search;
  const params = new URLSearchParams(urlSearchString);
  const id = params.get("id");

  return (
    <div>
      <Navbar />
      <div className="flex w-1280 p-7 gap-10 shadow-md mb-8">
        <h1 className="text-gray-900 font-inter font-bold text-3xl leading-9">
          {id ? "Modifier prenom" : "Ajouter un professionnel"}
        </h1>
      </div>
      <Form id={id} />
    </div>
  )
}
export default FormPage
