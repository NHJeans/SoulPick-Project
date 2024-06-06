import supabase from './supabaseClient';

//supabase postId에 해당하는 Post 데이터 하나 불러오기
export async function fetchPost(postId) {
  const { data, error } = await supabase.from('Posts').select(`*, Users(*)`).eq('id', postId);
  if (error) throw error;

  return data[0];
}

//supabase post 수정하기
export const updateSupabasePost = async (postId, updatedPost) => {
  const { error } = await supabase
    .from('Posts')
    .update({
      content: updatedPost
    })
    .eq('id', postId)
    .select();
  if (error) throw error;
};

//supabase post 삭제하기
export const deleteSupabasePost = async (postId) => {
  const { error } = await supabase.from('Posts').delete().eq('id', postId);
  if (error) throw error;
};
