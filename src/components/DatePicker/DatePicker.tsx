import { useState } from "react";
import { Calendar } from "../Calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const DatePicker: React.FC = () => {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <div className="border-2 border-solid border-black bg-white flex flex-row flex-wrap gap-4">
      <Calendar value={value} onChange={setValue} />
      <div className="flex flex-col items-center justify-center">To</div>
      <Calendar />
    </div>
  );
};
