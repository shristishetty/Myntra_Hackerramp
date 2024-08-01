import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tqlgzbaugpmovthlnssy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbGd6YmF1Z3Btb3Z0aGxuc3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1MDg0NjEsImV4cCI6MjAzODA4NDQ2MX0.mmOqulcWL_yZh68c7tuUG4zPxGSMJNGkC2bjgfLS_Is';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
