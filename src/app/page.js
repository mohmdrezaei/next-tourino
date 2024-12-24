import HomePage from "src/components/ui/templates/HomePage";

async function Home({searchParams}) {
 const searchTerm = new URLSearchParams(searchParams).toString()
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour?${searchTerm}`, {
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((data) => data);
    
  return <HomePage data={data} />;
}

export default Home;
