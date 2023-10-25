import { FC } from "react";

type DummyComponentProps = {
  name: string;
  description: string;
};

export const DummyComponent: FC<DummyComponentProps> = ({
  name,
  description,
}) => {
  return (
    <table className="border-[2px] border-dark-60 mx-auto ">
      <thead className="border-b-[2px] border-dark-60 ">
        <tr className="px-4 py-2 text-dark-100 text-center text-parL">
          <th className="px-4 py-2 border-r-[2px] border-dark-60">Name</th>
          <th className="px-4 py-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-dark-80 text-center text-parM">
          <td className="px-4 py-2 border-r-[2px] border-dark-60">{name}</td>
          <td className="px-4 py-2">{description}</td>
        </tr>
      </tbody>
    </table>
  );
};
