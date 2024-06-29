
import Navbar from "../features/navbar/Navbar"

import UserProfile from "../features/user/components/UserProfile"

const UserProfilePage = () => {
  return (
    <div>
      <Navbar>
        <h1 className="mx-auto text-4xl">My Profile</h1>
        <UserProfile></UserProfile>
      </Navbar>
    </div>
  )
}

export default UserProfilePage
