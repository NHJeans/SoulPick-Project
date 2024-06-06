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

export const updateProfileImage = async (userId, newImage) => {
  try {
    const { error } = await supabase
      .from('Users')
      .update({ profile_img: newImage })
      .eq('id', userId);

    if (error) {
      throw new Error(error.message);
    }
    return newImage;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

export const fetchUserProfileImage = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('Users')
      .select('profile_img')
      .eq('id', userId)
      .single();

    if (error) {
      throw new Error(error.message);
    }
    return data.profile_img;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};