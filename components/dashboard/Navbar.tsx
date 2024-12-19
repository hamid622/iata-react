import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Briefcase,
  ChevronDown,
  LogOut,
  Monitor,
  SquarePen,
  User,
  UserRoundPlus,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navbar = () => {
  return (
    <div className="flex justify-between max-[990px]:justify-center max-[990px]:gap-4 items-center bg-primary text-white py-3 px-[24px] fixed z-30 top-0 left-0 w-screen ">
      <Link href="/dashboard">Dashboard</Link>

      <div className="flex gap-2 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-[45px]">
              <SquarePen />
              Create New
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuGroup>
              <Link href="/bookings/add">
                <DropdownMenuItem className="text-base !text-[#262a2e] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>Booking</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/quotations/add">
                <DropdownMenuItem className="text-base !text-[#262a2e] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"></path>
                    <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"></path>
                  </svg>
                  <span>Quotation</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/invoices/add">
                <DropdownMenuItem className="text-base !text-[#262a2e] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z"></path>
                    <path d="M13 3v6h6"></path>
                  </svg>
                  <span>Invoice</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/tickets/add">
                <DropdownMenuItem className="text-base !text-[#262a2e] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <span>Ticket</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/users/add">
                <DropdownMenuItem className="text-base !text-[#262a2e] cursor-pointer">
                  <UserRoundPlus />
                  <span>User</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="max-md:hidden">
          <Select defaultValue="usd">
            <SelectTrigger className="bg-[#282828] gap-[2px] h-[45px] w-fit">
              <div className="flex flex-col">
                <span className="text-xs">Currency</span>
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  value="usd"
                  className="font-normal [&[data-state=checked]]:font-bold"
                >
                  USD
                </SelectItem>
                <SelectItem
                  value="pkr"
                  className="font-normal [&[data-state=checked]]:font-bold"
                >
                  PKR
                </SelectItem>
                <SelectItem
                  value="sar"
                  className="font-normal [&[data-state=checked]]:font-bold"
                >
                  SAR
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="max-md:hidden">
          <Select defaultValue="english">
            <SelectTrigger className=" bg-[#282828] gap-[2px] h-[45px] w-fit">
              <div className="flex flex-col">
                <span className="text-xs">Language</span>
                <SelectValue className="" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  value="english"
                  className="font-normal [&[data-state=checked]]:font-bold"
                >
                  English
                </SelectItem>
                <SelectItem
                  value="french"
                  className="font-normal [&[data-state=checked]]:font-bold"
                >
                  French
                </SelectItem>
                <SelectItem
                  value="urdu"
                  className="font-normal [&[data-state=checked]]:font-bold"
                >
                  Urdu
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button className="h-[45px]">
          <Link href="/billing" className="flex gap-2 items-center">
            <div>
              <svg
                className="!h-[30px] !w-[30px]"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17" cy="17" r="17" fill="#fff"></circle>
                <path
                  d="M12.885 8.63013C10.5932 8.63013 8.73535 10.4825 8.73535 12.7674V22.3958C8.73535 22.866 8.92272 23.317 9.25624 23.6495C9.58976 23.982 10.0421 24.1689 10.5138 24.1689L22.0287 24.1688C22.5003 24.1688 22.9526 23.982 23.2861 23.6495C23.6197 23.317 23.8071 22.866 23.8071 22.3957V21.3128V15.2042V14.1212C23.8071 13.6509 23.6197 13.1999 23.2861 12.8674C22.9526 12.5348 22.5003 12.348 22.0287 12.348H21.7752C21.7523 12.3502 21.7291 12.3513 21.7056 12.3513H12.7137C12.3044 12.3513 11.9727 12.0205 11.9727 11.6125C11.9727 11.2044 12.3044 10.8737 12.7137 10.8737H21.1844V9.22117C21.1844 8.89474 20.9189 8.63013 20.5916 8.63013H12.885Z"
                  style={{ fill: "#000" }}
                ></path>
                <path
                  d="M24.4603 16.6819H20.3106C19.9832 16.6819 19.7178 16.9172 19.7178 17.2074V19.3097C19.7178 19.5999 19.9832 19.8353 20.3106 19.8353H24.4603C24.7877 19.8353 25.0531 19.5999 25.0531 19.3097V17.2074C25.0531 16.9172 24.7877 16.6819 24.4603 16.6819Z"
                  fill="#fff"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.1844 12.3514V10.8738H12.7137C12.3044 10.8738 11.9727 11.2045 11.9727 11.6126C11.9727 12.0206 12.3044 12.3514 12.7137 12.3514H21.1844Z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="font-black text-[12px]">Balance</div>
              <div>
                <span className="text-[12px]">USD</span>{" "}
                <span className="font-black text-xs">0.00</span>
              </div>
            </div>
          </Link>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="h-[45px] p-1 hover:bg-transparent"
            >
              <Avatar className="bg-transparent">
                <AvatarImage src="https://github.com/shadcn.pn" alt="@shadcn" />
                <AvatarFallback className="bg-transparent font-black text-base">
                  QH
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel className="text-[#9e9e9e] font-[500]">
              Manage Account
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="/dashboard">
                <DropdownMenuItem className="cursor-pointer">
                  <Monitor />
                  <span className="text-base">Dashboard</span>
                </DropdownMenuItem>
              </Link>
              <Link href="/profile">
                <DropdownMenuItem className="cursor-pointer">
                  <User />
                  <span className="text-base">Profile</span>
                </DropdownMenuItem>
              </Link>
              <Link href="billing">
                <DropdownMenuItem className="cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <rect
                      x="1"
                      y="4"
                      width="22"
                      height="16"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                  <span className="text-base">Billing</span>
                </DropdownMenuItem>
              </Link>
              <Link href="agencies">
                <DropdownMenuItem className="cursor-pointer">
                  <Briefcase />
                  <span className="text-base">Agencies</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="cursor-pointer">
              <LogOut />
              <strong className="text-base">Logout</strong>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <Link href="terms-and-conditions">
              <DropdownMenuItem className="cursor-pointer">
                <span className="text-base">Terms and Conditions</span>
              </DropdownMenuItem>
            </Link>
            <Link href="help-and-support">
              <DropdownMenuItem className="cursor-pointer">
                <span className="text-base">Help and Support</span>
              </DropdownMenuItem>
            </Link>
            <Link href="submit-ticket">
              <DropdownMenuItem className="cursor-pointer">
                <span className="text-base">Submit Ticket</span>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
