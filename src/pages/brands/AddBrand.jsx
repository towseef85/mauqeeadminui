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
} from "antd";
import {
  DeleteOutlined,
} from "@ant-design/icons";
import {useDispatch} from 'react-redux';
import { onPostBrands, onGetSingleBrand } from "../../utility/redux/actions";
import { v4 as uuid } from 'uuid';
import { useParams } from "react-router-dom";

export default function AddBrand() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const uploadref = useRef();
  const [fileList, setFileList] = useState(null);
  const [showInHomePage, setShowInHomePage] = useState(false)
  const [singleBrand, setSingleBrand] = useState(null)
  const [brandform] = Form.useForm();
  const onFinish = () => {
    brandform.validateFields()
            .then((values)=>{
              
              let newValues ={...values, imageData:fileList, id:uuid()}
              dispatch(onPostBrands(newValues))
            })
            .catch((err)=>{
              console.log(err);
            })
  };
  const onFinishFailed = () => {};

  useEffect(()=>{
    if(id){
     dispatch(onGetSingleBrand(id, setSingleBrand, setFileList, setShowInHomePage))
    }
  },[id])

  if(id && singleBrand !== null){
    brandform.setFieldsValue({
      engName: singleBrand.engName,
      otherName: singleBrand.otherName,
      description:singleBrand.description,
      displayOrder:singleBrand.displayOrder,
      published:singleBrand.published,
      showOnHomepage:singleBrand.showOnHomepage
    })
  }

  console.log("singleBrand",singleBrand);
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
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFileList(base64);
  };
  console.log("fileList", fileList);
  return (
    <AppCreateView
      metaTitle="Brands"
      pageTitle={id ? "Update Brand" : "Add Brand"}
      tooltiptitle={id ? "Update Brand" : "Add Brand"}
      handleAdd={onFinish}
      btnTitle={id ? "Update Brand" : "Add Brand"}
    >
      <Form
        name="basic"
        form={brandform}
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
                  message: "Please enter Brand Name",
                },
              ]}
            >
              <Input placeholder="English Name" />
            </Form.Item>
         
            <Form.Item label="Description" name="description">
              <Input.TextArea rows={2} />
            </Form.Item>
           
            <Form.Item
              label="Display Order"
              name="displayOrder"
              rules={[
                {
                  required:showInHomePage,
                  message:"Please enter Display order in home page"
                }
              ]}
            >
              <Input type="number" placeholder="Other Name" />
            </Form.Item>
            <Form.Item
              label="Image"
              name="imageData"
              rules={[
                {
                  required: showInHomePage,
                  message: "Please Upload Image",
                },
              ]}
            >
              <input
              value={fileList}
                type="file"
                ref={uploadref}
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
                  message: "Please enter Brand Name",
                },
              ]}
            >
              <Input placeholder="Other Name" />
            </Form.Item>
            <Form.Item label="Publish" name="published" valuePropName="checked" initialValue>
              <Switch
                checkedChildren="Yes"
                unCheckedChildren="No"
                defaultChecked

              />
            </Form.Item>
            <Form.Item label="Show in Homepage" name="showOnHomepage" valuePropName="checked" initialValue={false}>
              <Switch checkedChildren="Yes" unCheckedChildren="No" onChange={(e)=> setShowInHomePage(e)}/>
            </Form.Item>
            {fileList  && (
              <Col offset={6} span={6}>
                <Space direction="vertical" align="center">
                  <Image src={fileList} width={80} height={80} />
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      setFileList("")
                      brandform.setFieldsValue({imageData:""})
                    }}
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
