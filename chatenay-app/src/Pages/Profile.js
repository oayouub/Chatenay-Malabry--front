import React from 'react';
import { PencilIcon, ArrowLeftIcon } from '@heroicons/react/outline';

const UserProfile = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="bg-white p-8 w-full">
                <div className="flex items-center space-x-4 mb-6">
                    <ArrowLeftIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
                    <img className="h-16 w-16 rounded-full" src="../assets/Ellipse" alt="Jane Cooper" />
                    <div className="flex-grow">
                        <div className="flex flex-col items-start">
                            <span className="font-semibold text-lg text-gray-800">Jane Cooper</span>
                            <span className="text-sm text-gray-500">Ouvrière</span>
                        </div>
                        <PencilIcon className="h-6 w-6 text-gray-700 cursor-pointer self-end" />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 table-auto">

                        <tbody>
                            {createRow('Taux d\'usure', '80%', true)}
                            {createRow('Mail', 'jane.cooper@example.com')}
                            {createRow('Âge', '32 ans')}
                            {createRow('À propos', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur ultricies aliquam. Aenean dictum suscipit diam a sagittis. Duis efficitur eros aliquet urna semper feugiat. Aenean iaculis, enim ut suscipit ullamcorper, ex enim suscipit ligula, et dignissim lorem nibh eget erat. Phasellus suscipit tellus sed lorem posuere dignissim. Donec interdum vel leo sed tristique. Quisque nec neque nisi. Integer mollis finibus ligula non laoreet. Vivamus luctus, magna non faucibus pellentesque, mauris nunc congue metus, eget tincidunt lacus augue non mauris. Nunc lobortis, turpis et consectetur trist.', false, true)}
                            {createRow('Adresse', '72 rue Jean Charles, 75000 Paris')}
                            {createRow('Arrêt de travail (jour)', '150 jours')}
                            {createRow('Statut', 'Reconversion')}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6">
                    <p className="text-sm font-semibold text-gray-600 mb-2">Fichiers complémentaires</p>
                    <div className="flex">
                        <a href="/path-to-cv" className="text-blue-600 hover:text-blue-800 mr-4">CV.pdf</a>
                        <a href="/path-to-other-file" className="text-blue-600 hover:text-blue-800">NOM_FICHIER.pdf</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper function to create a table row
const createRow = (label, value, isProgressBar = false, isMultiLine = false) => (
    <tr className="border-b">
        <th scope="row" className={`py-4 px-6 bg-gray-50 font-medium text-gray-900 ${isProgressBar ? 'text-xl' : ''} min-w-max`} style={{ width: '30%' }}>{label}</th>
        <td className={`py-4 px-6 ${isMultiLine ? 'whitespace-normal break-words' : 'whitespace-nowrap'}`}>
            {isProgressBar ? (
                <div className="flex items-center justify-start">
                    <span className="text-lg font-semibold text-gray-600 mr-2">{value}</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-red-600 h-2.5 rounded-full" style={{ width: value }}></div>
                    </div>
                </div>
            ) : (
                value
            )}
        </td>
    </tr>
);


export default UserProfile;
