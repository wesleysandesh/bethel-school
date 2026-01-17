import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl text-blue-900">
          Bethel High School
        </div>

        <nav className="space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/activities">Activities</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
