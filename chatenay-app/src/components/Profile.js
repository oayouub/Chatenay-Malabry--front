import React from "react";
import {
  PencilIcon,
  ArrowLeftIcon,
  PaperClipIcon,
} from "@heroicons/react/outline";

import Avatar from "../assets/avatar.jpg";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-white w-full">
        <div className="flex items-center px-4 py-3 justify-between space-x-4 mb-8 shadow">
          <div className="flex items-center gap-4">
            <Link to="/"><ArrowLeftIcon className="h-8 w-8 text-gray-700 cursor-pointer" /></Link>
            <img
              className="h-16 w-16 rounded-full object-cover object-center"
              src={Avatar}
              alt="Jane Cooper"
            />
            <div className="flex-grow">
              <div className="flex flex-col items-start">
                <span className="font-semibold text-lg text-gray-800">
                  Jane Cooper
                </span>
                <span className="text-sm text-gray-500">Ouvrière</span>
              </div>
            </div>
          </div>
          <PencilIcon className="h-8 w-8 text-gray-700 cursor-pointer" />
        </div>

        <div className="overflow-x-auto px-8">
          <table className="w-full text-sm text-left text-gray-500 table-auto">
            <tbody>
              {createRow(0, "Taux d'usure", "80%", true)}
              {createRow(1, "Mail", "jane.cooper@example.com")}
              {createRow(2, "Âge", "32 ans")}
              {createRow(
                3,
                "À propos",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur ultricies aliquam. Aenean dictum suscipit diam a sagittis. Duis efficitur eros aliquet urna semper feugiat. Aenean iaculis, enim ut suscipit ullamcorper, ex enim suscipit ligula, et dignissim lorem nibh eget erat. Phasellus suscipit tellus sed lorem posuere dignissim. Donec interdum vel leo sed tristique. Quisque nec neque nisi. Integer mollis finibus ligula non laoreet. Vivamus luctus, magna non faucibus pellentesque, mauris nunc congue metus, eget tincidunt lacus augue non mauris. Nunc lobortis, turpis et consectetur trist.",
                false,
                true
              )}
              {createRow(4, "Adresse", "72 rue Jean Charles, 75000 Paris")}
              {createRow(5, "Arrêt de travail cette année (jour)", "150 jours")}
              {createRow(6, "Statut", "Reconversion")}
              {createRow(7, "Fichiers complémentaires", null, false, false, [
                "CV.pdf",
                "NOM_FICHIER.pdf",
              ])}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Helper function to create a table row
const createRow = (
  index,
  label,
  value,
  isProgressBar = false,
  isMultiLine = false,
  files = []
) => (
  <tr>
    <th
      scope="row"
      className={`py-4 px-6 font-medium text-gray-900 ${
        index % 2 === 0 ? "bg-gray-50" : "bg-white"
      } ${isProgressBar ? "text-xl" : ""} min-w-max`}
      style={{ width: "30%" }}
    >
      {label}
    </th>
    <td
      className={`py-4 px-6 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} ${
        isMultiLine ? "whitespace-normal break-words" : "whitespace-nowrap"
      }`}
    >
      {isProgressBar ? (
        <div className="flex items-center justify-start">
          <span className="text-lg font-semibold text-gray-600 mr-2">
            {value}
          </span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
            <div
              className="bg-red-600 h-2.5 rounded-full"
              style={{ width: value }}
            ></div>
          </div>
        </div>
      ) : files.length >= 1 ? (
        <div className="border-2 rounded-md border-gray-100 flex flex-col w-1/2 divide-y > * + * divide-gray-100 > * + *">
          {files.map((file, index) => (
            <div className="flex justify-between px-3 py-2" key={index}>
              <div className="flex gap-2">
                <PaperClipIcon className="w-4 h-4" />
                {file}
              </div>
              <a
                href={`/path-to-${file}`}
                className="text-blue-600 hover:text-blue-800"
              >
                Télécharger
              </a>
            </div>
          ))}
        </div>
      ) : (
        value
      )}
    </td>
  </tr>
);

export default UserProfile;
