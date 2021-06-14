import React from "react"
import "./App.css"
import useData from "./hooks/useData"
import { Spinner } from "reactstrap"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { DataContext } from "./hooks/useDataContext"
import Home from "./components/Home"
import "./styles/style.scss"
import Details from "./components/Details"
import Profile from "./components/Profile"

function App() {
  const [siteData, loading] = useData()

  // do not display anything other than a spinner while loading
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
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </DataContext.Provider>
    </BrowserRouter>
  )
}

export default App
