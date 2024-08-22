import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lhtzekyefviqmpbxnlje.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabaseUrl)
console.log(supabaseKey)
console.log(supabase)

export default supabase;