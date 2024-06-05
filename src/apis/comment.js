import supabase from './supabaseClient';

//supabase getUser하기
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  const userid = data.user.id;
  if (error) throw error;
  return userid;
};

//supabase comment 등록하기
export const insertComment = async (comment, postId, userId) => {
  const { error } = await supabase.from('Comments').insert({
    content: comment.content,
    post_id: postId,
    user_id: userId
  });
  if (error) throw error;
};

//Users 테이블에서 댓글 쓴 사용자의 정보 받아오기
export const fetchUser = async () => {
  const { data, error } = await supabase.from('Users').select('*').eq('id', comment.user_id).single();
  if (error) throw error;
  const nickname = data.nickname;
  return nickname;
  //setNickname(nickname);
};
