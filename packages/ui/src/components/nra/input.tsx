import { cn } from "@repo/ui/lib/utils";
import React from "react";
import { Icon } from "@iconify-icon/react";
import { UseFormReturn } from "react-hook-form";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  formControl?: UseFormReturn<any>;
}
const NraInput = React.forwardRef<HTMLInputElement, Props>(
  (
    { className, type, startContent, endContent, formControl, ...props },
    ref
  ) => {
    return (
      <>
        <div
          className={cn(
            "flex flex-row items-center px-3 py-1 w-full h-9 text-sm bg-transparent rounded-md border shadow-sm transition-colors border-input focus-within:ring-1 focus-within:ring-ring",
            className
          )}
        >
          {startContent && (
            <div className="flex justify-center items-center mr-2">
              {startContent}
            </div>
          )}
          <input
            type={type}
            ref={ref}
            className="flex-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            {...props}
          />
          {endContent && (
            <div className="flex justify-center items-center ml-2">
              {endContent}
            </div>
          )}
          {props.value && (
            <Icon
              className="cursor-pointer text-muted-foreground"
              icon={"ant-design:close-circle-outlined"}
              onClick={() => {
                if (formControl && props.name) {
                  formControl.setValue(props.name, "");
                }
              }}
            />
          )}
        </div>
      </>
    );
  }
);

NraInput.displayName = "NraInput";

export { NraInput };
