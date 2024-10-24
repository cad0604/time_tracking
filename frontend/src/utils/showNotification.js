import { notification } from "antd";

export function showWarningNotification(title, message) {
  notification["warning"]({
    duration: 5,
    message: title,
    description: message,
  });
}

export function showSuccessNotification(title, message) {
  notification["success"]({
    duration: 5,
    message: title,
    description: message,
  });
}
