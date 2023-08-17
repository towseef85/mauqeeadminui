import { Form, Input, Switch } from "antd";
import Modal from "antd/es/modal/Modal";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { onGetList, onPost } from "../../../utility/redux/actions";
import { TAXCATEGORY_LIST } from "../../../utility/helpers/ActionTypes";

export default function AddTaxCategory({ openPopUp, setOpenPopUp }) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [taxCategoryForm] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = () => {
    setConfirmLoading(true);
    taxCategoryForm.validateFields().then((values) => {
      let newValues = { ...values, id: uuid() };
      dispatch(onPost("TaxCategory", newValues, "Added Successfully"));
      dispatch(onGetList("TaxCategory", TAXCATEGORY_LIST));
      setConfirmLoading(false);
      setOpenPopUp(false);
    });
  };
  return (
    <Modal
      open={openPopUp}
      centered
      onCancel={() => setOpenPopUp(false)}
      title="Add Tax Category"
      onOk={onFinish}
      confirmLoading={confirmLoading}
    >
      <Form
        name="basic"
        style={{ margin: "30px 0px" }}
        form={taxCategoryForm}
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
          label="Category Name"
          name="categoryName"
          rules={[
            {
              required: true,
              message: "Please enter Category Name",
            },
          ]}
        >
          <Input placeholder="Category Name" />
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
        <Form.Item
          label="Is Active"
          name="isActive"
          valuePropName="checked"
          initialValue
        >
          <Switch checkedChildren="Yes" unCheckedChildren="No" defaultChecked />
        </Form.Item>
      </Form>
    </Modal>
  );
}
