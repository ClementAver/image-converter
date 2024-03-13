import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import UploadForm from "@/components/forms/UploadForm/UploadForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Image Converter</title>
        <meta
          name="description"
          content="Converts any image to Portable Network Graphics (PNG) file extension."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <UploadForm />
      </main>
    </>
  );
}
