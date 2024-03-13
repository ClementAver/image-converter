import styles from "@/styles/Dropbox.module.scss";

export default function Dropbox({
  callback,
}: {
  callback: (arg: FileList) => void;
}) {
  const content = () => {
    return "Drag your files here.";
  };

  const handleDragenter = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDragover = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();

    const dt = e.dataTransfer;
    const files = dt.files;

    callback(files);
  };

  return (
    <>
      <div
        draggable={true}
        className={styles.dropbox}
        onDragEnter={handleDragenter}
        onDragOver={handleDragover}
        onDrop={handleDrop}
      >
        {content()}
        <div className={styles.background}>{content()}</div>
        <div className={styles.content}>{content()}</div>
      </div>
    </>
  );
}
