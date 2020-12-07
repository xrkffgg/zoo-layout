import { defineComponent } from 'vue'
import './Layout.scss'

export default defineComponent({
    name: 'Layout',
    props: {
        title: {
            type: String,
            default: () => {
                return 'Zoo-Layout'
            }
        }
    },

    setup(props, { slots }) {
        const renderHeader = () => {
            return <div class="zoo-layout-header">
                <div class="zoo-layout-header-content">
                    <a href="https://github.com/zoo-js" target="_blank">
                        <img src={`https://avatars1.githubusercontent.com/u/70757173?s=60&v=4`} />
                    </a>
                    <a href="https://github.com/zoo-js/zoo-issue-helper" target="_blank">
                        <h1>{props.title}</h1>
                    </a>
                    {slots.header?.()}
                </div>
            </div>
        }

        return () => (
            <div class="zoo-layout">
                { renderHeader()}
                <div class="zoo-layout-body">
                    {slots.default?.()}
                </div>
            </div>
        )
    }
})