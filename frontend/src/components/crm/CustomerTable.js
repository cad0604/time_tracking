import React, { useEffect } from "react";
import { Button, Col, Popconfirm, Row, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/crm/customer/actions";
import BrannTitle from "components/ui/typo/Title";

export default function CustomerTable() {
  const dispatch = useDispatch();
  const { customers, isFetchingCustomer, mustFetchCustomer } = useSelector(
    (state) => state.crmCustomer
  );

  useEffect(() => {
    dispatch({
      type: actions.FETCH_CUSTOMER,
    });
  }, [dispatch]);

  useEffect(() => {
    if (mustFetchCustomer === true) {
      dispatch({
        type: actions.FETCH_CUSTOMER,
      });
    }
  }, [dispatch, mustFetchCustomer]);

  const handleDeletePerson = (id) => {
    dispatch({
      type: actions.DELETE_CUSTOMER,
      id: id,
    });
  };

  const columns = [
    {
      title: "DNI",
      dataIndex: "dni",
      key: "dni",
    },
    {
      title: "Nombre de pila",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Apellido",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Acción",
      key: "id",
      align: "center",
      render: (id) => (
        <Popconfirm
          title="Confirma nuevamente!"
          description="Estás segura de eliminar a esta trabajadora?"
          onConfirm={() => handleDeletePerson(id.id)}
        >
          <Button>Borrar</Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <React.Fragment>
      <Row justify={"center"}>
        <Col>
          <BrannTitle text={"Una lista de personal"} />
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col sm={24} xs={24} md={12}>
          <Table
            rowKey={"id"}
            loading={isFetchingCustomer}
            columns={columns}
            dataSource={customers}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}
