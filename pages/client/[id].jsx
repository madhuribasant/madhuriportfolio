import React, { useEffect, useState } from "react";
import Meta from "../../components/Meta";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { clientcontent } from "../../components/data";
import { Card } from "../../components/Card";
import ReactPlayer from "react-player";
import Link from "next/link";

const ClientPage = ({ clients }) => {
  const [isSSR, setIsSRR] = useState(true);


  useEffect(() => {
    setIsSRR(false);
  }, []);

  return (
    <>
      <Meta title="Client | Work" />
      <header className={styles.header}>
        <Link href="/"><a  className="px-6 py-1 bg-pink-50  bg-opacity-60 rounded-full font-semibold text-lg shadow-2xl shadow-white"> Back </a></Link>
        <h1>Works</h1>
      </header>
    <section className="p-10 mt-10 h-full">
      <div className={styles.client_card_content}>
          {clients.map((c, index) => {
            const { image, name, id } = c;
            const extension = image.split(".").pop();
            if (extension !== "mp4") {
              return (
                <Card style="w-96 h-96 relative " key={index}>
                  <Image
                    src={image}
                    layout="fill"
                    alt={name}
                    objectFit="contain"
                  />
                </Card>
              );
            } else {
              return (
                <>
                  <Card style="w-96 h-96 relative" key={index}>
                    {isSSR ? null : <ReactPlayer controls url={image} className="object-contain max-w-full max-h-full"/>}
                  </Card>
                </>
              );
            }
          })}
       </div>
      </section>
    </>
  );
};

export async function getStaticProps({ params }) {
  const clients = clientcontent.filter((s) => s.cid.toString() === params.id);
  return {
    props: {
      clients,
    },
  };
}
export async function getStaticPaths() {
  const paths = clientcontent.map((c) => ({
    params: { id: c.cid.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default ClientPage;
