import LayoutAdmin from '@/components/Admin/LayoutAdmin'
import DynamicCalendar from '@/components/UI/calendar'
import React from 'react'

export default function citas() {
  return (
    <LayoutAdmin title="Eventos - Dashboard | H. Ayuntamiento Tezonapa, Ver">
      <DynamicCalendar />
    </LayoutAdmin>
  )
}
