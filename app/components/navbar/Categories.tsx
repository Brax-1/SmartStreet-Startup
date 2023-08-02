'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { BsFillBuildingFill } from 'react-icons/bs';
import { MdOutlineDirectionsBike } from 'react-icons/md';
import { MdFastfood } from 'react-icons/md';
import { GiWaterDrop } from 'react-icons/gi';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Room',
    icon: BsFillBuildingFill,
    description: 'Find Your Perfect Nest: Rent a Room with Us!',
  },
  {
    label: 'Bike',
    icon: MdOutlineDirectionsBike,
    description: 'Two Wheels, Endless Possibilities: Rent a Bike Today!',
  },
  {
    label: 'Food',
    icon: MdFastfood,
    description: 'Savor the Flavor: Delightful Food Service at Your Doorstep!'
  },
  {
    label: 'Water',
    icon: GiWaterDrop,
    description: 'Pure Refreshment, Delivered: Quench Your Thirst with Our Water Service!'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
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
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;