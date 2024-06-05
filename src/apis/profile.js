import supabase from './supabaseClient';

export const getUserProfile = async () => {
  const user = supabase.auth.user();
  if (!user) {
    return null;
  }
  const { data, error } = await supabase
    .from('users')
    .select('nickname, email, profile_image')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error('프로필 가져오기 오류:', error.message);
    return null;
  }
  return data;
};

export const updateUserProfile = async (updates) => {
  const user = supabase.auth.user();
  if (!user) {
    return null;
  }
  const { data, error } = await supabase
    .from('users')
    .update(updates)
    .eq('id', user.id);

  if (error) {
    console.error('프로필 업데이트 오류:', error.message);
    return null;
  }
  return data;
};
