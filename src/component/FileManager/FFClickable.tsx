import Image from "next/image";
import React, { FC, PropsWithChildren } from "react";

interface FFClickableProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: {
    src: string;
    alt: string;
  };
}

export const FFClickable: FC<PropsWithChildren<FFClickableProps>> = ({
  children,
  icon,
  className,
  ...props
}) => {
  const onPress: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    props.onClick?.(e);
  };
  return (
    <button
      className={`w-full flex cursor-pointer flex-start gap-2 items-center text-sm text-gray-200 p-1 px-4 hover:bg-slate-700 ${className}`}
      {...props}
      onClick={onPress}
    >
      {icon && (
        <Image
          src={icon.src}
          width={16}
          height={16}
          objectFit="contain"
          alt={icon.alt}
        />
      )}
      {children}
    </button>
  );
};
