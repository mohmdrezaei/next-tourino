import DashboardSidebar from '@/layouts/DashboardSidebar'
import React from 'react'

function ProfileLayout({children}) {
  return (
    <DashboardSidebar>{children}</DashboardSidebar>
  )
}

export default ProfileLayout    