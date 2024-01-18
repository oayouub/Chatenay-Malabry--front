import React, { useState, useEffect, } from "react"
import {
  PencilIcon,
  ArrowLeftIcon,
  PaperClipIcon,
} from "@heroicons/react/outline"
import Avatar from "../assets/avatar.jpg"
import { Link, useParams } from "react-router-dom"
import supabase from "../server/supabase"
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const UserProfile = () => {
const { userId } = useParams()
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

  const [userData2, setUserData2] = useState(null);

  useEffect(() => {
    // Fonction pour récupérer les détails de l'utilisateur depuis Supabase
    const fetchUserData = async () => {
      try {
        const { data, error } = await supabase
          .from('users') // Remplacez 'utilisateurs' par le nom de votre table dans Supabase
          .select('*')
          .eq('id', userId)
          .single();

        if (error) {
          throw error;
        }

        setUserData2(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur', error);
        // Gérer les erreurs, par exemple, rediriger l'utilisateur vers une page d'erreur
      }
    };

    // Appel de la fonction pour récupérer les données une fois que le composant est monté
    fetchUserData();
  }, [userId]);
//  (((userData2.age x 2) + ((userData2.difficult x 100 x 3) + ( userData2.missing x 4) + ( userData2.seniority x 1))) / 100) * 5
  useEffect(() => {
    // Mettre à jour l'état userData lorsque userDataFromSupabase change
    
    if (userData2) {
      setUserData([
        { label: "Taux d'usure", value: userData2.usure, field: "wearRate", isProgressBar: true },

        { label: "Mail", value: userData2.email, field: "email" },
        { label: "Âge", value:  userData2.age, field: "age" },
        {
          label: "À propos",
          value:  userData2.about,
          field: "about",
          isMultiLine: true
        },
        { label: "Adresse", value:  userData2.address, field: "address" },
        { label: "Arrêt de travail cette année (jour)", value:  userData2.missing, field: "daysOff" },
        { label: "Statut", value:  userData2.status, field: "status" },
        { label: "Fichiers complémentaires", value: ["CV.pdf", "NOM_FICHIER.pdf"], field: "files" },
      ]);
    }
  }, [userData2]);

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
    newData[index].value = newValue
    setUserData(newData)
  };

  const handleSave = () => {
    localStorage.setItem('userData', JSON.stringify(userData))
    setIsEditMode(false)
  }

  function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body1" color="error">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" color="error" {...props} />
        </Box>
      </Box>
    );
  }

  const inputStyle = "form-input w-full h-full p-2 border-gray-300 rounded-md bg-transparent";
  const textareaStyle = "form-textarea w-full h-full p-2 border-gray-300 rounded-md bg-transparent";


  return (
    <div className="min-h-screen">
      <div className="bg-white w-full">
        <div className="flex items-center px-4 py-3 justify-between space-x-4 mb-8 shadow">
          <div className="flex items-center gap-4">
            <Link to="/">
              <ArrowLeftIcon className="h-8 w-8 text-gray-700 cursor-pointer" />
            </Link>
            <img
              className="h-16 w-16 rounded-full object-cover object-center"
              src={Avatar}
              alt="Jane Cooper"
            />
            <div className="flex-grow">
              <div className="flex flex-col items-start">
                <span className="font-semibold text-lg text-gray-800">
                  {userData2 ? (
                      <p>{userData2.firstname} {userData2.lastname}</p>
                  ) : (
                    <p>Chargement des données...</p>
                  )}
                </span>
                {userData2 ? (
                <span className="text-sm text-gray-500">{userData2.job}</span>
                ) : (
                  <p>Chargement des données...</p>
                )}
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
            <PencilIcon
              className="h-8 w-8 text-gray-700 cursor-pointer"
              onClick={toggleEditMode}
            />
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
                    } ${
                      data.isMultiLine
                        ? "whitespace-normal break-words"
                        : "whitespace-nowrap"
                    }`}
                  >
                    {isEditMode && data.field !== "wearRate" ? (
                      data.field === "files" ? (
                        <textarea
                          className={textareaStyle}
                          value={data.value.join("\n")}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
                        />
                      ) : (
                        <input
                          type="text"
                          value={data.value}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
                          className={inputStyle}
                        />
                      )
                    ) : data.isProgressBar ? (
                      // <div className="flex items-center justify-start">
                      //   <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                          <LinearProgressWithLabel value={data.value} />
                        /* </div>
                      </div> */
                    ) : data.field === "files" ? (
                      // File display logic
                      <div className="border-2 rounded-md border-gray-100 flex flex-col w-1/2 divide-y divide-gray-100">
                        {data.value.map((file, fileIndex) => (
                          <div
                            className="flex justify-between px-3 py-2"
                            key={fileIndex}
                          >
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
  );
}

export default UserProfile