import { Switch, Route } from "react-router-dom"
import {useState, useEffect} from "react"
import Home from "../Pages/Home"
// import Signup from "../pages/Signup"
// import Login from "../pages/Login/index"
// import Dashboard from "../pages/Dashboard"

const Routes = () => {

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@Doit:token"))
        
        if (token) {
            return setAuthenticated(true)
        }
    },[authenticated])


    return(
    <Switch>
            <Route exact path="/">
                <Home authenticated = {authenticated} />
            </Route>
            <Route path = "/signup">
                {/* <Signup authenticated = {authenticated} /> */}
            </Route>
            <Route path = "/login">
                {/* <Login authenticated = {authenticated} 
                    setAuthenticated = {setAuthenticated} /> */}
            </Route>
            <Route path = "/dashboard" >
                {/* <Dashboard authenticated = {authenticated} /> */}
            </Route>
    </Switch>
    )
}
export default Routes