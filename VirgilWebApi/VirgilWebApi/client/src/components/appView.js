import Home from "./home/Home";
import React from "react"


const AppView = () => {
    
    
    return (
       <main>
           <Switch>
            <Route path="/" exact>
                <Home />
            </Route>


           </Switch>
       </main> 
    )
}



export default AppView;