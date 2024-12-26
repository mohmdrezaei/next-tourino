import QueryString from "qs";
import HomePage from "src/components/ui/templates/HomePage";

async function Home({searchParams}) {
 const searchTerm = QueryString.stringify(searchParams)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour?${searchTerm}`, {
    cache: "no-store",})
    const data = await res.json() 
    
  return <HomePage data={data} />;
}

export default Home;
