export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      openai_images: {
        Row: {
          base64: string | null
          created_at: string | null
          id: number
        }
        Insert: {
          base64?: string | null
          created_at?: string | null
          id?: number
        }
        Update: {
          base64?: string | null
          created_at?: string | null
          id?: number
        }
      }
      openai_quotes: {
        Row: {
          created_at: string | null
          id: number
          quote: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          quote?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          quote?: string | null
        }
      }
    }
    Views: {
      random_npc: {
        Row: {
          base64: string | null
          quote: string | null
        }
      }
      random_quotes: {
        Row: {
          created_at: string | null
          id: number | null
          quote: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number | null
          quote?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number | null
          quote?: string | null
        }
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
