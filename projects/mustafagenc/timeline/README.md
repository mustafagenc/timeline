# Timeline

Bu proje, Angular tabanlı bir zaman çizelgesi (timeline) bileşen kütüphanesidir. Farklı olayları, tarihleri ve ikonlarıyla birlikte görsel olarak sıralı şekilde göstermek için kullanılabilir.

## Özellikler

- Olayları tarih sırasına göre gösterir
- Her olay için başlık, açıklama, tarih, ikon ve renk desteği
- Olaylara bağlantı (link) ekleyebilme
- Sağ/sol hizalama (position) seçeneği
- Responsive tasarım

## Kurulum

Kütüphaneyi projenize eklemek için:

```sh
npm install @mustafagenc/timeline
```

## Kullanım

```html
<timeline [events]="timelineData"></timeline>
```

### Örnek Veri

```json
[
  {
    "title": "Güvenlik Kontrolü Yapılmalı",
    "description": "Ekskavatör X'in güvenlik ekipmanları kontrol edilmeli. İş emri açılabilir.",
    "date": "2012-07-22T14:30:00Z",
    "icon": { "icon": "fa-shield", "bgColor": "lime", "textColor": "#333", "borderColor": "#000"},
    "links": [
      { "name": "İş Emri Aç", "url": "https://google.com" }
    ],
    "position": "left"
  }
]
```

## Katkı

Katkıda bulunmak için lütfen bir issue açın veya pull request gönderin.