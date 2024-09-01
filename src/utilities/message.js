import { message as AntdMessage } from 'antd'

const MESSAGE_DURATION = 3

const isShowingMessage = {}

const triggerMessage = (type, content = '[ no content ]', duration = MESSAGE_DURATION, onClose) =>
    AntdMessage[type](content, duration, onClose)

const error = (content) => {
    if (isShowingMessage[content]) return
    isShowingMessage[content] = true
    triggerMessage('error', content, MESSAGE_DURATION, () => {
        isShowingMessage[content] = false
    })
}
const info = (content) => triggerMessage('info', content)
const success = (content) => triggerMessage('success', content)
const warning = (content) => triggerMessage('warning', content)

export { error, info, success, warning }
