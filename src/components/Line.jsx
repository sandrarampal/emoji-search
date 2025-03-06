const Line = ({ emoji, index }) => {
  //   console.log(props);

  const handleCopyClick = async () => {
    await window.navigator.clipboard.writeText(emoji.symbol);
  };

  return (
    <div className="line-emoji" onClick={handleCopyClick}>
      <span>
        {emoji.symbol} {emoji.title}
      </span>
      <span className="copy">Click to copy !</span>
    </div>
  );
};

export default Line;
