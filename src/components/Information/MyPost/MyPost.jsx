import { useEffect, useState } from 'react';
import supabase from '../../../apis/supabaseClient';
import { getYoutubeThumbnail } from '../../../utils/youTube';
import { IconComment } from '../../Icon/components/Icons/IconComment';
import { getCommentCount } from '../../../utils/comment';
import {PostContainer, PostLink, PostTitle} from "../../PostDetail/style.js";
import {
  CommentCount,
  ContentDescription,
  ContentImgWrapper,
  ContentText,
  ContentTextWrapper
} from "../../Contents/ContentItem/style.js";

const MyPost = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState(null);

  const sortedData = [...posts].sort((latest, oldest) => {
    return new Date(oldest.updated_at) - new Date(latest.updated_at);
  });

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
          const postsWithComments = await Promise.all(
            data.map(async (post) => {
              const commentCount = await getCommentCount(post.id);
              return { ...post, commentCount };
            })
          );
          setPosts(postsWithComments);
        }
      }
    };

    fetchData();
  }, [userId]);
  
  return (
    <PostContainer>
      <PostTitle>내가 쓴 글</PostTitle>
      {sortedData.map((post) => (
        <PostLink to={`/details/${post.id}`} key={post.id}>
          <ContentTextWrapper>
            <ContentText>{post.title}</ContentText>
            <ContentDescription>{post.content}</ContentDescription>
            <CommentCount>
              <div>
                <IconComment name="comment" />
                {post.commentCount}
              </div>
            </CommentCount>
          </ContentTextWrapper>
          <ContentImgWrapper>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img src={getYoutubeThumbnail(post.link)} alt="유튜브 썸네일" />
              </a>
          </ContentImgWrapper>
          </ContentImgWrapper>
        </PostLink>
      ))}
    </PostContainer>
  );
};

export default MyPost;
