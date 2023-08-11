import React, { useState, useRef, useEffect } from "react";
import AppCreateView from "../../components/common/AppCreateView";
import {
  Button,
  Col,
  Form,
  Row,
  Input,
  Switch,
  Space,
  Image,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { onPost, onEdit } from "../../utility/redux/actions";
import { v4 as uuid } from "uuid";
import { useParams } from "react-router-dom";

export default function AddCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState(null);
  const [showInHomePage, setShowInHomePage] = useState(false);
  const [categoryform] = Form.useForm();
  const onFinish = () => {
    debugger;
    categoryform
      .validateFields()
      .then((values) => {
        if (id) {
          console.log(values);
        } else {
          let newValues = { ...values, imageData: fileList, id: uuid() };
          dispatch(
            onPost("Category", newValues, "Category Added Successfully")
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onFinishFailed = () => {};

  return (
    <AppCreateView
      metaTitle="Categorys"
      pageTitle={id ? "Update Category" : "Add Category"}
      tooltiptitle={id ? "Update Category" : "Add Category"}
      handleAdd={onFinish}
      btnTitle={id ? "Update Category" : "Add Category"}
    >
      <Form
        name="basic"
        form={categoryform}
        onFinish={onFinish}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
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
                  message: "Please enter Category Name",
                },
              ]}
            >
              <Input placeholder="English Name" />
            </Form.Item>

            <Form.Item label="Meta Description" name="metaDescription">
              <Input.TextArea rows={2} />
            </Form.Item>
            <Form.Item label="Meta Title" name="metaTitle">
              <Input placeholder="Meta Title" />
            </Form.Item>
            <Form.Item
              label="Display Order"
              name="displayOrder"
              rules={[
                {
                  required: showInHomePage,
                  message: "Please enter Display order in home page",
                },
              ]}
            >
              <Input type="number" placeholder="Display Order" />
            </Form.Item>
            <Form.Item
              label="Image"
              name="imageData"
              extra="Image size should not exceed more than 2 MB"
              valuePropName="fileList"
              getValueFromEvent={(e) => {
                return e?.fileList;
              }}
              rules={[
                {
                  required: showInHomePage || !!id,
                  message: "Please Upload Image",
                },
                {
                  validator(_, fileList) {
                    return new Promise((resolve, reject) => {
                      if (fileList && fileList[0]?.size > 30000) {
                        reject("File size exceeded");
                      } else {
                        resolve("success");
                      }
                    });
                  },
                },
              ]}
            >
              {/* <input
                value={fileList}
                type="file"
                ref={uploadref}
                accept=".jpeg,.png,.jpg"
              /> */}
              <Upload
                maxCount={1}
                fileList="picture-card"
                accept=".jpg,.jpeg,.png"
                beforeUpload={(file) => {
                  if (file.size > 30000) {
                    console.log("File size exceeded");
                    return false;
                  } else {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = () => {
                      setFileList(fileReader.result);
                    };
                    fileReader.onerror = (error) => {
                      console.log(error);
                    };
                    return false;
                  }
                }}
                onRemove={(file) => {
                  setFileList(null);
                }}
              >
                <Button icon={<UploadOutlined />}>Upload Image</Button>
              </Upload>
            </Form.Item>
          </Col>
          <Col sm={12} xs={12} md={12}>
            <Form.Item
              label="Other Name"
              name="otherName"
              rules={[
                {
                  required: true,
                  message: "Please enter Category Name",
                },
              ]}
            >
              <Input placeholder="Other Name" />
            </Form.Item>
            <Form.Item label="Meta Keywords" name="metaKeywords">
              <Input.TextArea rows={2} />
            </Form.Item>
            <Form.Item
              label="Publish"
              name="published"
              valuePropName="checked"
              initialValue
            >
              <Switch
                checkedChildren="Yes"
                unCheckedChildren="No"
                defaultChecked
              />
            </Form.Item>
            <Form.Item
              label="Show in Homepage"
              name="showOnHomepage"
              valuePropName="checked"
              initialValue={false}
            >
              <Switch
                checkedChildren="Yes"
                unCheckedChildren="No"
                onChange={(e) => setShowInHomePage(e)}
              />
            </Form.Item>
            {fileList && (
              <Col offset={6} span={6}>
                <Space direction="vertical" align="center">
                  <Image src={fileList} width={80} height={80} />
                </Space>
              </Col>
            )}
          </Col>
        </Row>
      </Form>
    </AppCreateView>
  );
}
