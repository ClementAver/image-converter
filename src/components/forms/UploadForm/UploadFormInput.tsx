import Dropbox from "@/components/Dropbox/Dropbox";
import { useState } from "react";

export default function UploadForm() {
  const [files, setFiles] = useState<FileList | null>();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.currentTarget.files);
  };

  // Calcul de la taille totale
  let numberOfBytes = 0;
  if (files && files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      numberOfBytes += files[i].size;
    }
  }

  // Approximation à l'unité humaine la plus proche
  const units = ["o", "Ko", "Mo", "Go", "To", "Po", "Eo", "Zo", "Yo"];
  const exponent = Math.min(
    Math.floor(Math.log(numberOfBytes) / Math.log(1024)),
    units.length - 1
  );
  const approx = numberOfBytes / 1024 ** exponent;
  const output =
    exponent === 0
      ? `${numberOfBytes} octets`
      : `${approx.toFixed(3)} ${units[exponent]} (${numberOfBytes} octets)`;

  return (
    <form>
      <div>
        <input
          onChange={handleUpload}
          type="file"
          id="uploadInput"
          multiple
        />
        <label htmlFor="fileNum">Fichiers sélectionnés&nbsp;:</label>
        <output id="fileNum">{files ? files.length : "0"}</output>;
        <label htmlFor="fileSize">Taille totale&nbsp;:</label>
        <output id="fileSize">
          {output && output.indexOf("N") === 0 ? 0 : output}
        </output>
      </div>
      <div>
        <input
          type="submit"
          value="Envoyer des fichiers"
        />
      </div>
    </form>
  );
}
