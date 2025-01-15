import './App.css'
import Advantages from './components/Advantages/Advantages'
import {Footer} from './components/footer/Footer'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import Paragraph from './components/paragraph/Paragraph'
import PersonalCard from './components/personalcard/PersonalCard'
// import Paragraph from './components/paragraph/Paragraph'
import SimpleHeading from './components/simpleheading/SimpleHeading'


function App() {
    return (
    <>
     <Menu/>
     <Header/> 
     <Paragraph/>
     <PersonalCard/>
     <Advantages/>
     <SimpleHeading/>
     <Footer/>
     
    </>
  )
}

export default App
