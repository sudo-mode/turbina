function MarshakLogo ({
  className = '',
  width = 50,
  height = 50,
  fill = '#fff'
}) {
  return (
    <svg  
      className={className}
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 1.39205V18.2955V35H35L33.7574 0H29.6154L28.5799 11.9318H20.503L19.8817 1.39205L14.0828 0.994318L14.9112 11.9318H6.21302L4.76331 0.994318L0 1.39205Z"
        fill={fill}
      />
    </svg>
  )
}

export default MarshakLogo;