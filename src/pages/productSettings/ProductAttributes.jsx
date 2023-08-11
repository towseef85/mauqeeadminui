import React, { useState } from "react";
import {
  AppDeleteButton,
  AppEditButton,
  AppViewButton,
} from "../../components/common/AppListView/AppListButton";
import AppListView from "../../components/common/AppListView";
import AppContainer from "../../components/AppContainer";
import { Space, Tag } from "antd";
import AddProductAttribute from "./components/AddProductAttribute";

export default function ProductAttributes() {
  const [openPopUp, setOpenPopUp] = useState(false);
  const onChange = (page) => {
    setPage(page);
  };
  const [page, setPage] = useState(0);
  const columns = [
    {
      title: "English Name",
      dataIndex: "engName",
      key: "engName",
    },

    {
      title: "Other Name",
      dataIndex: "otherName",
      key: "otherName",
    },
    {
      title: "Active",
      dataIndex: "published",
      key: "published",
      render: (data) =>
        data ? <Tag color="blue">Yes</Tag> : <Tag color="red">No</Tag>,
    },

    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (data) => (
        <Space>
          <AppEditButton editTooltiptitle="Edit Category" data={data} />
          <AppViewButton detailsTooltiptitle="Category Details" data={data} />
          <AppDeleteButton
            deleteTooltiptitle="Category Brand"
            data={data}
            onDelete={() => console.log(data)}
          />
        </Space>
      ),
    },
  ];
  return (
    <AppContainer title="Product Attributes" type="bottom" fullView>
      <AppListView
        btntitle="Add Product Attribute"
        onClick={() => setOpenPopUp(true)}
        columns={columns}
        data={[]}
        page={page}
        onChange={onChange}
      />
      <AddProductAttribute openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />
    </AppContainer>
  );
}
