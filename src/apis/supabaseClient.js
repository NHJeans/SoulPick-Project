import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;


const supabase = createClient(supabaseUrl, supabaseKey);
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Supabase URL or key가 존재하지 않습니다.");
}

export default supabase;