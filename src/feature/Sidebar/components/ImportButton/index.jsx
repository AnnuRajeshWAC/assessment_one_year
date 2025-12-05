import React from "react";

import { useImportButton } from "./hooks/useImportButton";

const ImportButton = () => {
  const { handleClick, atom, handleFileChange, location, loading } =
    useImportButton();
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className=" pt-12 h-full">
      {!atom ? (
        <div>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf"
            className="bg-yellow-300"
          />
          {atom?.[0]?.name}
        </div>
      ) : (
        <div className="flex flex-col gap-3 text-lg tracking-tight p-3">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf"
            className="bg-yellow-300"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 mt-5 w-full">
        {Object.entries(atom).map(([key, value]) => (
          <div
            onClick={() => handleClick(key)}
            className={`${
              location.pathname.replace("%20", " ") === `/${key}`
                ? "bg-blue-300"
                : ""
            } py-3 `}
          >
            {key}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportButton;
