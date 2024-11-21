import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabaseUrl = "https://ohrlynlsrffxfuhyyltu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ocmx5bmxzcmZmeGZ1aHl5bHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxNzc3OTQsImV4cCI6MjA0Nzc1Mzc5NH0.cgpAK8kFc5TECKt0de7_4fc9cTYCAtUTSPtjbh5KtcU";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
