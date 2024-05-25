
import Link from "next/link";

const Header = () => {
  return (
    <header>
        <div className="hidden md:flex items-center justify-between">
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link href={'/'} className="text-primary font-semibold text-2xl">
                    Easy Foods
                </Link>
                <Link href={'/'} className="hover:-translate-y-2 duration-500 transition-all">Home</Link>
                <Link href={'/menu'} className="hover:-translate-y-2 duration-500 transition-all">Menu</Link>
                <Link href={'/#about'} className="hover:-translate-y-2 duration-500 transition-all">About</Link>
                <Link href={'/#contact'} className="hover:-translate-y-2 duration-500 transition-all">Contact</Link>
            </nav>
            <nav className="flex items-center gap-4 text-gray-500 font-semibold">
                <Link href={''} className="btn-primary">Login</Link>
            </nav>
      </div>
    </header>
  )
}

export default Header;