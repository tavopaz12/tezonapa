import LayoutAdmin from '@/components/Admin/LayoutAdmin'
import DynamicCalendar from '@/components/UI/calendar'
import { getCitas } from '@/services/citas/getCitas'
import React from 'react'

export default function citas({ citas }) {
  return (
    <LayoutAdmin title="Eventos - Dashboard | H. Ayuntamiento Tezonapa, Ver">
      <DynamicCalendar fechas={citas.fechas} />
    </LayoutAdmin>
  )
}

export async function getServerSideProps(context) {
  const { area } = context.query

  const citas = await getCitas(area)

  return {
    props: {
      citas,
    },
  }
}
