import React, { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import { DatePickerProps } from "./DatePicker.types";
import Input from "../Input/Input";
import Icon from "../Icon/Icon";
import { registerLocale } from "react-datepicker";
import { th } from "date-fns/locale";
import classNames from "classnames";
registerLocale("th", th);

const DatePicker = React.forwardRef<HTMLDivElement, DatePickerProps>(
  (
    {
      dateFormat,
      disabled,
      viewOnly,
      onChange,
      placeholder,
      style,
      suffix,
      pickerType,
      showYearDropdown,
      showMonthDropdown,
      dropdownMode,
      minDate,
      maxDate,
      onMonthChange,
      onYearChange,
      onCalendarOpen,
      ...props
    },
    ref
  ) => {
    const datePickerRef = useRef<ReactDatePicker | null>(null);

    const handleOnYearChange = () => {
      handleOnCalendarOpen();
    };

    const handleOnMonthChange = () => {
      handleOnCalendarOpen();
    };

    const handleOnCalendarOpen = () => {
      changeYearBuddhist();
    };

    const changeYearBuddhist = () => {
      if (props.locale === "th") {
        let elements = Array.from(document.querySelectorAll(".react-datepicker__year-text"));
        if (elements.length) {
          elements.forEach((element) => {
            element.textContent = (Number(element.textContent) + 543).toString();
          });
        }
        let element = document.querySelector(".react-datepicker-year-header");
        if (element) {
          const [year1, year2] = element.textContent?.split("-") ?? [];
          if (year1 && year2) {
            element.textContent = [Number(year1) + 543, Number(year2) + 543].join(" - ");
          }
        }
        element = document.querySelector(".react-datepicker__current-month");
        if (element) {
          const [month, year] = element.textContent?.split(" ") ?? [];
          if (month && year) {
            element.textContent = [month, Number(year) + 543].join(" ");
          }
        }
        elements = Array.from(document.querySelectorAll(".react-datepicker__year-select option"));
        if (elements.length) {
          elements.forEach((element) => {
            if (element.textContent === (element as HTMLOptionElement).value) {
              element.textContent = (Number(element.textContent) + 543).toString();
            }
          });
        }
      }
    };

    const onSuffixClick = () => {
      !viewOnly && datePickerRef.current?.setOpen(true);
    };

    return (
      <div style={style} className="react-datepicker-popper" ref={ref}>
        <ReactDatePicker
          {...props}
          ref={datePickerRef}
          onChange={onChange}
          onCalendarOpen={onCalendarOpen ? onCalendarOpen : handleOnCalendarOpen}
          onMonthChange={onMonthChange ? onMonthChange : handleOnMonthChange}
          onYearChange={onYearChange ? onYearChange : handleOnYearChange}
          dateFormat={dateFormat}
          disabled={disabled}
          placeholderText={placeholder}
          showYearDropdown={showYearDropdown}
          showMonthDropdown={showMonthDropdown}
          dropdownMode={dropdownMode}
          customInput={
            <Input
              {...props}
              viewOnly={viewOnly}
              suffix={
                suffix || (
                  <Icon
                    data-testid="calendar-icon"
                    className={classNames({ "cursor-pointer": !viewOnly })}
                    name="calendar_today"
                    type="outlined"
                    size="text-15px"
                    onClick={onSuffixClick}
                  />
                )
              }
              readOnlyValue={true}
            />
          }
          showYearPicker={pickerType === "year"}
          showMonthYearPicker={pickerType === "month"}
          minDate={minDate}
          maxDate={maxDate}
        />
      </div>
    );
  }
);

export default DatePicker;
