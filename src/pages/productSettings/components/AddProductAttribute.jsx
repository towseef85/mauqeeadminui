import { Form, Input, Switch } from "antd";
import Modal from "antd/es/modal/Modal";
import React, { useState } from "react";

export default function AddProductAttribute({ openPopUp, setOpenPopUp }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [productAttributeForm] = Form.useForm();
  const onFinish = () => {};
  return (
    <Modal
      open={openPopUp}
      centered
      onCancel={() => setOpenPopUp(false)}
      title="Add Product Attribute"
      onOk={onFinish}
      confirmLoading={confirmLoading}
    >
      <Form
        name="basic"
        style={{ margin: "30px 0px" }}
        form={productAttributeForm}
        onFinish={onFinish}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Eng Name"
          name="engName"
          rules={[
            {
              required: true,
              message: "Please enter Eng Name",
            },
          ]}
        >
          <Input placeholder="Eng Name" />
        </Form.Item>
        <Form.Item
          label="Other Name"
          name="otherName"
          rules={[
            {
              required: true,
              message: "Please enter Other Name",
            },
          ]}
        >
          <Input placeholder="Other Name" />
        </Form.Item>
        <Form.Item
          label="Value"
          name="value"
          rules={[
            {
              required: true,
              message: "Please Value",
            },
          ]}
        >
          <Input placeholder="Other Value" />
        </Form.Item>
        <Form.Item label="Is Active" name="isActive" valuePropName="checked">
          <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
        </Form.Item>
        <Form.Item label="Display Order" name="displayOrder">
          <Input placeholder="Display Order" />
        </Form.Item>
      </Form>
    </Modal>
  );
}
