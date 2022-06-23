import useProtectedPage from "../hooks/useProtectedPage"

const AdminHomePage = () => {
  useProtectedPage()

  return (
    <div>AdminHomePage</div>
  )
}

export default AdminHomePage