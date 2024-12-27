import TourDetailsPage from "@/pages/TourDetailsPage";

async function TourDetails({ params }) {
  const tour = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/tour/${params.tourId}`,
    { cache: "no-store" }
  );
  const data = await tour.json();
  return <TourDetailsPage tour={data} id = {tour.id} />;
}

export default TourDetails;
