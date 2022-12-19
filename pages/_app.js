import '../styles/globals.css'
import Headers from './Componets/Headers'
import Footer from './Componets/Footer'

function MyApp({ Component, pageProps }) {
  return<>
  <Headers/>  
  <Component {...pageProps} />
  <Footer/>  

  </>
}

export default MyApp
