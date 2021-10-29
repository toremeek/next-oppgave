import Image from "next/image";
import Head from "next/head";
function Home () {
  return(
    <>
    <Image alt="tech-bilde"
      src={"https://images.unsplash.com/photo-1488229297570-58520851e868?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2369&q=80"}
      layout="responsive"
      width={1000}
      height={200} />
      <Head>
      <h1>Lærer meg mer om Next.js</h1>
      </Head>
      <p>Virker veldig bra så langt</p>
      
      </>
  )
}

export default Home;
