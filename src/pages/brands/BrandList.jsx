import React, { useState } from "react";
import AppListView from "../../components/common/AppListView";
import { useNavigate } from "react-router-dom";
import { Image, Space, Tag } from "antd";
import { onDeleteBrand } from "../../utility/redux/actions";
import { useDispatch } from "react-redux";
import {
  AppEditButton,
  AppViewButton,
  AppDeleteButton,
} from "../../components/common/AppListView/AppListButton";
export default function BrandList({ brandList, loading }) {
  const dispatch = useDispatch();
  console.log("brandList", brandList);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const onChange = (page) => {
    setPage(page);
  };

  const DeleteBrand = (id) => {
    dispatch(onDeleteBrand(id));
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
          <AppEditButton editTooltiptitle="Edit Brand" data={data} />
          <AppViewButton detailsTooltiptitle="Brand Details" data={data} />
          <AppDeleteButton
            deleteTooltiptitle="Delete Brand"
            data={data}
            onDelete={() => DeleteBrand(data)}
          />
        </Space>
      ),
    },
  ];
  return (
    <>
      {brandList && (
        <AppListView
          btntitle="Add Brand"
          onClick={() => navigate("create")}
          columns={columns}
          data={brandList}
          page={page}
          onChange={onChange}
          loading={loading}
        />
      )}
    </>
  );
}
