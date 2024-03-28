import { Meta, StoryObj } from '@storybook-vue/nuxt';
import AccordionsGroup from '../components/Molecules/AccordionsGroup.vue';

const meta: Meta<typeof AccordionsGroup> = {
    title: 'Components/Molecules',
    component: AccordionsGroup,
}

export default meta;

type Story = StoryObj<typeof AccordionsGroup>

export const AccordionsGroupStory: Story = {
    args: {
       
    },
}