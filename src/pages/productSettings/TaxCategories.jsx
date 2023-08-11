import React, { useState, useEffect } from "react";
import {
  AppDeleteButton,
  AppEditButton,
  AppViewButton,
} from "../../components/common/AppListView/AppListButton";
import AppListView from "../../components/common/AppListView";
import AppContainer from "../../components/AppContainer";
import { Space, Tag } from "antd";
import AddTaxCategory from "./components/AddTaxCategory";
import { useDispatch, useSelector } from "react-redux";
import { onGetList } from "../../utility/redux/actions";
import { TAXCATEGORY_LIST } from "../../utility/helpers/ActionTypes";

export default function TaxCategories() {
  const dispatch = useDispatch();
  const [openPopUp, setOpenPopUp] = useState(false);
  const { taxCategoryList } = useSelector(({ catalog }) => catalog);
  const onChange = (page) => {
    setPage(page);
  };
  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(onGetList("TaxCategory", TAXCATEGORY_LIST));
  }, []);

  const columns = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "engName",
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (data) =>
        data ? <Tag color="blue">Yes</Tag> : <Tag color="red">No</Tag>,
    },

    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (data) => (
        <Space>
          <AppEditButton data={data} onEditClick={() => setOpenPopUp(true)} />
          <AppDeleteButton data={data} onDelete={() => console.log(data)} />
        </Space>
      ),
    },
  ];
  return (
    <AppContainer title="Tax Categories" type="bottom" fullView>
      <AppListView
        btntitle="Add Tax Category"
        onClick={() => setOpenPopUp(true)}
        columns={columns}
        data={taxCategoryList}
        page={page}
        onChange={onChange}
      />
      <AddTaxCategory openPopUp={openPopUp} setOpenPopUp={setOpenPopUp} />
    </AppContainer>
  );
}
