type Props = {
  value: string;
};

export function BookItem({ value }: Props) {
  return (
    <li>
      <input type="text" value={value} />
      <input type="date" />
    </li>
  );
}

// BookItemのtype
// src配下にtypeつくって

// useStateにBookItemの配列を管理する用配列
// →何個かいれて表示する
// →setStateで更新する処理
