function BackwardIcon({
  className = '',
  width = 19,
  height = 18,
  fill = '#fff'
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Атрибут transform в svg не работает на iOS
      style={{transform: "rotate(180deg)"}}
    >
      <rect
        width="14%"
        height="90%"
        x="85.7%"
        y="5%"
        rx="1"
        fill={fill}
      />
      <path
        d="M13.805 7.763a1.475 1.475 0 010 2.474L2.318 17.753C1.324 18.402 0 17.696 0 16.515V1.485C0 .304 1.324-.403 2.318.248l11.487 7.515z"
        fill={fill}
      />
    </svg>
  )
}

export default BackwardIcon;
