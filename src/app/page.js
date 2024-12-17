import HomePage from "src/components/ui/templates/HomePage";

async function Home({searchParams}) {
 
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((data) => data);
    let filteredData = data;

    if (searchParams.origin) {
      filteredData = filteredData.filter((item) =>
        item.origin.name.toLowerCase() === searchParams.origin
      );
    }
  
    if (searchParams.destination) {
      filteredData = filteredData.filter((item) =>
        item.destination.name.toLowerCase() === searchParams.destination
      );
    }
  
    if (searchParams.date) {
      filteredData = filteredData.filter((item) =>
        item.startDate === searchParams.date
      );
    }
  return <HomePage data={data} />;
}

export default Home;
