import styles from "@/styles/Dropbox.module.scss";
import Cover from "../Cover/Cover";
import { useEffect, useState } from "react";

export default function Dropbox({
  data,
  callback,
}: {
  data: FileList | null | undefined;
  callback: (arg: FileList) => void;
}) {
  const filesIterable = [];

  if (data) {
    for (let i = 0; i < data.length; i++) {
      filesIterable.push(data[i]);
    }
  }

  const content =
    filesIterable.length > 0
      ? filesIterable.map((file, index) => (
          <Cover
            key={index}
            file={file}
          />
        ))
      : "Drag your files here.";

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

  console.log(filesIterable);

  return (
    <>
      <div
        draggable={true}
        className={styles.dropbox}
        onDragEnter={handleDragenter}
        onDragOver={handleDragover}
        onDrop={handleDrop}
      >
        {content}
        <div className={styles.background}>{content}</div>
        <div className={styles.content}>{content}</div>
      </div>
    </>
  );
}
