import React, { FunctionComponent } from "react"
import { useRouteMatch } from "react-router-dom"
import Page from "./Page"
import useDataContext from "../hooks/useDataContext"
import routeParams from "../types/route"
import { format } from "date-fns"
import Property from "./Property"

const Details: FunctionComponent = () => {
  const { params } = useRouteMatch<routeParams>()
  const data = useDataContext()
  const earthquakeDetails = data.data.features.find(
    (item) => item.id === params.id
  )
  console.log(earthquakeDetails, "earthquakeDetails")

  return (
    <Page>
      {!earthquakeDetails && <h1>Earthquake not found</h1>}
      {earthquakeDetails && (
        <>
          <h2 className={"details--title"}>{earthquakeDetails.properties.title}</h2>
          <Property title={"Title"} data={earthquakeDetails.properties.title} />
          <Property
            title={"Magnitude"}
            data={earthquakeDetails.properties.mag}
          />
          <Property
            title={"Time"}
            data={format(earthquakeDetails.properties.time, "PPP p")}
          />
          <Property
            title={"Status"}
            data={earthquakeDetails.properties.status}
          />
          <Property
            title={"Tsunami"}
            data={earthquakeDetails.properties.tsunami}
          />
          <Property title={"Type"} data={earthquakeDetails.properties.type} />
        </>
      )}
    </Page>
  )
}

export default Details
