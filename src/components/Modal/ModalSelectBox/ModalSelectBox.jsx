import {ErrorMessage} from "../style.js";

function ModalSelectBox({ name, value, onChange, error }) {
  return (
    <div>
      <ModalSelectBox
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">카테고리를 선택해주세요.</option>
        <option value="K-Pop">K-Pop</option>
        <option value="Pop">Pop</option>
        <option value="힙합/랩">힙합/랩</option>
        <option value="발라드">발라드</option>
        <option value="록">록</option>
        <option value="기타">기타</option>
      </ModalSelectBox>
      {error && <ErrorMessage style={{marginTop: '20px'}}>{error}</ErrorMessage>}
    </div>
  );
}

export default ModalSelectBox;
