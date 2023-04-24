import Link from "next/link";

function Home() {
  return (
    <div>
      <div>Home</div>
      <Link href="/sobre">
        Acessar página sobre
      </Link>
    </div >
  )
}

export default Home;
