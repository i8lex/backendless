import clsx from "clsx";
import data from "../../data/tabs.json";
import { Link, useLocation } from "react-router-dom";

export const GeneralHeader = () => {
  const { pathname } = useLocation();
  const sortedData = data.sort((a, b) => a.order - b.order);
  return (
    <header className="flex justify-center bg-softGreen px-4 py-2 tablet:px-6">
      <nav className="flex w-full items-center p-0 gap-6 desktop:gap-16">
        <div className=" desktop:space-x-8 space-x-4 text-quot font-medium flex desktop:text-parS">
          {sortedData.map(({ id, title }) => {
            const isCurrent = id === pathname.replace("/", "");
            return (
              <Link
                key={id}
                className={clsx(
                  "relative rounded-md py-1 px-2 focus:border-green-80 focus:outline-none focus:ring-2 focus:ring-green-80",
                  isCurrent
                    ? "bg-white shadow-sm shadow-dark-60 text-darkSkyBlue-90 "
                    : "bg-softGreen shadow-md shadow-dark-60 text-darkSkyBlue-60 hover:shadow-sm hover:shadow-dark-60 hover:bg-darkSkyBlue-20",
                )}
                to={`/${id}`}
              >
                <div>{title}</div>
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
