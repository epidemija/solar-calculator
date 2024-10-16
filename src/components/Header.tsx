'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button } from '@nextui-org/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Areas', href: '/flaechen' },
    { name: 'Service Provider', href: '/dienstleister' },
    { name: 'Magazine', href: '/magazin' },
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className='bg-white py-2' 
    >
      <NavbarBrand className=' flex justify-center items-center'>
        <Link href="/">
          <Image src='/logo.png' alt="ePower" width={250} height={50} className='object-cover w-full' />
        </Link>
      </NavbarBrand>
      {/* <Image src='/logo.png' alt="ePower" width={250} height={50} className='object-cover w-full' /> */}
      {/* <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
      </NavbarContent> */}

      {/* <NavbarContent className=" " justify="center"> */}
        {/* <NavbarBrand> */}
          {/* <Link href="/">
            <Image src='/logo.png' alt="ePower" width={250} height={50} className='object-cover w-full' />
          </Link> */}
        {/* </NavbarBrand> */}
      {/* </NavbarContent>

      <NavbarContent className="flex gap-4" justify="center">
        {/* <NavbarBrand>
          <Link href="/">
            <Image src='/logo.png' alt="ePower" width={250} height={50} className='object-cover' />
          </Link>
        </NavbarBrand> */}
        {/* {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.href}>{item.name}</Link>
          </NavbarItem>
        ))} */}
      {/* </NavbarContent> */}

      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}

      {/* <NavbarMenu 
      >
        {menuItems.map((item, index) => (
          <NavbarMenuItem className='bg-transparent' key={index}>
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu> */}
    </Navbar>
  );
}