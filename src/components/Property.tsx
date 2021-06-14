import React, { FunctionComponent, ReactNode } from "react"
import classNames from "classnames";

/**
 * Property is a dumb component that is used to display a coupled title<->data bit
 * title - the title to display, in bold
 * data - the data associated with the title
 * isShort - shortens the data column size if true. used to accommodate the specifics of the Profile design
 */
type PropertyProps = { title: string; data: ReactNode; isShort?: boolean }
const Property: FunctionComponent<PropertyProps> = ({
  title,
  data,
  isShort = false,
}) => (
  <div className={classNames("property", {"property__short": isShort})}>
    <span className={"property--title"}>{title}</span>
    <span className={"property--data"}>{data}</span>
  </div>
)

export default Property
