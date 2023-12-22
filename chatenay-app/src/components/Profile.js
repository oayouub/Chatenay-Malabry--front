import React, { useState, useEffect,} from "react"
import {
  PencilIcon,
  ArrowLeftIcon,
  PaperClipIcon,
} from "@heroicons/react/outline"

import Avatar from "../assets/avatar.jpg"
import { Link } from "react-router-dom"

const UserProfile = () => {

  const [isEditMode, setIsEditMode] = useState(false);
  const [userData, setUserData] = useState([
    { label: "Taux d'usure", value: "80%", field: "wearRate", isProgressBar: true },
    { label: "Mail", value: "jane.cooper@example.com", field: "email" },
    { label: "Âge", value: "32 ans", field: "age" },
    {
      label: "À propos",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      field: "about",
      isMultiLine: true
    },
    { label: "Adresse", value: "72 rue Jean Charles, 75000 Paris", field: "address" },
    { label: "Arrêt de travail cette année (jour)", value: "150 jours", field: "daysOff" },
    { label: "Statut", value: "Reconversion", field: "status" },
    { label: "Fichiers complémentaires", value: ["CV.pdf", "NOM_FICHIER.pdf"], field: "files" },
  ]);

  useEffect(() => {
    const savedUserData = localStorage.getItem('userData')
    if (savedUserData) {
      setUserData(JSON.parse(savedUserData))
    }
  }, [])

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
  }

  const handleInputChange = (index, newValue) => {
    const newData = [...userData]
    if (userData[index].field === 'wearRate') {
      const wearRate = Math.min(Math.max(newValue, 0), 100)
      newData[index].value = `${wearRate}%`
    } else if (index === 7) {
      newData[index].value = newValue.split("\n")
    } else {
      newData[index].value = newValue
    }
    setUserData(newData)
  };

  const handleSave = () => {
    localStorage.setItem('userData', JSON.stringify(userData))
    setIsEditMode(false)
  }

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
          <div className="flex items-center">
            {isEditMode && (
              <button
                onClick={handleSave}
                className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
              >
                Save
              </button>
            )}
            <PencilIcon className="h-8 w-8 text-gray-700 cursor-pointer" onClick={toggleEditMode} />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 table-auto">
            <tbody>
              {userData.map((data, index) => (
                <tr key={index}>
                  <th
                    scope="row"
                    className={`py-4 px-6 font-medium text-gray-900 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                    style={{ width: "30%" }}
                  >
                    {data.label}
                  </th>
                  
                  <td
                    className={`py-4 px-6 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } ${data.isMultiLine ? "whitespace-normal break-words" : "whitespace-nowrap"}`}
                  >
                    {isEditMode ? (
                      data.isProgressBar ? (
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={parseInt(data.value)}
                          onChange={(e) => handleInputChange(index, e.target.value)}
                          className="form-range w-full h-2.5 bg-gray-200 rounded-lg cursor-pointer"
                        />
                      ) : data.field === "files" ? (
                        <textarea
                          className="form-input w-full h-full p-2 border-gray-300 rounded-md"
                          value={data.value.join("\n")}
                          onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                      ) : (
                        <input
                          type="text"
                          value={data.value}
                          onChange={(e) => handleInputChange(index, e.target.value)}
                          className="form-input w-full h-full p-2 border-gray-300 rounded-md"
                        />
                      )
                    ) : data.isProgressBar ? (
                      <div className="flex items-center justify-start">
                        <span className="text-lg font-semibold text-gray-600 mr-2">
                          {data.value}
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                          <div
                            className="bg-red-600 h-2.5 rounded-full"
                            style={{ width: data.value }}
                          ></div>
                        </div>
                      </div>
                    ) : data.field === "files" ? (
                      <div className="border-2 rounded-md border-gray-100 flex flex-col w-1/2 divide-y divide-gray-100">
                        {data.value.map((file, fileIndex) => (
                          <div className="flex justify-between px-3 py-2" key={fileIndex}>
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
                      data.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
