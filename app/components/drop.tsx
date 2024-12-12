import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Drop({className, name}: {className: string; name: string;}) {
  return (
    <Dropdown className={` ${className}`}>
      <DropdownTrigger>
        <Button className="flex" variant="bordered">{name}<IoMdArrowDropdown/></Button>
      </DropdownTrigger>
      <DropdownMenu className="bg-[#0b255f] px-4" aria-label="Example with disabled actions" disabledKeys={["filipino", "spanish","japan", "chinese"]}>
        <DropdownItem key="english">English</DropdownItem>
        <DropdownItem key="filipino" className="text-gray-400">Filipino</DropdownItem>
        <DropdownItem key="spanish" className="text-gray-400">Spanish</DropdownItem>
        <DropdownItem key="japan" className="text-gray-400">日本語</DropdownItem>
        <DropdownItem key="chinese" className="text-gray-400">汉字/漢字</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
