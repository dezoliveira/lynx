import { createClient } from "@supabase/supabase-js";

const supabaseUrl = JSON.stringify(import.meta.env.VITE_SUPABASE_URL);
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;