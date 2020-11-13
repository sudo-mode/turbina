const PauseIcon = ({ width = 13, height = 16 }) => {
  return (
    <svg
      className="control-btn_pause"
      width={width}
      height={height}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 0a1 1 0 00-1 1v16a1 1 0 001 1h2a1 1 0 001-1V1a1 1 0 00-1-1H1zm10 0a1 1 0 00-1 1v16a1 1 0 001 1h2a1 1 0 001-1V1a1 1 0 00-1-1h-2z"
        fill="#fff"
      />
    </svg>
  )
}

export default PauseIcon;
