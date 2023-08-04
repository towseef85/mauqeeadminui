import React, { useState } from "react";
import AppCreateView from "../../components/common/AppCreateView";
import {
  Button,
  Col,
  Form,
  Select,
  Row,
  Input,
  Switch,
  Upload,
  message,
  Space,
} from "antd";
import {
  DeleteColumnOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";

export default function AddBrand() {
  const [fileList, setFileList] = useState(null);
  const [projectform] = Form.useForm();
  const onFinish = (values) => {};
  const onFinishFailed = () => {};

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    debugger;
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFileList(base64);
  };
  console.log("fileList", fileList);
  return (
    <AppCreateView
      metaTitle="Brands"
      pageTitle="Add Brand"
      tooltiptitle="Add Brand"
    >
      <Form
        name="basic"
        form={projectform}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row style={{ marginTop: "40px" }}>
          <Col sm={24} xs={24} md={12}>
            <Form.Item
              label="Name"
              name="engName"
              rules={[
                {
                  required: true,
                  message: "Please enter Brand Name",
                },
              ]}
            >
              <Input placeholder="Brand Name" />
            </Form.Item>
            <Form.Item
              label="Name"
              name="engName"
              rules={[
                {
                  required: true,
                  message: "Please enter Brand Name",
                },
              ]}
            >
              <Input placeholder="Brand Name" />
            </Form.Item>
            <Form.Item label="Description" name="description">
              <Input.TextArea rows={2} />
            </Form.Item>
            <Form.Item
              label="Image"
              name="imageData"
              rules={[
                {
                  required: true,
                  message: "Please enter Brand Name",
                },
              ]}
            >
              <input
                type="file"
                fileList={fileList}
                onChange={(e) => handleFileUpload(e)}
                accept=".jpeg,.png,.jpg"
              />
            </Form.Item>
          </Col>
          <Col sm={12} xs={12} md={12}>
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
            <Form.Item label="Publish" name="published">
              <Switch
                checkedChildren="Yes"
                unCheckedChildren="No"
                defaultChecked
              />
            </Form.Item>
            <Form.Item label="Show in Homepage" name="showOnHomepage">
              <Switch checkedChildren="Yes" unCheckedChildren="No" />
            </Form.Item>
            {fileList !== null && (
              <Col offset={6} span={6}>
                <Space direction="vertical" align="center">
                  <img src={fileList} width={80} height={80} />
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => setFileList(null)}
                  >
                    Delete
                  </Button>
                </Space>
              </Col>
            )}
          </Col>
        </Row>
      </Form>
    </AppCreateView>
  );
}
