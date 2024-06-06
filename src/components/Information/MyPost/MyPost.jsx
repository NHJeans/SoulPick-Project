import React, { useEffect, useState } from 'react';
import { styles } from './style';
import supabase from '../../../apis/supabaseClient';

const MyPost = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserId = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      if (session) {
        setUserId(session.user.id);
      } else {
        console.log('No user is logged in');
      }
    };

    fetchUserId();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        const { data, error } = await supabase.from('Posts').select('*').eq('user_id', userId);

        if (error) {
          console.log('error => ', error);
        } else {
          console.log('data => ', data);
          setPosts(data);
        }
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div style={styles.centerStyle}>
      {posts.map((post) => (
        <div key={post.id} style={styles.margin}>
          <div style={styles.box}>
            <p style={styles.textTop}>내가 쓴 글</p>
            <p style={styles.textSecond}>{post.title}</p>
            <p style={styles.box1}>{post.content}</p>
          </div>

          <div>
            <img
              style={styles.imgStyle}
              src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTVfMjc0%2FMDAxNzA3OTcyODU4MjMz.qF8IV_kKzbEv4TggETLlt3AiIr_vvrRjhkD6BXjFNc8g.lj_0A4JjXaUtsIjGNRUWVpC_VNgcdWsiJ29aLR7LQ6Yg.PNG.slal0327%2Fpngwing.com_%252857%2529.png&type=a340"
              alt="동영상"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPost;
