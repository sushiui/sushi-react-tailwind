import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Modal from "./Modal";
import Button from "../Button/Button";

storiesOf("DATADISPLAY/Modal", module)
  .add("Basic", () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggle = () => setVisible(!visible);

    return (
      <>
        <Button onClick={toggle} color="primary">
          Open
        </Button>
        <Modal
          title="This is title"
          children={<div className="h-[700px]">This is Long modal content</div>}
          visible={visible}
          onCancel={toggle}
          onOk={toggle}
        />
      </>
    );
  })
  .add("Disabled OK Button", () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggle = () => setVisible(!visible);

    return (
      <>
        <Button onClick={toggle} color="primary">
          Open
        </Button>
        <Modal title="This is title" children={<div>This is modal content</div>} visible={visible} onCancel={toggle} onOk={toggle} disableOk={true} />
      </>
    );
  })
  .add("No Footer", () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggle = () => setVisible(!visible);

    return (
      <>
        <Button onClick={toggle} color="primary">
          Open
        </Button>
        <Modal
          title="This is title"
          children={<div>This is modal content</div>}
          visible={visible}
          onCancel={toggle}
          onOk={toggle}
          hideFooter={true}
        />
      </>
    );
  })
  .add("No Close Icon", () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggle = () => setVisible(!visible);

    return (
      <>
        <Button onClick={toggle} color="primary">
          Open
        </Button>
        <Modal title="This is title" children={<div>This is modal content</div>} visible={visible} onCancel={toggle} onOk={toggle} closable={false} />
      </>
    );
  })
  .add("OK Loading", () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggle = () => setVisible(!visible);

    return (
      <>
        <Button onClick={toggle} color="primary">
          Open
        </Button>
        <Modal
          title="This is title"
          children={<div>This is modal content</div>}
          visible={visible}
          onCancel={toggle}
          onOk={toggle}
          confirmLoading={true}
        />
      </>
    );
  })
  .add("Custom Text Button", () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggle = () => setVisible(!visible);

    return (
      <>
        <Button onClick={toggle} color="primary">
          Open
        </Button>
        <Modal
          title="This is title"
          children={<div>This is modal content</div>}
          visible={visible}
          onCancel={toggle}
          onOk={toggle}
          cancelText={"ยกเลิก"}
          okText={"ตกลง"}
        />
      </>
    );
  })
  .add("Custom Width", () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggle = () => setVisible(!visible);

    return (
      <>
        <Button onClick={toggle} color="primary">
          Open
        </Button>
        <Modal title="This is title" children={<div>This is modal content</div>} visible={visible} onCancel={toggle} onOk={toggle} width={900} />
      </>
    );
  })
  .add("Custom Footer", () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggle = () => setVisible(!visible);

    return (
      <>
        <Button onClick={toggle} color="primary">
          Open
        </Button>
        <Modal
          title="This is title"
          children={<div>This is modal content</div>}
          visible={visible}
          onCancel={toggle}
          onOk={toggle}
          footer={
            <Button color="gray" onClick={toggle}>
              ล้างข้อมูล
            </Button>
          }
        />
      </>
    );
  })
  .add("Custom Footer with Footer Component", () => {
    const [visible, setVisible] = useState<boolean>(false);
    const toggle = () => setVisible(!visible);

    return (
      <>
        <Button onClick={toggle} color="primary">
          Open
        </Button>
        <Modal
          title="This is title"
          children={<div>This is modal content</div>}
          visible={visible}
          onCancel={toggle}
          onOk={toggle}
          footer={
            <Modal.Footer>
              <div className="flex justify-center py-2">
                <Button color="primary" onClick={toggle}>
                  OK
                </Button>
              </div>
            </Modal.Footer>
          }
        />
      </>
    );
  });
