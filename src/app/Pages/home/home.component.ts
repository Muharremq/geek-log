import { Component } from '@angular/core';
import { GeekItem } from '../../Interfaces/geek-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Örnek Veriler
  geekList: GeekItem[] = [
    { 
      id: 1, 
      title: 'Attack on Titan', 
      type: 'Anime', 
      additionalTags: ['Action', 'Drama'], 
      status: 'Watching', 
      rating: 5 
    },
    { 
      id: 2, 
      title: 'One Piece', 
      type: 'Manga', 
      additionalTags: ['Adventure', 'Fantasy'], 
      status: 'To Watch', 
      rating: 0 
    }
  ];

  // --- MODAL İŞLEMLERİ İÇİN DEĞİŞKENLER ---
  isModalOpen: boolean = false; // Popup açık mı kapalı mı?
  
  // Yeni Ekleme Formu Verileri
  newItemTitle: string = '';
  newItemType: 'Anime' | 'Manga' | 'Film' | 'Webtoon' | 'Manhwa' = 'Anime';
  newItemGenre: string = ''; // Kullanıcı virgülle girecek (Örn: Action, Comedy)
  newItemStatus: 'To Watch' | 'Watching' | 'Done' = 'To Watch';

  // Modal Açma Fonksiyonu
  openModal() {
    this.isModalOpen = true;
    // Formu temizle
    this.newItemTitle = '';
    this.newItemGenre = '';
    this.newItemStatus = 'To Watch';
  }

  // Modal Kapama Fonksiyonu
  closeModal() {
    this.isModalOpen = false;
  }

  // --- EKLEME İŞLEMİ (Popup İçindeki Buton) ---
  addItem() {
    if (this.newItemTitle.trim().length === 0) {
      alert("Lütfen bir başlık giriniz!");
      return;
    }

    // Virgülle ayrılan türleri diziye çevir (Split)
    const tagsArray = this.newItemGenre.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

    const newItem: GeekItem = {
      id: Date.now(),
      title: this.newItemTitle,
      type: this.newItemType,
      additionalTags: tagsArray, // Diziyi buraya veriyoruz
      status: this.newItemStatus,
      rating: 0 // Yeni eklenenin puanı 0 başlar
    };

    this.geekList.push(newItem);
    this.closeModal(); // Ekleme bitince popup'ı kapat
  }

  // --- KAYDETME İŞLEMİ (Kart üzerindeki buton) ---
  saveItem(item: GeekItem) {
    // Gerçek bir backend olmadığı için kullanıcıya bildirim gösteriyoruz
    console.log("Kaydedilen Veri:", item);
    alert(`${item.title} üzerindeki değişiklikler kaydedildi! ✅`);
  }
  
  // --- DİĞER FONKSİYONLAR ---
  delete(id: number) {
    this.geekList = this.geekList.filter(item => item.id !== id);
  }

  get totalItems() { return this.geekList.length; }
  get toWatchCount() { return this.geekList.filter(i => i.status === 'To Watch').length; }
  get watchingCount() { return this.geekList.filter(i => i.status === 'Watching').length; }
  get doneCount() { return this.geekList.filter(i => i.status === 'Done').length; }

  getStars(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }
  
  // Yıldıza tıklayınca puanı güncelle
  setRating(item: GeekItem, rating: number) {
    item.rating = rating;
  }
}