# 🗺️ Interaktywna Mapa Malty

Interaktywna mapa turystyczna Malty z naniesionymi punktami POI, trasami autobusowymi i możliwością pracy offline. Stworzona jako pojedynczy plik HTML z wbudowaną biblioteką Leaflet.js.

## 🌟 Funkcje

- **11 punktów turystycznych** z kolorowymi markerami (Atrakcje 🟢, Zagadki 🔴, Plaże 🔵, Atrakcja+Zagadka 🟢🔴)
- **6 linii autobusowych** z rozkładami jazdy i trasami (202, 203, 222, 13, 74, 71)
- **⛴️ Prom na Gozo** (linia przerywana Ċirkewwa → Mgarr)
- **🚏 Przystanki autobusowe** — małe kółka na mapie z nazwami i liniami
- **🔍 Panel filtrów** — włącz/wyłącz kategorie miejsc i linie autobusowe
- **📍 Geolokalizacja** — przycisk pokazujący Twoją pozycję na mapie
- **📏 Odległości** — kalkulator dystansów między kluczowymi miejscami
- **📖 Klikalna legenda** — kliknij nazwę miejsca, aby przybliżyć mapę
- **📱 Responsywność** — działa na desktopie i telefonie (hamburger menu)
- **💾 Offline-ready** — Leaflet wbudowany w HTML, Service Worker do cache'owania kafelek
- **📲 PWA** — możliwość dodania do ekranu głównego telefonu

## 🏛️ Miejsca

| Miejsce | Typ | Współrzędne |
|---------|-----|-------------|
| Katedra św. Jana (Valletta) | Atrakcja + Zagadka | 35.8986° N, 14.5146° E |
| Pałac Wielkich Mistrzów (Valletta) | Atrakcja + Zagadka | 35.8989° N, 14.5144° E |
| Katakumby św. Pawła (Rabat) | Atrakcja + Zagadka | 35.8856° N, 14.4044° E |
| Świątynia Ġgantija (Gozo) | Atrakcja + Zagadka | 36.0475° N, 14.2675° E |
| Fort św. Anioła (Birgu) | Atrakcja + Zagadka | 35.8897° N, 14.5222° E |
| Gardjola (Senglea) | Atrakcja + Zagadka | 35.8906° N, 14.5175° E |
| Kościół św. Wawrzyńca (Birgu) | Rozwiązanie Zagadki | 35.8889° N, 14.5206° E |
| Ramla Bay (Gozo) | Plaża | 36.0667° N, 14.2500° E |
| Mdina Gate | Atrakcja | 35.8858° N, 14.4075° E |
| Blue Grotto | Atrakcja | 35.8250° N, 14.4667° E |
| Marsaxlokk — Targ Rybacki | Atrakcja | 35.8431° N, 14.5350° E |

## 🚌 Linie autobusowe

| Linia | Trasa | Kolor |
|-------|-------|-------|
| 202 | Valletta → Mdina/Rabat | 🟠 Pomarańczowy |
| 203 | Mdina → Dingli Cliffs | 🟣 Fioletowy |
| 222 | Valletta → Ċirkewwa (prom na Gozo) | 🟢 Turkusowy |
| 13 | Valletta → Marsaxlokk | 🟡 Żółty |
| 74 | Marsaxlokk → Blue Grotto | 🔴 Czerwony |
| 71 | Blue Grotto → Trzy Miasta | 🔵 Niebieski |

## 🛠️ Technologia

- **Leaflet.js** 1.9.4 (wbudowany w HTML — działa bez internetu)
- **CartoDB Positron** — turystyczny styl podkładu mapy
- **Service Worker** — cache'owanie kafelek do użytku offline
- **PWA Manifest** — możliwość instalacji na telefonie
- **Geolocation API** — pokazywanie pozycji użytkownika

## 🚀 Uruchomienie

### Lokalnie (wymaga serwera HTTP dla Service Workera)

```bash
cd malta-map
python3 -m http.server 8080
# Otwórz: http://localhost:8080
```

### Bezpośrednio z pliku

Otwórz `index.html` w przeglądarce. Mapa zadziała, ale Service Worker (offline cache) nie zarejestruje się bez serwera HTTP.

### GitHub Pages

Mapa dostępna online pod adresem:
```
https://mwlodar25-wq.github.io/malta-map/
```

## 📁 Struktura plików

```
malta-map/
├── index.html          # Główna mapa (Leaflet wbudowany, ~190 KB)
├── sw.js               # Service Worker (cache kafelek)
├── manifest.json       # PWA manifest
├── README.md           # Niniejszy plik
└── malta-map-spec.md   # Specyfikacja projektu
```

## 🗺️ Roadmap na przyszłość

### Planowane (kolejność priorytetowa)

- [x] Podstawowa mapa z miejscami i trasami
- [x] Filtry kategorii i linii autobusowych
- [x] Klikalna legenda (przybliżanie do miejsc)
- [x] Offline-ready (Leaflet w HTML + Service Worker)
- [x] PWA (możliwość instalacji)
- [x] Legenda w panelu bocznym (nie na mapie)
- [x] Przystanki autobusowe na mapie
- [x] Geolokalizacja użytkownika
- [x] Statystyki odległości
- [ ] Wyszukiwarka miejsc
- [ ] Ulubione miejsca (localStorage)
- [ ] Przycisk „Pobierz GPX" dla tras
- [ ] Ciemny motyw (toggle dzień/noc)
- [ ] Statystyki wizyty (odwiedzone miejsca)
- [ ] Wielojęzyczność (angielski + polski)
- [ ] Integracja z Maltese public transport API (live rozkłady)

## 📄 Licencja

Projekt prywatny — do użytku własnego.
