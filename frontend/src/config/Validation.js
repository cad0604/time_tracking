export const required = {
  required: true,
  message: "El campo es obligatorio",
};

export const email = {
  type: "email",
  message: "Por favor introduce un correo electrónico válido",
};

export const passwordVaildate = {
  pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$",
  message:
    "La contraseña debe contener una letra mayúscula, un número y una letra especial.",
};

export const min = {
  min: 6,
  message: "La contraseña debe tener al menos 6 caracteres.",
};

export const match = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || getFieldValue("password") === value) {
      return Promise.resolve();
    }
    return Promise.reject("Las contraseñas no coinciden");
  },
});
