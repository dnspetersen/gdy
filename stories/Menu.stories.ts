import { Meta, StoryObj } from '@storybook-vue/nuxt';
import Menu from '../components/Molecules/Menu.vue';

const meta: Meta<typeof Menu> = {
    title: 'Components/Molecules',
    component: Menu,
}

export default meta;

type Story = StoryObj<typeof Menu>

export const MenuStory: Story = {
    args: {
       
    },
}