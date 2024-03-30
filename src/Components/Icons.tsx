export const callJoin = ({
  children,
  ...props
}: React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }): React.ReactElement => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    style={props.style}>
    <path
      style={{
        fill: "currentColor",
      }}
      d="M2 7.4A5.4 5.4 0 0 1 7.4 2c.36 0 .7.22.83.55l1.93 4.64a1 1 0 0 1-.43 1.25L7 10a8.52 8.52 0 0 0 7 7l1.12-2.24a1 1 0 0 1 1.19-.51l5.06 1.56c.38.11.63.46.63.85C22 19.6 19.6 22 16.66 22h-.37C8.39 22 2 15.6 2 7.71V7.4ZM13 3a1 1 0 0 1 1-1 8 8 0 0 1 8 8 1 1 0 1 1-2 0 6 6 0 0 0-6-6 1 1 0 0 1-1-1Z"
    />
    <path
      style={{
        fill: "currentColor",
      }}
      d="M13 7a1 1 0 0 1 1-1 4 4 0 0 1 4 4 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 0 1-1-1Z"
    />
    {children}
  </svg>
);

export default { callJoin };
