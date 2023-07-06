import React, { useMemo } from "react";
import SelectFilter from "../remoteSelect/SelectFilter";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import {
  ChangeFilterActive,
  ChangeFilterConnected,
} from "../../redux/fetures/device/diviceSlice";
import { SEARCH_DEVICES, SEARCH_SERVERS } from "../../util/configText";
import { Row } from "antd";

type Props = { type: string };

const Searchs: React.FC<Props> = ({ type }) => {
  const dataActive = useMemo(
    () => [
      { label: "Tất Cả", value: "All" },
      { label: "Hoạt động", value: true },
      { label: "Ngưng Hoạt động", value: false },
    ],
    []
  );

  const dataConnect = useMemo(
    () => [
      { label: "Tất Cả", value: "All" },
      { label: "Kết nối", value: true },
      { label: "Mất kết nối", value: false },
    ],
    []
  );
  const dispath = useAppDispatch();
  const { ValueFilterActive, ValueFilterConnected } = useAppSelector(
    (state) => state.deviceReducer
  );
  return (
    <>
      {/* <p className="keyword">Từ khóa</p>
            <div className="find__input">
              <form>
                <input className="input" value="Nhập từ khóa" type="search" />
              </form>
            </div> */}
      <Row>
        {type === SEARCH_DEVICES ? (
          <SelectFilter
            label="Trạng thái hoạt động"
            innitTialValue={ValueFilterActive}
            options={dataActive}
            onChange={(e: any) => {
              dispath(ChangeFilterActive(e));
            }}
          />
        ) : type === SEARCH_DEVICES ? (
          "1"
        ) : null}
        {type === SEARCH_DEVICES ? (
          <SelectFilter
            label="Trạng thái kết nối"
            innitTialValue={ValueFilterConnected}
            options={dataConnect}
            onChange={(e: any) => {
              dispath(ChangeFilterConnected(e));
            }}
          />
        ) : type === SEARCH_DEVICES ? (
          "1"
        ) : null}
      </Row>
    </>
  );
};
export default Searchs;
