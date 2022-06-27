import Head from "next/head";


const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/x-icon" href="/favicon.jpg" className="rounded-full" />

    </Head>
  );
};

Meta.defaultProps={
    title:'Index',
    description:'This is Madhuri Basant .',
    keywords :'Web development , graphic design , product design'
}

export default Meta;
