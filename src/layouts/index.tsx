import Navbar from "../components/Navbar"

interface Props {
    children: React.ReactNode
}
const Layout = ({children}:Props) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <main className="flex-1 p-4">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout