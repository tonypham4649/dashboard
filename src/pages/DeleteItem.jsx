import React, { useState } from "react";
import { Button, Form, Input, InputNumber } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
};

export default function DeleteItem() {
  const [itemId, setItemId] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://fe21-db.vercel.app/foodano/${itemId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
      onFinish={handleSubmit}
    >
      <Form.Item
        name={["product", "id"]}
        label="Product ID"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input name="id" onChange={(e) => setItemId(e.target.value)} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button danger htmlType="submit">
          Delete
        </Button>
      </Form.Item>
    </Form>
  );
}
