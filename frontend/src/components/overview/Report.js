import { Col, Row, Table, DatePicker } from "antd";
import BrannSelect from "components/ui/select/Select";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/workflow/time_tracking/actions";
import customerActions from "states/crm/customer/actions";
import utilFileActions from "states/util/file/actions";

import dayjs from "dayjs";
import BrannUserProfile from "components/ui/avatar/UserProfile";
import isEmptyObject from "utils/isEmptyObject";
import BrannSecondaryButton from "components/ui/button/SecondaryButton";

const { RangePicker } = DatePicker;

const AdminReport = () => {
  const dispatch = useDispatch();

  const { timeTracking, isFetchingtimeTracking, isMakeXLS } = useSelector(
    (state) => state.workflowTimeTracking
  );

  const { customers } = useSelector((state) => state.crmCustomer);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [userId, setUserId] = useState(0);

  const [customerArray, setCustomerArray] = useState([]);

  const pad0Left = (num) => String("0" + num).slice(-2);

  const columns = [
    {
      title: "Comenzar",
      dataIndex: "startTime",
      key: "startTime",
      render: (startTime) => dayjs(startTime).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      title: "Latitud",
      dataIndex: "startLatitude",
      key: "startLatitude",
      responsive: ["md"],
    },
    {
      title: "Longitud",
      dataIndex: "startLongitude",
      key: "startLongitude",
      responsive: ["md"],
    },
    {
      title: "Fin",
      dataIndex: "endTime",
      key: "endTime",
      render: (endTime) => dayjs(endTime).format("YYYY-MM-DD HH:mm:ss"),
    },
    {
      title: "Latitud",
      dataIndex: "endLatitude",
      key: "endLatitude",
      responsive: ["md"],
    },
    {
      title: "Longitud",
      dataIndex: "endLongitude",
      key: "endLongitude",
      responsive: ["md"],
    },
    {
      title: "Tiempo de seguimiento",
      key: "time",
      align: "right",
      render: (_, record) => {
        const durationInSecond =
          dayjs(record.endTime).diff(dayjs(record.startTime)) / 1000;
        let second = durationInSecond % 60;
        let durationInMinute = 0;
        let minute = 0;
        if (durationInSecond > second) {
          durationInMinute = (durationInSecond - second) / 60;
          minute = durationInMinute % 60;
        }
        let durationInHour = 0;
        let hour = 0;
        if (durationInMinute > minute) {
          durationInHour = (durationInMinute - minute) / 60;
          hour = durationInHour % 60;
        }
        return pad0Left(hour) + ":" + pad0Left(minute) + ":" + pad0Left(second);
      },
    },
  ];

  useEffect(() => {
    const now = new Date();
    const tomorrow = dayjs(now).add(1, "day").format("YYYY-MM-DD");
    const today = dayjs(now).format("YYYY-MM-DD");

    setStartDate(today);
    setEndDate(tomorrow);

    dispatch({
      type: customerActions.FETCH_CUSTOMER,
    });
  }, [dispatch]);

  useEffect(() => {
    if (startDate && endDate) {
      if (userId !== 0) {
        dispatch({
          type: actions.FETCH_TIME_TRACKING,
          startDate: startDate,
          endDate: endDate,
          userId: userId,
        });
      }
    }
  }, [dispatch, startDate, endDate, userId]);

  useEffect(() => {
    const makeCustomerArray = async () => {
      let tempCustomerArray = [];
      await customers.map(
        (customer) =>
          (tempCustomerArray = [
            ...tempCustomerArray,
            {
              value: customer.id,
              label: (
                <BrannUserProfile
                  firstName={customer.firstName}
                  lastName={customer.lastName}
                />
              ),
            },
          ])
      );
      console.log("value", tempCustomerArray);
      setCustomerArray(tempCustomerArray);
    };

    if (!isEmptyObject(customers)) makeCustomerArray();
  }, [customers]);

  useEffect(() => {
    if (isMakeXLS === true) {
      dispatch({
        type: actions.RESET_XLS,
      });

      dispatch({
        type: utilFileActions.FILE_DOWNLOAD,
        payload: "./report/file.xlsx",
        fileName: "report.xlsx",
      });
    }
  }, [isMakeXLS, dispatch]);

  const handleUserSelect = (value) => {
    setUserId(value);
  };

  const handleDate = (value) => {
    const start = dayjs(value[0]).format("YYYY-MM-DD");
    const end = dayjs(value[1]).format("YYYY-MM-DD");

    setStartDate(start);
    setEndDate(end);
  };

  const handleDownload = () => {
    dispatch({
      type: actions.MAKE_XLS,
      startDate: startDate,
      endDate: endDate,
      userId: userId,
    });
  };
  return (
    <React.Fragment>
      <Row gutter={[0, 32]}>
        {/* select section */}
        <Col span={24}>
          <Row justify={"space-between"} gutter={[32, 16]}>
            <Col>
              <Row justify={"start"} gutter={[32, 16]}>
                <Col>
                  <BrannSelect
                    placeholder="Seleccionar trabajadora"
                    options={customerArray}
                    onChange={(e) => handleUserSelect(e)}
                  />
                </Col>
                <Col>
                  <RangePicker size="large" onChange={(e) => handleDate(e)} />
                </Col>
              </Row>
            </Col>
            <Col>
              <BrannSecondaryButton
                label={"Descargar archivo XLS"}
                onClick={handleDownload}
                disabled={
                  startDate !== null && endDate !== null && userId !== 0
                    ? false
                    : true
                }
              />
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Table
            rowKey={"id"}
            loading={isFetchingtimeTracking}
            columns={columns}
            dataSource={timeTracking}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AdminReport;
