// import { useSelector } from "react-redux";
// import CounterPage from "./components/CounterPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { routes } from "./routes";
import {BrowserRouter as Router , Switch,Route,Redirect} from 'react-router-dom'
import { connect } from "react-redux";
 

const mapStateToProps = state =>({
  dark: state.site.dark,
  user: state.auth.user
})



function App({dark,user}) {

 
  // const {dark} = useSelector(state => state.site) mapStateToProps kullandık
  // const {user} = useSelector(state => state.auth)

  
  return (

    <div className={dark ? 'dark' : 'light'}>
        {/* <CounterPage/> */}
       

        <Router>
           <Header/>
          <Switch>  
           {routes.map(route=>(
             <Route path={route.path} exact={route.exact} render={()=>{

              if(route.auth && !user) // storeda user yoksa
              {
                  return <Redirect to="/login"/>
              }
              return <route.component/>
             }}/>
             
             
           ))}


          </Switch>

        <Footer/>
        </Router>



    </div>
  );
}

export default connect(mapStateToProps)(App);
