import supabase from './supabaseClient';

/**Detail.jsx */
//supabase getUser하기
export const getCurrentUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  const userid = data.user.id;
  if (error) throw error;
  return userid;
};

/**CommentInput.jsx */
//supabase comment 등록하기
export const insertComment = async (comment, postId, userId) => {
  const { error } = await supabase.from('Comments').insert({
    content: comment.content,
    post_id: postId,
    user_id: userId
  });
  if (error) throw error;
};

/** CommentItem.jsx */
//Users 테이블에서 댓글 쓴 사용자의 정보 받아오기
export const fetchUser = async (comment) => {
  const { data, error } = await supabase.from('Users').select('*').eq('id', comment.user_id).single();
  if (error) throw error;
  const nickname = data.nickname;
  return nickname;
};

//supabase comment 수정하기
export const updateSupabaseComment = async (commentId, updatedContent) => {
  const { error } = await supabase
    .from('Comments')
    .update({
      content: updatedContent
    })
    .eq('id', commentId)
    .select();
  if (error) throw error;
};

//supabase comment 삭제하기
export const deleteSupabaseComment = async (commentId) => {
  const { error } = await supabase.from('Comments').delete().eq('id', commentId);
  if (error) throw error;
};

/**CommentList.jsx */
//supabase에서 list 읽어옴
export async function fetchComments(postId) {
  const { data, error } = await supabase.from('Comments').select('*,Users(nickname)').eq('post_id', postId);
  if (error) throw error;
  return data;
}
