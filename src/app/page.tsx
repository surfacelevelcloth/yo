import Link from "next/link"

const Home = () => {
  const tags = ["Lone", "Test", "Calm", "tirk", "birk", "pops"]

  return (
    <>
      <h1>Home</h1>

      <div className="flex w-full flex-wrap items-center justify-center">
        {tags.map((name) => {
          return (
            <div
              key={name}
              className="m-3 h-52 w-52 bg-slate-200 p-3 text-center"
            >
              <Link href={"/tag/" + name} className="inline-block w-min">
                <h2 className="text-lg">{name}</h2>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
