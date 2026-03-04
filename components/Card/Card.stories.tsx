import type { Meta, StoryObj } from "@storybook/react"
import { Card } from "./Card"

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  args: {
    intent: "default",
    size: "lg",
    title: "Card Title",
    children: "This is a card component with some content inside.",
  },
  argTypes: {
    intent: {
      options: ["default", "outlined"],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "lg"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Card>

export const Default: Story = {
  render: (args) => <Card {...args} />,
}

export default meta
