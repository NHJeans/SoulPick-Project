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

  const getYoutubeThumbnail = (link) => {
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = link.match(youtubeRegex);
    if (match && match[1]) {
      return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
    }
    return link || 'default_image_url_here';
  };

  return (
    <div style={styles.centerStyle}>
      <div style={styles.containerStyle}>
        <p style={styles.textTop}>내가 쓴 글</p>
      </div>
      {posts.map((post) => (
        <div key={post.id} style={styles.margin}>
          <div style={styles.box}>
            <p style={styles.textSecond}>{post.title}</p>
            <p style={styles.box1}>{post.content}</p>
          </div>
          <div>
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img style={styles.imgStyle} src={getYoutubeThumbnail(post.link)} alt="유튜브 썸네일" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPost;
