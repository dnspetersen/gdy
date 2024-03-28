import { Meta, StoryObj } from '@storybook-vue/nuxt';
import CasesGrid from '../components/Organisms/CasesGrid.vue';

const meta: Meta<typeof CasesGrid> = {
    title: 'Components/Organisms',
    component: CasesGrid,
}

const arrowWhite = `data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.3922%204.33474L23.6653%2011.6078C24.1116%2012.0541%2024.1116%2012.7778%2023.6653%2013.2241L16.3922%2020.4972C15.9459%2020.9435%2015.2222%2020.9435%2014.7759%2020.4972C14.3296%2020.0509%2014.3296%2019.3272%2014.7759%2018.8809L20.098%2013.5588H1.14286C0.511675%2013.5588%200%2013.0471%200%2012.416C0%2011.7848%200.511675%2011.2731%201.14286%2011.2731H20.098L14.7759%205.95098C14.3296%205.50467%2014.3296%204.78105%2014.7759%204.33474C15.2222%203.88842%2015.9459%203.88842%2016.3922%204.33474Z'%20fill='white'/%3e%3c/svg%3e`;

export default meta;

type Story = StoryObj<typeof CasesGrid>

export const CasesGridStory: Story = {
    args: {
       services: true,
       hasButton: true,
       Copy: 'Read More',
       Caption: 'Are you interested?',
       rightIcon: 'img',
       side: 'right',
       Icon: arrowWhite,
    },
    decorators: [ () => ({
        template: '<div style="text-align: center;"><story/></div>'
    })]
}