import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/sobre">
        Acessar página sobre
      </Link>
    </div >
  )
}

export default Home;
