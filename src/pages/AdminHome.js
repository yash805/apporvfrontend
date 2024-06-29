import Navbar from "../features/navbar/Navbar"
import AdminProductList from "../features/product copy/components/AdminProductList"

const AdminHome = () => {
  return (
    <div>
      <Navbar>
        <AdminProductList></AdminProductList>
      </Navbar>
    </div>
  )
}

export default AdminHome
