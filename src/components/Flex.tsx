import React from 'react';

type FlexProps =  React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Row = (props: FlexProps) => {
  const { className, children, ...nativeProps } = props;
  
  return <div className={`flex-row flex w-full justify-between items-center ${className ?? ''}`} {...nativeProps}>{children}</div>    
}


export const Column = (props: FlexProps) => {
  const { className, children, ...nativeProps } = props;
  
  return <div className={`w-full flex flex-col justify-start items-center ${className ?? ''}`} {...nativeProps}>{children}</div>    
}