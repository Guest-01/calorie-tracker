import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js'
import Constants from "expo-constants"

const supabaseUrl = Constants.manifest.extra.supabaseProjectUrl;
const supabaseAnonKey = Constants.manifest.extra.supabaseAnonKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    localStorage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
});