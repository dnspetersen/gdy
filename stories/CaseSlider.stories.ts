import { Meta, StoryObj } from '@storybook-vue/nuxt';
import CaseSlider from '../components/Molecules/CaseSlider.vue';

const meta: Meta<typeof CaseSlider> = {
    title: 'Components/Molecules',
    component: CaseSlider,
}

export default meta;

type Story = StoryObj<typeof CaseSlider>

export const CaseSliderStory: Story = {
    args: {

    }
}