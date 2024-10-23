import { useState } from "react";
import "./styles.css";
import TopText from "./components/TopText";

export default function App() {

  const [filesToUpload, setFilesToUpload] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    filesToUpload.forEach((file) => console.log(file));
  }
  function handleFileChange(e) {
    const selectedFiles = Array.from(e.target.files); 
    const fileDetails = selectedFiles.map((file) => ({
      fileName: file.name,
      fileType: file.type,
      fileSize: file.size,
    }));
    setFilesToUpload(fileDetails);
  }
  return (
    <form onSubmit={handleSubmit}>
      <TopText />

      <input
        type="file" //filelist nesnesi oluşur.
        required
        multiple
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={handleFileChange}
      />

      <button>Upload </button>
    </form>
  );
}
