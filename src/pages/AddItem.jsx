import React, { useState } from "react";
import { Button, Form, Input } from "antd";

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

export default function AddItem() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0.0,
    image: "",
    size: "",
    category: "",
  });

  const handleInputChange = (e, fieldName) => {
    const value = e.target ? e.target.value : e;
    setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://fe21-db.vercel.app/foodano/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
        name={["product", "name"]}
        label="Product name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          name="name"
          value={formData.name}
          onChange={(e) => handleInputChange(e, "name")}
        />
      </Form.Item>

      <Form.Item name={["product", "description"]} label="Description">
        <Input
          name="description"
          value={formData.description}
          onChange={(e) => handleInputChange(e, "description")}
        />
      </Form.Item>

      <Form.Item
        name={["product", "price"]}
        label="Price"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          name="price"
          value={formData.price}
          onChange={(e) => handleInputChange(e, "price")}
        />
      </Form.Item>

      <Form.Item name={["product", "image"]} label="ImageURL">
        <Input
          name="image"
          value={formData.image}
          onChange={(e) => handleInputChange(e, "image")}
        />
      </Form.Item>

      <Form.Item
        name={["product", "size"]}
        label="Size"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          name="size"
          value={formData.size}
          onChange={(e) => handleInputChange(e, "size")}
        />
      </Form.Item>

      <Form.Item
        name={["product", "category"]}
        label="Category"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input
          name="category"
          value={formData.category}
          onChange={(e) => handleInputChange(e, "category")}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
