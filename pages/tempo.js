function Tempo(props) {
  console.log("> Passando pelo frontend")
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString()
  return (
    <div>
      <div>{dynamicDateString} (dinâmico)</div>
      <div>{props.staticDateString} (estático)</div>
    </div>
  )
}

export async function getStaticProps() {
  console.log("> Passando pelo getStaticProps")
  await delay(5000);
  const staticDate = new Date();
  const staticDateString = staticDate.toGMTString()

  return {
    props: {
      staticDateString
    }, revalidate: 1
  }
}

export default Tempo
