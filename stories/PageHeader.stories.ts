import { Meta, StoryObj } from '@storybook-vue/nuxt';
import PageHeader from '../components/Organisms/PageHeader.vue';

const meta: Meta<typeof PageHeader> = {
    title: 'Components/Organisms',
    component: PageHeader,
}

export default meta;
type Story = StoryObj<typeof PageHeader>

export const PageHeaderStory: Story = {
    args: {
        
    }
}