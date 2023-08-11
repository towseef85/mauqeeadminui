import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Col,
  Form,
  Row,
  Input,
  Switch,
  Space,
  Image,
  Select,
  Divider,
} from "antd";
import AppCreateView from "../../components/common/AppCreateView";
import { onGetList } from "../../utility/redux/actions";
import { BRAND_LIST, CATAGORY_LIST } from "../../utility/helpers/ActionTypes";

export default function AddProduct() {
  const dispatch = useDispatch();
  const [hasDiscount, setHasDiscount] = useState(false);
  const { brandList, categoryList } = useSelector(({ catalog }) => catalog);
  useEffect(() => {
    dispatch(onGetList("Brand", BRAND_LIST));
    dispatch(onGetList("Category", CATAGORY_LIST));
  }, [dispatch]);
  const { id } = useParams();
  const [productForm] = Form.useForm();
  const onFinish = () => {};
  return (
    <AppCreateView
      metaTitle="Product"
      pageTitle=""
      tooltiptitle={id ? "Update Product" : "Add Product"}
      handleAdd={onFinish}
      btnTitle={id ? "Update Product" : "Add Product"}
    >
      <Form
        name="basic"
        form={productForm}
        onFinish={onFinish}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        autoComplete="off"
      >
        <Row style={{ marginTop: "40px" }}>
          <Col md={24}>
            <Form.Item
              label="Product Name"
              name="productName"
              rules={[
                {
                  required: true,
                  message: "Please enter Product Name",
                },
              ]}
            >
              <Input placeholder="Product Name" />
            </Form.Item>
            <Form.Item
              label="Short Description"
              name="shortDescription"
              rules={[
                {
                  required: true,
                  message: "Please enter Short Description",
                },
              ]}
            >
              <Input.TextArea rows={4} placeholder="Description" />
            </Form.Item>
            <Form.Item label="Full Description" name="fullDescription">
              <Input.TextArea rows={4} placeholder="Full Description" />
            </Form.Item>
            <Form.Item label="SKU" name="sku">
              <Input placeholder="SKU" />
            </Form.Item>
            <Form.Item label="Category" name="categoryId">
              <Select placeholder="Select Category">
                {categoryList.map((x) => (
                  <Select.Option key={x.id} value={x.id}>
                    {x.engName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Brand" name="brandId">
              <Select placeholder="Select Brand">
                {brandList.map((x) => (
                  <Select.Option key={x.id} value={x.id}>
                    {x.engName}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Published"
              name="published"
              valuePropName="checked"
            >
              <Switch
                defaultChecked
                unCheckedChildren="No"
                checkedChildren="Yes"
              />
            </Form.Item>
            <Form.Item label="product Tags" name="productTags">
              <Input placeholder="Product Tags" />
            </Form.Item>
            <Form.Item
              label="Show on Homepage"
              name="showOnHomepage"
              valuePropName="checked"
            >
              <Switch unCheckedChildren="No" checkedChildren="Yes" />
            </Form.Item>
            <Divider>Price</Divider>
            <Form.Item
              label="Price"
              name="price"
              rules={[
                {
                  required: true,
                  message: "Please enter Product Price",
                },
              ]}
            >
              <Input placeholder="Product Price" />
            </Form.Item>
            <Form.Item
              label="Has Discount"
              name="hasDiscount"
              valuePropName="checked"
            >
              <Switch
                onChange={(checked) => setHasDiscount(checked)}
                unCheckedChildren="No"
                checkedChildren="Yes"
              />
            </Form.Item>
            {hasDiscount && (
              <>
                <Form.Item
                  label="Discount Type"
                  name="discountType"
                  rules={[
                    {
                      required: productForm.getFieldValue("hasDiscount"),
                      message: "Select Discount Type",
                    },
                  ]}
                >
                  <Select
                    options={[
                      { value: "flate", label: "Flate" },
                      { value: "percentage", label: "Percentage" },
                    ]}
                  />
                </Form.Item>
                <Form.Item
                  label="Percentage"
                  name="percentage"
                  rules={[
                    {
                      required: productForm.getFieldValue("hasDiscount"),
                      message: "Please enter Percentage",
                    },
                  ]}
                >
                  <Input placeholder="Product Percentage" />
                </Form.Item>
              </>
            )}
            <Form.Item
              label="Tax Category"
              name="taxCategory"
              rules={[
                {
                  required: true,
                  message: "Select Tax Category",
                },
              ]}
            >
              <Select
                options={[
                  { value: "flate", label: "Flate" },
                  { value: "percentage", label: "Percentage" },
                ]}
              />
            </Form.Item>
          </Col>

          <Col sm={24} xs={24} md={12}></Col>
          <Col sm={24} xs={24} md={12}></Col>
        </Row>
      </Form>
    </AppCreateView>
  );
}
