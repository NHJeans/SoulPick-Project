import React from 'react';
import { styles } from './style';

const MyPost = () => {
  return (
    <div style={styles.centerStyle}>
      <div>
        <p style={styles.textTop}>내가 쓴 글</p>
        <p style={styles.textSecond}>오늘 나온 aespa 신곡</p>
        <p>
          너무 좋치 않나요? 뮤비도 너무 이쁘고 한번 들어보세요!! 어쩌구저쩌구 그랬습니다. 특히0분 00초에서 000의
          목소리가 너무 좋았습니다!
        </p>
      </div>
      <div>
        <img
          style={styles.imgStyle}
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTVfMjc0%2FMDAxNzA3OTcyODU4MjMz.qF8IV_kKzbEv4TggETLlt3AiIr_vvrRjhkD6BXjFNc8g.lj_0A4JjXaUtsIjGNRUWVpC_VNgcdWsiJ29aLR7LQ6Yg.PNG.slal0327%2Fpngwing.com_%252857%2529.png&type=a340"
          alt="동영상"
        />
      </div>
    </div>
  );
};

export default MyPost;
