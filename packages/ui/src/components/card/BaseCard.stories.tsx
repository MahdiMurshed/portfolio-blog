import { ComponentMeta, ComponentStory } from "@storybook/react";
import BaseCard, { IBaseCard } from "./BaseCard";
import { mockBaseCardProps } from "./BaseCard.mocks";

export default {
  title: "templates/BaseCard",
  component: BaseCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof BaseCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseCard> = (args) => (
  <BaseCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockBaseCardProps.base,
} as IBaseCard;
