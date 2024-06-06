import {ErrorMessage} from "../../style.js";

function ModalSelectBox({ name, value, onChange, error }) {
  return (
    <div>
      <select
        name={name}
        value={value}
        onChange={onChange}
        style={{
          padding: '10px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          height: '46px',
        }}
      >
        <option value="">카테고리를 선택해주세요.</option>
        <option value="k-pop">k-pop</option>
        <option value="재즈">재즈</option>
        <option value="클래식">클래식</option>
        <option value="댄스">댄스</option>
        <option value="ost">ost</option>
        <option value="발라드">발라드</option>
      </select>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
}

export default ModalSelectBox;
