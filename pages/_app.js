
import Layout from '../components/Layout'
import '../styles/navigation.css'

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
 <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
