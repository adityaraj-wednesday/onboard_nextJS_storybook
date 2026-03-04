import type { Meta, StoryObj } from "@storybook/react"
import { Alert } from "./Alert"

const meta: Meta<typeof Alert> = {
  title: "Alert",
  component: Alert,
  args: {
    intent: "info",
    title: "Heads up!",
    children: "This is an informational alert message.",
  },
  argTypes: {
    intent: {
      options: ["info", "success", "warning", "error"],
      control: { type: "select" },
    },
  },
}

type Story = StoryObj<typeof Alert>

export const Default: Story = {
  render: (args) => <Alert {...args} />,
}

export default meta
