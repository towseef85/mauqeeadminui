import React, { useState } from "react";
import AppListView from "../../components/common/AppListView";
import { useNavigate } from "react-router-dom";

export default function BrandList() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const onChange = (page) => {
    setPage(page);
  };
  const columns = [
    {
      title: "Image",
      dataIndex: "engName",
      key: "engName",
    },

    {
      title: "Name",
      dataIndex: "engName",
      key: "engName",
    },
    {
      title: "Active",
      dataIndex: "published",
      key: "published",
    },
  ];
  return (
    <AppListView
      btntitle="Add Brand"
      onClick={() => navigate("create")}
      columns={columns}
      data={[]}
      page={page}
      onChange={onChange}
    />
  );
}
