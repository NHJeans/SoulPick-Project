import supabase from './supabaseClient';

//supabase postId에 해당하는 Post 데이터 하나 불러오기
export async function fetchPost(postId) {
  const { data, error } = await supabase.from('Posts').select(`*, Users(nickname)`).eq('id', postId);
  if (error) throw error;
  //setPost(data[0]);
  //setNickname(data[0].Users.nickname);

  return data[0];
}
