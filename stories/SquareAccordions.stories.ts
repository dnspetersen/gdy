import { Meta, StoryObj } from '@storybook-vue/nuxt';
import SquareAccordions from '../components/Molecules/SquareAccordions.vue';

const meta: Meta<typeof SquareAccordions> = {
    title: 'Components/Molecules',
    component: SquareAccordions,
}

export default meta;

type Story = StoryObj<typeof SquareAccordions>

export const SquareAccordionsStory: Story = {
    args: {
       
    },
}