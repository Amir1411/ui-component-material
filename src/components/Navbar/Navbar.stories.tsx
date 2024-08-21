import { Meta, StoryFn } from "@storybook/react";
import Navbar, { NavbarProps } from "./Navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as Meta<NavbarProps>;

const Template: StoryFn<NavbarProps> = (args) => <Navbar {...args} />;

export const BasicNavbar = Template.bind({});
BasicNavbar.args = {
  title: "My Website",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

BasicNavbar.argTypes = {
  links: { control: "object" },
  title: { control: "text" },
};
