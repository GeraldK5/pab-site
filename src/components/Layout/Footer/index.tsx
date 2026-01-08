import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/app/data/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Footer: FC = () => {
  return (
    <footer className="pt-16 dark:bg-dark">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pb-10 ">
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center">
                <Image src="/logo.svg" alt="Logo" width={180} height={50} className="h-12 w-auto" />
              </Link>
              <div className="h-12 w-px bg-midnight_text dark:bg-white opacity-30"></div>
              <span className="text-sm font-medium text-midnight_text dark:text-white">PAB</span>
            </div>
            <div className="mt-6">
              <p className="text-sm font-light text-muted dark:text-white/60 mb-6">
                You can relay on our amazing features list and also our customer
                services will be great experience.
              </p>
              <div className="mt-4 pt-4 border-t border-border dark:border-dark_border">
                <p className="text-sm font-medium text-midnight_text dark:text-white mb-1">
                  Team Lead
                </p>
                <p className="text-sm text-primary font-semibold">
                  Dr. Joshua Isiko (Productivity Acceleration)
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-6 col-span-12">
            <div className="flex items-start mb-8 gap-4">
              <Image
                src="/images/icons/icon-pin.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <div className="">
                <h5 className="text-sm text-midnight_text dark:text-white mb-4">
                  Science, Technology and Innovation Secretariat
                </h5>
                <p className="text-sm text-muted dark:text-white/60">
                  Plot 106 Katalima Road, Naguru 2, Kampala, Uganda.
                </p>
              </div>
            </div>
            <div className="flex items-center mb-8 gap-4">
              <Image
                src="/images/icons/icon-phone.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <div className="">
                <Link
                  href="#"
                  className="text-sm text-midnight_text dark:text-white mb-0 hover:text-primary!"
                >
                  1 (888) 123 4567
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/icons/icon-mail.svg"
                alt="icon"
                width={24}
                height={24}
              />
              <div className="">
                <Link
                  href="#"
                  className="text-sm text-midnight_text dark:text-white mb-0 hover:text-primary!"
                >
                  General inquiries via joshuaisiko@gmail.com (Dr. Samuel Okodi, related infrastructure lead)
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 md:col-span-12 col-span-12">
            <h4 className="text-base text-midnight_text dark:text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 5).map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-sm text-muted dark:text-white/60 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {item.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border dark:border-dark_border">
        <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 flex items-center justify-between py-6 lg:flex-nowrap flex-wrap lg:gap-0 gap-4">
          <p className="text-sm text-midnight_text dark:text-white">
            © All Rights Reserved by{" "}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#">
              <Icon
                icon="ri:facebook-fill"
                className="text-xl text-midnight_text dark:text-white hover:text-primary! cursor-pointer"
              />
            </Link>
            <Link href="#">
              <Icon
                icon="mdi:instagram"
                className="text-xl text-midnight_text dark:text-white hover:text-primary! cursor-pointer"
              />
            </Link>
            <Link href="#">
              <Icon
                icon="ri:linkedin-fill"
                className="text-xl text-midnight_text dark:text-white hover:text-primary! cursor-pointer"
              />
            </Link>
            <Link href="#">
              <Icon
                icon="line-md:twitter-x-alt"
                className="text-base text-midnight_text dark:text-white hover:text-primary! cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
