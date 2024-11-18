import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="py3 sm:px6 flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 uppercase">
      <Link to="/" className="tracking-widest">
        Shop Fast
      </Link>

      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
