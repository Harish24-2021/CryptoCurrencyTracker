import React from 'react'
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import CoinPage from './pages/CoinPage'
import {makeStyles} from '@material-ui/core'



const App = () => {

//using useStyles from material ui to design compoenents instead of writing seperate css 
  const useStyles = makeStyles(()=> ({
    App: {
  
      backgroundColor: "black",
      color: 'white',
      minHeight: '100vh',

    }
  }) )
  
  const classes = useStyles()
  


  return (
    <div className={classes.App}>
       

<Router>


<Routes>
<Route path="/"  element ={<HomePage/>}></Route>

<Route  path="/coins/:id" element={<CoinPage/>} />

</Routes>
 

</Router>

    
   </div>
  )
}

export default App