import { Meta, StoryObj } from '@storybook-vue/nuxt';
import MediaContent from '../components/Organisms/MediaContent.vue';

const meta: Meta<typeof MediaContent> = {
    title: 'Components/Organisms',
    component: MediaContent,
}

export default meta;
type Story = StoryObj<typeof MediaContent>

export const MediaContentStory: Story = {
    args: {
        
    }
}