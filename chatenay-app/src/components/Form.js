import React, { useState, useRef } from "react";
import DragAndDrop from "./form/DragAndDrop";
import AvatarInput from "./form/AvatarInput";

import BaseAvatar from "../assets/baseAvatar.png";

const Form = ({ id }) => {
  const [formData, setFormData] = useState({
    photo: null,
    nom: "",
    prenom: "",
    email: "",
    age: null,
    metier: "",
    anciennete: null,
    aPropos: "",
    adresse: "",
    ville: "",
    region: "",
    codePostal: null,
    dureeArretTravail: null,
    statut: "",
    zoneDeDepot: [],
  });

  const [selectedFile, setSelectedFile] = useState(null);

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
    const file = e.target.files[0];
    setSelectedFile(file);
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
      className="mx-auto bg-white rounded-md shadow-md w-11/12 md:w-3/4 lg:w-2/3 transition-all mb-8"
    >
      <div className="p-6">
        <AvatarInput
          avatar={formData.photo && id ? formData.photo : BaseAvatar}
          handleFileChange={handleFileChange}
          selectedFile={selectedFile}
        />

        <div className="flex gap-4">
          <div className="mb-4 w-1/2">
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
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4 w-1/2">
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
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mb-4 w-4/5">
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
              className="mt-2 border p-2 w-full rounded-md"
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
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mb-4 w-4/5">
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
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-semibold text-gray-600"
            >
              Ancienneté *
            </label>
            <input
              type="number"
              name="anciennete"
              id="anciennete"
              value={formData.anciennete}
              onChange={handleInputChange}
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
        </div>

        <div className="mb-4 w-full">
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
            className="mt-2 border p-2 w-full rounded-md"
          />
        </div>

        <div className="mb-4 w-full">
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
            className="mt-2 border p-2 w-full rounded-md"
          />
        </div>

        <div className="flex gap-4 w-full md:flex-row flex-col">
          <div className="mb-4 w-full md:w-2/5">
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
              className="mt-2 border p-2 w-full rounded-md"
              required
            >
              <option value="" defaultValue={true} disabled hidden>
                Sélectionner une région
              </option>
              <option value="Île-de-France">Île-de-France</option>
              <option value="Hauts-de-France">Hauts-de-France</option>
              <option value="Bourgogne-Franche-Comté">
                Bourgogne-Franche-Comté
              </option>
              <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
              <option value="Pays de la Loiredl">Pays de la Loire</option>
              <option value="Occitanie">Occitanie</option>
              <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
              <option value="Provence-Alpes-Côte d'Azur">
                Provence-Alpes-Côte d'Azur
              </option>
              <option value="Corse">Corse</option>
              <option value="Bretagne">Bretagne</option>
              <option value="Centre-Val de Loire">Centre-Val de Loire</option>
              <option value="Grand Est">Grand Est</option>
              <option value="Normandie">Normandie</option>
            </select>
          </div>
          <div className="mb-4 w-full md:w-1/5">
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
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4 w-full md:w-2/5">
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
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex gap-4 w-full md:flex-row flex-col">
          <div className="mb-4 w-full md:w-1/2">
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
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4 w-full md:w-1/2">
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
              className="mt-2 border p-2 w-full rounded-md"
              required
            >
              <option value="" defaultValue={true} disabled hidden>
                Sélectionner un statut
              </option>
              <option value="Reconversion">Reconversion</option>
              <option value="En formation">En formation</option>
              <option value="Actif.ve">Actif.ve</option>
            </select>
          </div>
        </div>

        <div className="mb-4 w-full">
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
      </div>

      <div className="bg-gray-200 py-3 px-5 flex justify-end rounded-b-sm">
        <button
          type="submit"
          className="bg-bleu text-white px-5 py-2 rounded-md focus:outline-none focus:shadow-outline-blue text-sm"
        >
          Enregistrer
        </button>
      </div>
    </form>
  );
};

export default Form;
