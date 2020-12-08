function ArowIcon ({
  className = '',
  width = 32,
  height = 13,
  fill = '#fff',
  isRotated = false
}) {      
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Если указывать "none" в консоль падает ошибка:
      // Error: <svg> attribute transform: Expected transform function, "none".
      // Атрибут transform в svg не работает на iOS
      style={{transform: `${isRotated ? "rotate(181deg)" : "rotate(0)"}`}}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.408.193a1 1 0 011.183 0l14.194 10.41a1 1 0 11-1.183 1.612L16.59 2.674a1 1 0 00-1.183 0l-13.01 9.54a1 1 0 01-1.183-1.612L15.408.193z"
        fill={fill}
      />
    </svg>
  )
}

export default ArowIcon;
