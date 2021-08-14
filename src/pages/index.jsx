import Head from 'next/head'
import Image from 'next/image'
import styles from 'src/styles/Home.module.css'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { Header } from 'src/components/Header'

export default function Home(props) {

  return (
    <div className={styles.container}>
      <Head> 
        <title>Index Page</title> 
      </Head>
      <Header />
      
      {props.isShow ? <h1>{props.count}</h1> : null}
      <button href="" onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>

      <input type="text" value={props.ext} onChange={props.handleChange}/>
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map(item => {
          return (
            <li key={item}>{item}</li>
          )
        }
      )}
      </ul>

      <Main page="index" />
      <Footer />
    </div>
  );
} 
