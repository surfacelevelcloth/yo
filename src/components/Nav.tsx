import Link from "next/link"

const Nav = () => {
  return (
    <>
      <nav className="flex h-20 items-center bg-slate-400">
        <Link href={"/"} className="p-2 text-2xl">
          Youthful Opulence
        </Link>
      </nav>
    </>
  )
}

export default Nav
