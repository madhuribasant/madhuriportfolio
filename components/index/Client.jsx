import styles from "../../styles/Home.module.css";
import { Card } from "../Card";
import Image from "next/image";

import Link from "next/link";

const Client = ({ client }) => {
  const style =
    "group lg:w-[20rem] md:w-[20rem] w-full h-[20rem]   bg-current  hover:grayscale-0 hover:brightness-100  transition delay-500 duration-1000 ease-in-out font-poppins grayscale ";

  const linkStyle =
    "group-hover:visible group-hover:text-slate-400 invisible transition duration-1000 ease-in-out font-semibold flex items-center group-hover:-translate-y-2   cursor-pointer";

  return (
    <section className={styles.client} id="client">
      <h1>Clients</h1>
      <div className={styles.client_card_content}>
        {client.map((c) => {
          const { image, name, id } = c;
          return (
              <Card style={style} key={id}>
            <Link href="/client/[id]" as={`/client/${id}`}>
                <Image
                  src={image}
                  layout="fill"
                  objectFit="contain"
                  alt={name}
                />
            </Link>
              </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Client;
