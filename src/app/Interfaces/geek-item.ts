export interface GeekItem {
  id: number;
  title: string;
  type: 'Anime' | 'Manga' | 'Film' | 'Webtoon' | 'Manhwa';
  additionalTags: string[]; // Örn: ['Action', 'Adventure']
  status: 'To Watch' | 'Watching' | 'Done'; // Durum artık metin
  rating: number; // 0-5 arası puan
}