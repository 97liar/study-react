import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { useRouter } from 'next/dist/client/router'

const PostId = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div className={styles.container}>
      <Head> 
        <title>Index Page</title> 
      </Head>
      <Header />
      <div>{router.query.id}</div>
    </div>
  );
} 

export default PostId;