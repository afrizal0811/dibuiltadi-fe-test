import { Modal } from 'antd'
import React from 'react'
const AntdModal = (props) => {
  const { isModalOpen, handleCloseModal, title, content, footer, width } = props
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onCancel={handleCloseModal}
      footer={footer}
      width={width}
    >
      {content}
    </Modal>
  )
}

export default AntdModal
