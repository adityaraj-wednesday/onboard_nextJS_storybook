import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./Badge"

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  args: {
    intent: "info",
    size: "md",
    children: "Badge",
  },
  argTypes: {
    intent: {
      options: ["info", "success", "warning", "error"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args) => <Badge {...args} />,
}

export default meta
