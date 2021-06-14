import React from "react"
import Page from "./Page"
import useDataContext from "../hooks/useDataContext"
import BootstrapTable, { SortOrder } from "react-bootstrap-table-next"
import { Link } from "react-router-dom"
import { format } from "date-fns"

const Home = () => {
  const { data } = useDataContext()
  const defaultSorted: [{ dataField: string; order: SortOrder }] = [
    {
      dataField: "properties.time",
      order: "asc",
    },
  ]

  // columns declaration to be used with BootstrapTable
  const columns = [
    {
      dataField: "properties.title",
      text: "Title",
      headerClasses: "header header-title",
      align: "left",
      sort: true,
      formatter: (cell: any, row: any) => (
        <Link to={`details/${row.id}`} className={"details-cell"}>
          {cell}
        </Link>
      ),
    },
    {
      dataField: "properties.mag",
      text: "Magnitude",
      headerClasses: "header",
      sort: true,
    },
    {
      dataField: "properties.time",
      text: "Time",
      headerClasses: "header",
      sort: true,
      formatter: (cell: Date) => (
        <span className={"details-cell"}>{format(cell, "PPP p")}</span>
      ),
    },
  ]
  return (
    <Page>
      <h2>{data.metadata.title}</h2>
      <BootstrapTable
        data={data.features}
        columns={columns}
        keyField="id"
        classes={"earthquake-table"}
        defaultSorted={defaultSorted}
      />
    </Page>
  )
}

export default Home
