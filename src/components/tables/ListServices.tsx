import React, { useEffect } from "react";
import type { ColumnsType } from "antd/es/table";
import { Badge, Table } from "antd";
import { Service } from "../../database/Service";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import { fetchServiceAll } from "../../redux/fetures/servicess/servicesSlice";
// import {  } from "../../redux/fetures/servicess/servicesSlice";
import "../../css/action.scss";
import { useNavigate } from "react-router-dom";
interface DataType extends Service {}

const ListServices: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    ChangeData,
    loading,
    ListAllService,
    FilterListService,
    ValueFilterActive,
    ValueFilterConnected,
  } = useAppSelector((state) => state.serviceReducer);
  const OnNavigate = (record: Service, praram: string) => {
    navigate(`/Menu/Service/${praram}/${record.id}`, {
      state: {
        record,
      },
    });
  };
  useEffect(() => {
    dispatch(fetchServiceAll());
  }, [ChangeData]);
  // useEffect(() => {
  //   dispatch(());
  // }, [ValueFilterActive, ValueFilterConnected, loading]);
  const isFilter =
    `${ValueFilterActive}`.toLowerCase() !== "All".toLowerCase() ||
    `${ValueFilterConnected}`.toLowerCase() !== "All".toLowerCase();

  const columns: ColumnsType<DataType> = [
    {
      title: "Mã Dịch Vụ",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên dịch vụ",
      dataIndex: "name",
      key: "id",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "id",
    },
    {
      title: "Trạng thái hoạt động",
      dataIndex: "statusConnect",
      key: "id",
      render: (status) => (
        <Badge
          status={status ? "success" : "error"}
          text={status ? "Hoạt động" : "Ngưng Hoạt động"}
        />
      ),
    },
    {
      title: "Action",
      key: "id",
      width: "7vw",
      align: "center",
      render: (record: any) => (
        <div onClick={() => OnNavigate(record, "Detail")} className="CssAcion">
          Chi Tiết
        </div>
      ),
    },
    {
      title: "Action",
      key: "id",
      width: "7vw",
      align: "center",
      render: (record: any) => (
        <div onClick={() => OnNavigate(record, "Edit")} className="CssAcion">
          Cập nhật
        </div>
      ),
    },
  ];
  return (
    <Table
      className="box-table"
      columns={columns}
      dataSource={ListAllService}
      loading={loading}
      scroll={{
        y: 300,
        scrollToFirstRowOnChange: true,
      }}
      pagination={{
        defaultPageSize: 5,
      }}
    />
  );
};
export default ListServices;
