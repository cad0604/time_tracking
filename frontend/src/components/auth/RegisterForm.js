import React, { useEffect } from "react";

import { Form } from "antd";

import { required } from "config/Validation";

import BrannInput from "components/ui/input/Input";
import BrannSubmitButton from "components/ui/button/SubmitButton";
import BrannPasswordInput from "components/ui/input/PasswordInput";
import { useDispatch, useSelector } from "react-redux";
import actions from "states/auth/signup/actions";
import { useNavigate } from "react-router-dom";

export default function RegisterForm({ updateStep }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSigning, isSigned } = useSelector((state) => state.signup);

  useEffect(() => {
    if (isSigned === true) {
      dispatch({
        type: actions.RESET_SIGNUP,
      });

      navigate("/autenticación/acceso");
    }
  }, [isSigned, dispatch, navigate]);

  const onFinish = (values) => {
    delete values.confirm_password;

    dispatch({
      type: actions.SIGNUP,
      payload: values,
    });

    //
  };

  return (
    <Form className="auth-form" name="register-form" onFinish={onFinish}>
      <Form.Item name="firstName" rules={[required]}>
        <BrannInput placeholder="Nombre de pila *" />
      </Form.Item>
      <Form.Item name="lastName" rules={[required]}>
        <BrannInput placeholder="Apellido *" />
      </Form.Item>
      <Form.Item name="dni" rules={[required]}>
        <BrannInput placeholder="DNI *" />
      </Form.Item>
      <Form.Item name="password" rules={[required]}>
        <BrannPasswordInput placeholder="Nueva contraseña *" />
      </Form.Item>
      <Form.Item name="confirm_password" rules={[required]}>
        <BrannPasswordInput placeholder="Repita la contraseña *" />
      </Form.Item>
      <Form.Item>
        <BrannSubmitButton label="Continuar" fullWidth loading={isSigning} />
      </Form.Item>
    </Form>
  );
}
