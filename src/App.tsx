import React, { useContext } from "react"
import "./App.css"
import useData from "./hooks/useData"
import Header from "./components/Header"
import { Spinner } from "reactstrap"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import useDataContext, { DataContext } from "./hooks/useDataContext"
import Home from "./components/Home";

function App() {
  const [siteData, loading] = useData()
  console.log(siteData, "siteData")
  if (loading) {
    return <Spinner />
  }
  return (
    <BrowserRouter>
      <DataContext.Provider value={siteData}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/*<Route path="/profile">*/}
          {/*  <Profile />*/}
          {/*</Route>*/}
          {/*<Route path="/dashboard">*/}
          {/*  <Earthquake />*/}
          {/*</Route>*/}
        </Switch>
      </DataContext.Provider>
    </BrowserRouter>
  )
}

export default App
