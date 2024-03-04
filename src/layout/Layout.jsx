import { Outlet } from 'react-router-dom'
import SnapHeader from './SnapHeader'
import SnapFooter from './SnapFooter'

function Layout() {
  return (
    <>
      <div>
        <SnapHeader/>
          <Outlet />
        <SnapFooter/>
      </div>

    </>
  )
}

export default Layout
