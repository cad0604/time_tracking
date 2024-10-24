import { faPlay, faSquare } from "@fortawesome/free-solid-svg-icons";
import { Col, Popconfirm, Row, Space } from "antd";
import BrannIcon from "components/ui/typo/Icon";
import BrannText from "components/ui/typo/Text";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTimeDuration } from "utils/time";
import actions from "states/workflow/time_start/actions";
import timeTrackingActions from "states/workflow/time_tracking/actions";

import isEmptyObject from "utils/isEmptyObject";
import dayjs from "dayjs";
import { showWarningNotification } from "utils/showNotification";
import BrannTitle from "components/ui/typo/Title";
import CenteredContainer from "components/ui/box/CenteredContainer";
import BrannPaper from "components/ui/box/Paper";
import { useMobileViewport } from "utils/responsive";
import BrannPrimaryButton from "components/ui/button/PrimaryButton";
import BrannSecondaryButton from "components/ui/button/SecondaryButton";

let startedTime = null;
const CustomerTimeTracer = () => {
  const dispatch = useDispatch();

  const { timeStart } = useSelector((state) => state.workflowTimeStart);

  const [startedTimeTracer, setStartedTimeTracer] = useState(false);

  const [duration, setDuration] = useState("00:00:00");
  const [timerId, setTimerId] = useState(null);

  //GPS tracking
  const [startLatitude, setStartLatitude] = useState(null);
  const [startLongitidu, setStartLongitidu] = useState(null);
  const [endLatitude, setEndLatitude] = useState(null);
  const [endLongitidu, setEndLongitidu] = useState(null);
  const [gpsError, setGpsError] = useState(null);

  const isMobileView = useMobileViewport();
  /*------------------------------get GPS position ----------------------*/
  const makeStartGPSPosition = () => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setStartLatitude(position.coords.latitude);
          setStartLongitidu(position.coords.longitude);
          setGpsError(null);
          dispatch({
            type: actions.ADD_TIME_START,
            payload: {
              startTime: startedTime,
              latitude: startLatitude,
              longitidu: startLongitidu,
            },
          });
        },
        (err) => {
          setGpsError(err);
          dispatch({
            type: actions.ADD_TIME_START,
            payload: {
              startTime: startedTime,
              latitude: startLatitude,
              longitidu: startLongitidu,
            },
          });
        },
        { enableHighAccuracy: true, timeout: 3000, maximumAge: 0 }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setGpsError("Geolocalización no soportada por este navegador.");
      dispatch({
        type: actions.ADD_TIME_START,
        payload: {
          startTime: startedTime,
          latitude: startLatitude,
          longitidu: startLongitidu,
        },
      });
    }
  };

  const makeEndGPSPosition = () => {
    if ("geolocation" in navigator) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setEndLatitude(position.coords.latitude);
          setEndLongitidu(position.coords.longitude);
          setGpsError(null);
          const end = new Date();
          dispatch({
            type: timeTrackingActions.ADD_TIME_TRACKING,
            payload: {
              startTime: startedTime,
              endTime: end,
              startLatitude: startLatitude,
              startLongitidu: startLongitidu,
              endLatitude: endLatitude,
              endLongitidu: endLongitidu,
            },
          });
        },
        (err) => {
          setGpsError(err);
          const end = new Date();
          dispatch({
            type: timeTrackingActions.ADD_TIME_TRACKING,
            payload: {
              startTime: startedTime,
              endTime: end,
              startLatitude: startLatitude,
              startLongitidu: startLongitidu,
              endLatitude: endLatitude,
              endLongitidu: endLongitidu,
            },
          });
        },
        { enableHighAccuracy: true, timeout: 3000, maximumAge: 0 }
      );

      return () => navigator.geolocation.clearWatch(watchId);
    } else {
      setGpsError("Geolocalización no soportada por este navegador.");
      const end = new Date();
      dispatch({
        type: timeTrackingActions.ADD_TIME_TRACKING,
        payload: {
          startTime: startedTime,
          endTime: end,
          startLatitude: startLatitude,
          startLongitidu: startLongitidu,
          endLatitude: endLatitude,
          endLongitidu: endLongitidu,
        },
      });
    }
  };

  useEffect(() => {
    if (gpsError !== null) {
      showWarningNotification("Error", gpsError);
      setGpsError(null);
    }
  }, [gpsError]);
  /*------------------------------get GPS position ----------------------*/

  useEffect(() => {
    dispatch({
      type: actions.FETCH_TIME_START,
    });
  }, [dispatch]);

  useEffect(() => {
    if (!isEmptyObject(timeStart)) {
      startedTime = dayjs(timeStart.startTime);
      const updateDuration = () => {
        const now = new Date();
        setDuration(getTimeDuration(startedTime, now));
      };

      updateDuration();

      let timeId = setInterval(() => {
        updateDuration();
      }, 1000);
      setTimerId(timeId);

      setStartedTimeTracer(true);
      if (timeStart.latitude) setStartLatitude(timeStart.latitude);
      if (timeStart.longitidu) setStartLongitidu(timeStart.longitidu);
    }
  }, [timeStart]);

  const updateDuration = () => {
    const now = new Date();
    setDuration(getTimeDuration(startedTime, now));
  };

  const handleStartButton = () => {
    const startTime = new Date();
    startedTime = startTime;

    updateDuration();

    let timeId = setInterval(() => {
      updateDuration();
    }, 1000);
    setTimerId(timeId);

    makeStartGPSPosition();
    setStartedTimeTracer((prev) => !prev);
  };

  const handleEndButton = () => {
    clearInterval(timerId);
    setTimerId(null);

    makeEndGPSPosition();
    setStartedTimeTracer((prev) => !prev);
  };
  return (
    <CenteredContainer>
      <Row justify={"center"} align={"middle"} gutter={[0, 32]}>
        <Col span={24}>
          <BrannTitle
            text={"Quieres empezar a trabajar ahora?"}
            level={isMobileView ? 3 : 2}
          />
        </Col>
        <Col span={24}>
          <CenteredContainer>
            <BrannPaper width={isMobileView ? 400 : 600}>
              <BrannText text={duration} fontSize={isMobileView ? 60 : 100} />
            </BrannPaper>
          </CenteredContainer>
        </Col>
        <Col span={24}>
          <Space>
            <BrannPrimaryButton
              icon={<BrannIcon icon={faPlay} color={"green"} />}
              label={"Play"}
              disabled={startedTimeTracer}
              onClick={handleStartButton}
            />
            <Popconfirm
              title="Detener el seguimiento del tiempo"
              description={"Estás segura de detener el seguimiento del tiempo?"}
              onConfirm={handleEndButton}
            >
              <BrannSecondaryButton
                icon={<BrannIcon icon={faSquare} color={"red"} />}
                label={"Stop"}
                disabled={!startedTimeTracer}
              />
            </Popconfirm>
          </Space>
        </Col>
      </Row>
    </CenteredContainer>
  );
};

export default CustomerTimeTracer;
