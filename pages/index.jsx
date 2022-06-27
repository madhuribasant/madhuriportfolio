import Meta from "../components/Meta";
import { Navbar } from "../components/index/Navbar";
import { Hero } from "../components/index/Hero";
import Client from "../components/index/Client";
import styles from "../styles/Home.module.css";
import { Services } from "../components/index/Services";
import { Contact } from "../components/index/Contact";
import {clients, services} from '../components/data'
import Footer from "../components/index/Footer";

export default function Home({service ,client}) {
  
  return (
    <main className={styles.main}>
      <Meta title="Portfolio | Madhuri Basant" />
      <Navbar />
      <Hero />
      <Client client={client} />
      <Services service={service} />
      <Contact />
      <Footer/>
    </main>
  );
}
export async function getStaticProps() {
  const service = services.map((s) => s);
  const client = clients.map((c)=>c)
  return {
    props: {service , client},
  };
}
