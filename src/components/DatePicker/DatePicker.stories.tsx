import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import DatePicker from "./DatePicker";
import Icon from "../Icon/Icon";

const style = { width: "160px" };

storiesOf("Data Entry/DatePicker", module)
  .add("Basic", () => {
    const [date, setDate] = useState<Date | null>();

    return <DatePicker selected={date} onChange={(value) => setDate(value)} style={style} placeholder="Please Select" />;
  })
  .add("Month Picker", () => {
    const [date, setDate] = useState<Date | null>();

    return <DatePicker selected={date} onChange={setDate} style={style} placeholder="Please Select" pickerType="month" dateFormat="MM/yyyy" />;
  })
  .add("Year Picker", () => {
    const [date, setDate] = useState<Date | null>();

    return <DatePicker selected={date} onChange={setDate} style={style} placeholder="Please Select" pickerType="year" dateFormat="yyyy" />;
  })
  .add("Error", () => {
    const [date, setDate] = useState<Date | null>(new Date());

    return <DatePicker selected={date} onChange={setDate} style={style} status="error" message="Long error message" />;
  })
  .add("Warning", () => {
    const [date, setDate] = useState<Date | null>(new Date());

    return <DatePicker selected={date} onChange={setDate} style={style} status="warning" message="Long error message" />;
  })
  .add("Disabled", () => {
    const [date, setDate] = useState<Date | null>(new Date());

    return <DatePicker selected={date} onChange={setDate} style={style} disabled={true} />;
  })
  .add("View Only", () => {
    const [date, setDate] = useState<Date | null>(new Date());

    return <DatePicker selected={date} onChange={setDate} style={style} viewOnly={true} />;
  })
  .add("Min Date", () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return <DatePicker selected={date} onChange={setDate} style={style} viewOnly={false} minDate={date} />;
  })
  .add("Max Date", () => {
    const [date, setDate] = useState<Date | null>(new Date());
    return <DatePicker selected={date} onChange={setDate} style={style} viewOnly={false} maxDate={date} />;
  })
  .add("Custom Size", () => {
    const [smallDate, setSmallDate] = useState<Date | null>();
    const [middleDate, setMiddleDate] = useState<Date | null>();
    const [largeDate, setLargeDate] = useState<Date | null>();

    return (
      <div className="grid grid-cols-3">
        <DatePicker selected={smallDate} onChange={setSmallDate} style={style} placeholder="Please Select" size="small" />
        <DatePicker selected={middleDate} onChange={setMiddleDate} style={style} placeholder="Please Select" size="middle" />
        <DatePicker selected={largeDate} onChange={setLargeDate} style={style} placeholder="Please Select" size="large" />
      </div>
    );
  })
  .add("No Border", () => {
    const [date, setDate] = useState<Date | null>();

    return <DatePicker selected={date} onChange={setDate} style={style} bordered={false} placeholder="Please Select" />;
  })
  .add("Custom Suffix", () => {
    const [date, setDate] = useState<Date | null>();

    return (
      <DatePicker
        selected={date}
        onChange={setDate}
        style={style}
        placeholder="Please Select"
        suffix={<Icon name="edit_calendar" type="outlined" size="text-16px" />}
      />
    );
  })
  .add("Allow Clear", () => {
    const [date, setDate] = useState<Date | null>(new Date());

    return <DatePicker selected={date} onChange={setDate} style={style} placeholder="Please Select" allowClear />;
  })
  .add("Custom Allow Clear", () => {
    const [date, setDate] = useState<Date | null>();

    return (
      <DatePicker
        selected={date}
        onChange={setDate}
        style={style}
        placeholder="Please Select"
        allowClear={{
          clearIcon: <Icon name="remove_circle" size="text-16px" />,
        }}
      />
    );
  })
  .add("Custom Locale", () => {
    const [date, setDate] = useState<Date | null>();

    return <DatePicker selected={date} onChange={setDate} style={style} placeholder="Please Select" locale="th" />;
  })
  .add("Custom Format", () => {
    const [date, setDate] = useState<Date | null>();

    return <DatePicker selected={date} onChange={setDate} style={style} placeholder="Please Select" locale="th" dateFormat="dd MMM yyyy" />;
  });
