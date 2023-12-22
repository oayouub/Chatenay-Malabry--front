const AvatarInput = ({ avatar, handleFileChange, selectedFile }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="photo"
        className="block text-sm font-semibold text-gray-600"
      >
        Photo
      </label>
      <div className="mt-2 flex items-center gap-4">
        <img src={avatar} alt="Avatar" />
        <label htmlFor="file-input" className="cursor-pointer">
          <div className="text-gray-500 border border-gray-500 py-1 px-3 transition-all rounded-md hover:bg-gray-500 hover:text-white">
            Sélectionner
          </div>
          <input
            type="file"
            name="photo"
            id="file-input"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
        {selectedFile && (
          <span className="text-sm text-gray-500">{selectedFile.name}</span>
        )}
      </div>
    </div>
  );
};

export default AvatarInput;