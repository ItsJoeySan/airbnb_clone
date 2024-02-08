"use client";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is in the countryside!",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "This property is countryside!",
  },
  {
    label: "Pools",
    icon: TbPool,
    desciption: "This property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    desciption: "This property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    desciption: "This property is is close to lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    desciption: "This property has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    desciption: "This property is in a castle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    desciption: "This property has camping activities!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    desciption: "This property has camping activities!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    desciption: "This property is in a cave!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    desciption: "This property is in the desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    desciption: "This property is in the barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    desciption: "This property is luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <>
      <Container>
        <div
          className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
        "
        >
          {categories.map((item) => (
            <CategoryBox
              key={item.label}
              label={item.label}
              selected={category === item.label}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Categories;
