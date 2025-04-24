const BellBar = (props) => {
    const { fill, x, y, width, height } = props;
    return (
      <path d={`
        M${x},${y + height}
        Q${x + width / 2},${y - height}
        ${x + width},${y + height}
        Z
      `} fill={fill} />
    );
};
  
export { BellBar };