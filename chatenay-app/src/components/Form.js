import React, { useState, useRef } from "react";
import DragAndDrop from "./form/DragAndDrop";

const Form = () => {
  const [formData, setFormData] = useState({
    photo: null,
    nom: "",
    prenom: "",
    email: "",
    age: "",
    metier: "",
    aPropos: "",
    adresse: "",
    ville: "",
    region: "",
    codePostal: "",
    dureeArretTravail: "",
    statut: "",
    zoneDeDepot: [],
  });

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: Array.from(files),
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const files = Array.from(e.dataTransfer.files);
    setFormData({
      ...formData,
      zoneDeDepot: files,
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleClickFiles = () => {
    fileInputRef.current.click();
  };

  const handleSelectFiles = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      zoneDeDepot: files,
    });
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...formData.zoneDeDepot];
    updatedFiles.splice(index, 1);
    setFormData({
      ...formData,
      zoneDeDepot: updatedFiles,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vous pouvez traiter les données ici
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="photo"
          className="block text-sm font-semibold text-gray-600"
        >
          Photo
        </label>
        <input
          type="file"
          name="photo"
          id="photo"
          onChange={handleFileChange}
          className="mt-2 border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="nom"
          className="block text-sm font-semibold text-gray-600"
        >
          Nom *
        </label>
        <input
          type="text"
          name="nom"
          id="nom"
          value={formData.nom}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="prenom"
          className="block text-sm font-semibold text-gray-600"
        >
          Prénom *
        </label>
        <input
          type="text"
          name="prenom"
          id="prenom"
          value={formData.prenom}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-600"
        >
          Adresse mail *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="metier"
          className="block text-sm font-semibold text-gray-600"
        >
          Métier *
        </label>
        <input
          type="text"
          name="metier"
          id="metier"
          value={formData.metier}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="age"
          className="block text-sm font-semibold text-gray-600"
        >
          Age *
        </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="aPropos"
          className="block text-sm font-semibold text-gray-600"
        >
          À propos
        </label>
        <textarea
          name="aPropos"
          id="aPropos"
          value={formData.aPropos}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="adresse"
          className="block text-sm font-semibold text-gray-600"
        >
          Adresse
        </label>
        <input
          type="text"
          name="adresse"
          id="adresse"
          value={formData.adresse}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="ville"
          className="block text-sm font-semibold text-gray-600"
        >
          Ville *
        </label>
        <input
          type="text"
          name="ville"
          id="ville"
          value={formData.ville}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="region"
          className="block text-sm font-semibold text-gray-600"
        >
          Région *
        </label>
        <select
          name="region"
          id="region"
          value={formData.region}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
          required
        >
          <option value="" defaultValue={true} disabled hidden>
            Choose here
          </option>
          <option value="idf">Île-de-France</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="codePostal"
          className="block text-sm font-semibold text-gray-600"
        >
          Code postal *
        </label>
        <input
          type="number"
          name="codePostal"
          id="codePostal"
          value={formData.codePostal}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="dureeArretTravail"
          className="block text-sm font-semibold text-gray-600"
        >
          Durée d’arrêt de travail cette année (en jours) *
        </label>
        <input
          type="number"
          name="dureeArretTravail"
          id="dureeArretTravail"
          value={formData.dureeArretTravail}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="statut"
          className="block text-sm font-semibold text-gray-600"
        >
          Statut *
        </label>
        <select
          name="statut"
          id="statut"
          value={formData.statut}
          onChange={handleInputChange}
          className="mt-2 border p-2 w-full"
          required
        >
          <option value="" defaultValue={true} disabled hidden>
            Choose here
          </option>
          <option value="reconversion">Reconversion</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="zoneDeDepot"
          className="block text-sm font-semibold text-gray-600"
        >
          Fichiers complémentaires
        </label>
        <DragAndDrop
          handleDrop={handleDrop}
          formData={formData}
          handleDragOver={handleDragOver}
          handleRemoveFile={handleRemoveFile}
          handleClickFiles={handleClickFiles}
          fileInputRef={fileInputRef}
          handleSelectFiles={handleSelectFiles}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Soumettre
      </button>
    </form>
  );
};

export default Form;
