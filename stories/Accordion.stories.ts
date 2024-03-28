import { Meta, StoryObj } from '@storybook-vue/nuxt';
import Accordion from '../components/Atoms/Accordion.vue';

const meta: Meta<typeof Accordion> = {
    title: 'Components/Atoms',
    component: Accordion,
}

export default meta;

type Story = StoryObj<typeof Accordion>

export const AccordionStory: Story = {
    args: {
       labelTxt: 'Accordion Title',
       default: `Default slot content`
    }
}