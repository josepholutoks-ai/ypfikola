// Shared Supabase client for Young Professionals Forum Ikola
// Loaded on every page that needs auth or database access.
const SUPABASE_URL = 'https://jfjsscqpjxtwcrwluttw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmanNzY3Fwanh0d2Nyd2x1dHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg2MzI5MDksImV4cCI6MjEwNDIwODkwOX0.QMOUPnzu72615KUjW2xiY3Cr5VtqokoZsjrnMOJ8P7U';

const { createClient } = supabase;
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
