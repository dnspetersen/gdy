import { Meta, StoryObj } from '@storybook-vue/nuxt';
import PageFooter from '../components/Organisms/PageFooter.vue';

const meta: Meta<typeof PageFooter> = {
    title: 'Components/Organisms',
    component: PageFooter,
}

export default meta;
type Story = StoryObj<typeof PageFooter>

export const PageFooterStory: Story = {
    args: {
        
    }
}