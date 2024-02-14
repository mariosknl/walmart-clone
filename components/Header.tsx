import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { Search } from "lucide-react";

function Header() {
  return (
    <header className="flex bg-walmart">
      <Link href="/" className="">
        <Image
          src="https://links.papareact.com/yur"
          alt="Walmart clone"
          width={150}
          height={150}
        />
      </Link>

      <form className="flex items-center bg-white rouded-full w-full flex-1">
        <input
          type="text"
          placeholder="Search Everything..."
          className="flex-1"
        />
        <button>
          <Search className="rounded-full h-10" />
        </button>
      </form>
    </header>
  );
}

export default Header;
