import React, { useState, useRef } from "react";
import DragAndDrop from "./form/DragAndDrop";
import AvatarInput from "./form/AvatarInput";
import supabase from "../server/supabase";

import BaseAvatar from "../assets/baseAvatar.png";
import { useNavigate } from "react-router-dom";

const jobs = {
  "Agent administratif municipal": 2,
  "Auxiliaire de vie en crèche": 3,
  "Agent de police municipale": 4,
  Pompier: 1,
};

const Form = ({ id }) => {
  const [formData, setFormData] = useState({
    // photo: "",
    lastname: "",
    firstname: "",
    email: "",
    age: "",
    job: "",
    seniority: "",
    about: "",
    address: "",
    city: "",
    region: "",
    zip_code: "",
    missing: "",
    status: "",
    difficult: "",
    usure: "",
    // zoneDeDepot: [],
  });

  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      difficult: jobs[formData.job],
      usure:
        ((formData.age * 2 +
          (jobs[formData.job] * 100 * 3 +
            formData.missing * 4 +
            formData.seniority * 1)) /
          100) *
        5,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const { data, error } = await supabase.from("users").insert([formData]);
      if (error) {
        console.error(error);
      } else {
        console.log("Data inserted successfully:", data);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto bg-white rounded-md shadow-md w-11/12 md:w-3/4 lg:w-2/3 transition-all mb-8"
    >
      <div className="p-6">
        {/* <AvatarInput
          avatar={formData.photo && id ? formData.photo : BaseAvatar}
          handleFileChange={handleFileChange}
          selectedFile={selectedFile}
        /> */}

        <div className="flex gap-4">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="lastname"
              className="block text-sm font-semibold text-gray-600"
            >
              Nom *
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={formData.lastname}
              onChange={handleInputChange}
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4 w-1/2">
            <label
              htmlFor="firstname"
              className="block text-sm font-semibold text-gray-600"
            >
              Prénom *
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={formData.firstname}
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
              htmlFor="job"
              className="block text-sm font-semibold text-gray-600"
            >
              Métier *
            </label>
            <select
              name="job"
              id="job"
              value={formData.job}
              onChange={handleInputChange}
              className="mt-2 border p-2 w-full rounded-md"
              required
            >
              <option value="" defaultValue={true} disabled hidden>
                Sélectionner un métier
              </option>
              <option value="Agent administratif municipal">
                Agent administratif municipal
              </option>
              <option value="Auxiliaire de vie en crèche">
                Auxiliaire de vie en crèche
              </option>
              <option value="Agent de police municipale">
                Agent de police municipale
              </option>
              <option value="Pompier">Pompier</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="seniority"
              className="block text-sm font-semibold text-gray-600"
            >
              Ancienneté (en année) *
            </label>
            <input
              type="number"
              name="seniority"
              id="seniority"
              value={formData.seniority}
              onChange={handleInputChange}
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="about"
            className="block text-sm font-semibold text-gray-600"
          >
            À propos
          </label>
          <textarea
            name="about"
            id="about"
            value={formData.about}
            onChange={handleInputChange}
            className="mt-2 border p-2 w-full rounded-md"
          />
        </div>

        <div className="mb-4 w-full">
          <label
            htmlFor="address"
            className="block text-sm font-semibold text-gray-600"
          >
            Adresse
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
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
              htmlFor="zip_code"
              className="block text-sm font-semibold text-gray-600"
            >
              Code postal *
            </label>
            <input
              type="number"
              name="zip_code"
              id="zip_code"
              value={formData.zip_code}
              onChange={handleInputChange}
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4 w-full md:w-2/5">
            <label
              htmlFor="city"
              className="block text-sm font-semibold text-gray-600"
            >
              Ville *
            </label>
            <input
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex gap-4 w-full md:flex-row flex-col">
          <div className="mb-4 w-full md:w-1/2">
            <label
              htmlFor="missing"
              className="block text-sm font-semibold text-gray-600"
            >
              Durée d’arrêt de travail cette année (en jour) *
            </label>
            <input
              type="number"
              name="missing"
              id="missing"
              value={formData.missing}
              onChange={handleInputChange}
              className="mt-2 border p-2 w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4 w-full md:w-1/2">
            <label
              htmlFor="status"
              className="block text-sm font-semibold text-gray-600"
            >
              Statut *
            </label>
            <select
              name="status"
              id="status"
              value={formData.status}
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

        {/* <div className="mb-4 w-full">
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
        </div> */}
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
