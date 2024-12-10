export async function generateStaticParams(){
  const tours = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`)
  const data =await tours.json()
  return data.map(tour=>({
    tourId : tour.id
  }))
}

import TourDetailsPage from '@/pages/TourDetailsPage'

async function TourDetails({params}) {
      const tour = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour/${params.tourId}`)
      const data =await tour.json()
  return (
    <TourDetailsPage data={data} />
  )
}

export default TourDetails