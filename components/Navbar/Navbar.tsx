import { RouteId } from '@/utils/route';
import Link from 'next/link';
import { PiTriangleLight } from 'react-icons/pi';
import { MobileMenu } from './MobileMenu';
import { Dictionary } from '@/common/types';
import { getNavItems } from './Navbar.utils';

interface NavbarProps {
  dict: Dictionary;
}

export const Navbar = async ({ dict }: NavbarProps) => {
  const navItems = getNavItems(dict);

  return (
    <header className="navbar pl-0">
      <div className="navbar-start">
        <MobileMenu items={navItems} />
        <Link className="ml-2" href={RouteId.root}>
          <p className="text-xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 text-transparent bg-clip-text">
            DigitizerSpace
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex gap-8">
        {navItems.map((navItem) => {
          return navItem.items ? (
            <div key={navItem.id} className="group">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                {navItem.label}
                <PiTriangleLight className="text-primary rotate-180 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <ul
                tabIndex={0}
                className="p-2 z-[1] hidden menu absolute shadow bg-neutral rounded-lg w-52 group-hover:block"
              >
                {navItem.items.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.url ?? RouteId.root}>{item.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <Link key={navItem.id} href={navItem.url ?? RouteId.root}>
              <button className="btn btn-ghost">{navItem.label}</button>
            </Link>
          );
        })}
      </div>
      <div className="navbar-end">
        <Link className="ml-4" href={RouteId.contact}>
          <button className="btn btn-neutral btn-outline border-primary">
            {dict.button.contact}
          </button>
        </Link>
      </div>
    </header>
  );
};