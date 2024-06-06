import supabase from "../apis/supabaseClient.js";

export async function getCommentCount(postId) {
  const { data, error } = await supabase
    .from('Comments')
    .select('*', { count: 'exact' })
    .eq('post_id', postId);

  if (error) {
    console.error('Error fetching comment count:', error);
    return 0;
  }

  return data.length;
}
