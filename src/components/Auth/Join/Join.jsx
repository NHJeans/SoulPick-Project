const Join = () => {
  return (
    <div>
      <h3>SoulPick</h3>
      <form>
        <div>
          <label>닉네임:</label>
          <input type="text" required />
        </div>
        <div>
          <label>이메일:</label>
          <input type="email" required />
        </div>
        <div>
          <label>비밀번호:</label>
          <input type="password" required />
        </div>
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
};

export default Join;
