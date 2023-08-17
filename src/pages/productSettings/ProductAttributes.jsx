import React, { useState, useEffect } from "react";
import {
  AppDeleteButton,
  AppEditButton,
  AppViewButton,
} from "../../components/common/AppListView/AppListButton";
import AppListView from "../../components/common/AppListView";
import AppContainer from "../../components/AppContainer";
import { useDispatch, useSelector } from "react-redux";
import { Space, Tag } from "antd";
import AddProductAttribute from "./components/AddProductAttribute";
import { onGetList } from "../../utility/redux/actions";
import { PRODUCTATTRIBUTE_LIST } from "../../utility/helpers/ActionTypes";

export default function ProductAttributes() {
  const dispatch = useDispatch();
  const { productAttributeList } = useSelector(({ catalog }) => catalog);
  const [openPopUp, setOpenPopUp] = useState(false);
  useEffect(() => {
    dispatch(onGetList("ProductAttribute", PRODUCTATTRIBUTE_LIST));
  }, [dispatch]);
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
      {productAttributeList && (
        <AppListView
          btntitle="Add Product Attribute"
          onClick={() => setOpenPopUp(true)}
          columns={columns}
          data={productAttributeList}
          page={page}
          onChange={onChange}
          hasbackButton={true}
        />
      )}
      <AddProductAttribute openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />
    </AppContainer>
  );
}
