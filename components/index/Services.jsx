import styles from "../../styles/Home.module.css";
import { Card } from "../Card";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import { services } from "../data";

export const Services = ({ service }) => {
  const style =
    "group lg:w-[45vw] md:w-[40vw] w-full h-[30rem]  bg-current  transition delay-500 duration-1000 ease-in-out font-poppins grayscale ";

  const headStyle =" text-3xl font-bold text-white capitalize md:m-1 m-4 ";

  return (
    <section className={styles.services} id="services">
      <h1>Services</h1>
      <div className={styles.card_content}>
        {service.map((d) => {
          const { id, work, image } = d;
          return (
            <>
              
              <Card style={style} key={id}>
                <h1 className={headStyle}>{work}</h1>
                <Image src={image} layout="fill" objectFit="contain" />
              </Card>
            </>
          );
        })}
      </div>
    </section>
  );
};
