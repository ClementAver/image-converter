import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { fileURLToPath } from "url";
import styles from "@/styles/Cover.module.scss";

export default function Cover({ file }: { file: File }) {
  const [src, setSrc] = useState<string>("");

  const reader = new FileReader();
  reader.onload = (e) => {
    if (e.target) setSrc(e.target.result as string);
  };

  reader.readAsDataURL(file);

  return (
    <figure>
      <img
        src={src}
        className={styles.cover}
        alt={file.name}
      />
      <figcaption>{file.name}</figcaption>
    </figure>
  );
}
