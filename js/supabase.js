const SUPABASE_URL = "https://tndcilwfpszviupiilcl.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_8dlMDmQXv3NiE7Zs3kIWbA_vugILjtj";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
