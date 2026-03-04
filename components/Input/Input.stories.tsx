import type { Meta, StoryObj } from "@storybook/react"
import { Input } from "./Input"

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  args: {
    inputSize: "md",
    placeholder: "Type something...",
  },
  argTypes: {
    inputSize: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
}

type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args) => <Input {...args} />,
}

export default meta
