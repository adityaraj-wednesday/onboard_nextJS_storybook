import type { Meta, StoryObj } from "@storybook/react"
import { Avatar } from "./Avatar"

const meta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
  args: {
    size: "md",
    fallback: "AB",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: (args) => <Avatar {...args} />,
}

export default meta
