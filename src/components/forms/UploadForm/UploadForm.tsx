import Dropbox from "@/components/Dropbox/Dropbox";
import { useState } from "react";

export default function UploadForm() {
  const [files, setFiles] = useState<FileList | null>();

  const handleUpload = (files: FileList) => {
    setFiles(files);
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
    }
  };

  return (
    <>
      <Dropbox data={files} callback={handleUpload} />
    </>
  );
}
