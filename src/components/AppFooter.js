import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  const xmas95 = new Date()
  const fullYear = xmas95.getFullYear()
  return (
    <CFooter className="px-4">
      <div>
        <span className="ms-1">&copy;{fullYear}</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by Zid</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
