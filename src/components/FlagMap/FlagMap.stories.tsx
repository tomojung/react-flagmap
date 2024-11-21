import { StoryFn, Meta } from "@storybook/react";
import FlagMap from "./FlagMap";

export default {
	title: "Example/FlagMap",
	component: FlagMap,
} as Meta<typeof FlagMap>;

const Template: StoryFn<typeof FlagMap> = (args) => <FlagMap {...args} />;

export const FlagMapTest = Template.bind({});
FlagMapTest.args = {
	country: "TH",
};
