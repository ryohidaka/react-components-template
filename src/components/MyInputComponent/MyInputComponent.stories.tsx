import { Meta, StoryFn } from "@storybook/react";
import { MyInputComponent } from "./MyInputComponent";

/**
 * This is the default export that defines the metadata for the story.
 * It includes the title, component, and other optional configurations.
 */
export default {
  title: "Example/MyInputComponent", // Title under which the component will appear in Storybook
  component: MyInputComponent, // The component to be rendered in the story
} as Meta;

/**
 * Template function defines how the component will be rendered in Storybook.
 * @param args - arguments passed to the component (can include props)
 */
const Template: StoryFn = (args: any) => <MyInputComponent {...args} />;

/**
 * Default story for MyInputComponent.
 * This shows how the component looks with default behavior.
 */
export const Default = Template.bind({});
Default.args = {}; // Default configuration for the story
