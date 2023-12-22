import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";

const DragAndDrop = ({
  handleDrop,
  formData,
  handleDragOver,
  handleRemoveFile,
  handleClickFiles,
  handleSelectFiles,
  fileInputRef,
}) => {
  return (
    <>
      <div
        className="drop-zone border-dashed border-2 border-gray-300 p-4 mt-2 cursor-pointer"
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
          <div
            className="flex justify-center flex-col gap-4"
            onClick={handleClickFiles}
          >
            <NoteAddOutlinedIcon className="text-gray-500 mx-auto w-10 h-10" />
            <p className="text-gray-500 w-1/2 mx-auto text-center">
              Glissez et déposez des fichiers ici ou{" "}
              <span className="file-select-text text-bleu cursor-pointer">
                cliquez
              </span>{" "}
              pour sélectionner des fichiers.
            </p>
          </div>
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
