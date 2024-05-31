import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;


const supabase = createClient(supabaseUrl, supabaseKey);
if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or key.");
}

export default supabase;