import React, { useState } from "react";
import AppListView from "../../components/common/AppListView";
import { useNavigate } from "react-router-dom";
import { Image, Space, Tag } from "antd";
import { onDelete, onDeleteBrand } from "../../utility/redux/actions";
import { useDispatch } from "react-redux";
import {
  AppEditButton,
  AppViewButton,
  AppDeleteButton,
} from "../../components/common/AppListView/AppListButton";

export default function CategoryList({ categoryList, loading }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const onChange = (page) => {
    setPage(page);
  };

  const DeleteCategory = (id) => {
    dispatch(onDelete("Category", id, "Category Deleted Successfully!"));
    window.location.reload();
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "imageData",
      key: "imageData",
      render: (data) => <Image src={data} width={80} />,
    },

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
      title: "Show On Homepage",
      dataIndex: "showOnHomepage",
      key: "showOnHomepage",
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
            onDelete={() => DeleteCategory(data)}
          />
        </Space>
      ),
    },
  ];
  return (
    <AppListView
      btntitle="Add Category"
      onClick={() => navigate("create")}
      columns={columns}
      data={categoryList}
      page={page}
      onChange={onChange}
      loading={loading}
    />
  );
}
