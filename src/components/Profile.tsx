import React, { FunctionComponent } from "react"
import useDataContext from "../hooks/useDataContext"
import Page from "./Page"
import Details from "./Details"
import Property from "./Property"

const Profile: FunctionComponent = () => {
  const { profile } = useDataContext()

  console.log(profile, "profile")
  return (
    <Page>
      <h2>Profile</h2>
      <div className={"profile"}>
        <div className={"profile-left"}>
          <img
            src={profile.avatarImage}
            className={"profile--avatar"}
            alt={"profile image"}
          />
        </div>
        <div className={"profile-right"}>
          <Property
            title={"First name"}
            data={profile.firstName}
            isShort={true}
          />
          <Property
            title={"Last name"}
            data={profile.lastName}
            isShort={true}
          />
          <Property title={"Phone"} data={profile.phone} />
          <Property
            title={"Email"}
            data={<a href={`mailto:${profile.email}`}>{profile.email}</a>}
            isShort={true}
          />
          <Property title={"Bio"} data={profile.bio} isShort={true} />
        </div>
      </div>
    </Page>
  )
}

export default Profile
