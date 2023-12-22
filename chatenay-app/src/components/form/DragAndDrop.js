const DragAndDrop = ({handleDrop, formData, handleDragOver, handleRemoveFile, handleClickFiles, handleSelectFiles, fileInputRef}) => {
  return (
    <>
      <div
        className="drop-zone border-dashed border-2 border-gray-300 p-4 mt-2"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {formData.zoneDeDepot.length > 0 ? (
          <ul>
            {formData.zoneDeDepot.map((file, index) => (
              <li key={index} className="text-gray-700">
                {file.name}{" "}
                <button
                  className="text-red-500 underline"
                  type="button"
                  onClick={() => handleRemoveFile(index)}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            Glissez et déposez des fichiers ici ou{" "}
            <span
              className="file-select-text text-blue-500 cursor-pointer"
              onClick={handleClickFiles}
            >
              cliquez
            </span>{" "}
            pour sélectionner des fichiers .
          </p>
        )}
      </div>
      <input
        type="file"
        name="zoneDeDepot"
        onChange={handleSelectFiles}
        multiple
        className="hidden"
        ref={fileInputRef}
      />
    </>
  );
};

export default DragAndDrop;