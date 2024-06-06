import supabase from './supabaseClient';

export const getCurrentUserID = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) throw error;
  const userId = data.user.id;
  return userId;
};

export const fetchUser = async (userId) => {
  const { data, error } = await supabase.from('Users').select('*').eq('id', userId).single();
  if (error) throw error;
  return data;
};
