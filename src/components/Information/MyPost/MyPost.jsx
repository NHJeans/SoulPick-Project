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
  console.log('@@ posts', posts)

  return (
    <PostContainer>
      <PostTitle>내가 쓴 글</PostTitle>
      {posts.map((post) => (
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
            {/*{thumbnail ? <img src={thumbnail} alt={`${item.title} thumbnail`} /> : <p>썸네일을 불러올 수 없습니다.</p>}*/}
          </ContentImgWrapper>
          {/*<PostItem>*/}
          {/*  <PostContentWrapper>*/}
          {/*    <PostText>{post.title}</PostText>*/}
          {/*    <PostContent>{post.content}</PostContent>*/}
          {/*    <CommentCount>*/}
          {/*      <div>*/}
          {/*        <IconComment name="comment" />*/}
          {/*        {post.commentCount}*/}
          {/*      </div>*/}
          {/*    </CommentCount>*/}
          {/*  </PostContentWrapper>*/}
          {/*  <div>*/}
          {/*    <a href={post.link} target="_blank" rel="noopener noreferrer">*/}
          {/*      <Thumbnail src={getYoutubeThumbnail(post.link)} alt="유튜브 썸네일" />*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</PostItem>*/}
        </PostLink>
      ))}
    </PostContainer>
  );
};

export default MyPost;
