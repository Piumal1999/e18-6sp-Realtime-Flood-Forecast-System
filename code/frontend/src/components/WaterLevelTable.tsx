import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { FC } from "react";

interface DataType {
  key: string;
  StationName: string;
  WaterLevel: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Station Name",
    dataIndex: "StationName",
    key: "StationName",
  },
  {
    title: "Water Level",
    dataIndex: "WaterLevel",
    key: "WaterLevel",
  },
];

const data: DataType[] = [
  {
    key: "1",
    StationName: "Atharagalla",
    WaterLevel: 80,
  },
  {
    key: "2",
    StationName: "Galgamuwa",
    WaterLevel: 75,
  },
  {
    key: "3",
    StationName: "Mediyawa",
    WaterLevel: 30,
  },
  {
    key: "4",
    StationName: "Mahagalkadawala",
    WaterLevel: 50,
  },
];

const WaterLevelTable: FC = () => {
  return <Table columns={columns} dataSource={data} />;
};

export default WaterLevelTable;
