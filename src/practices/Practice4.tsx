export const Practice4 = () => {
  const calcTotalFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickButton = () => {
    calcTotalFee(1000);
  };

  return (
    <div>
      <p>練習問題：設定ファイルを触る（tsconfig.json）</p>
      <button onClick={onClickButton}>練習問題4を実行</button>
    </div>
  );
};
