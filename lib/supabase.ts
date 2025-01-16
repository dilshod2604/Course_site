import { createClient } from "@supabase/supabase-js";
//enviroments
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASEA_ANON_KEY!;
//create supabase create
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
