# Interaktywna Mapa Malty — Specyfikacja

## 1. Przegląd projektu

Stworzenie interaktywnej mapy turystycznej Malty w formie pojedynczego pliku HTML z wykorzystaniem **Leaflet.js** (lekka, darmowa biblioteka mapowa oparta na OpenStreetMap). Mapa zawiera naniesione punkty turystyczne, trasy autobusowe oraz interaktywne filtry.

---

## 2. Technologia

| Element | Wybór | Uzasadnienie |
|---------|-------|-------------|
| Biblioteka mapowa | **Leaflet.js** (v1.9.x) | Lekka (~42KB), darmowa, bogata w pluginy, idealna dla pojedynczego pliku HTML |
| Podkład mapowy | **OpenStreetMap** (tile layer: `OpenStreetMap.Mapnik` lub styl turystyczny `OpenTopoMap`) | Darmowy, brak ograniczeń użycia |
| Dodatkowe biblioteki | Leaflet.markercluster (opcjonalnie), Leaflet CSS | Dla ewentualnego grupowania znaczników i ładnego stylowania |
| Ikony znaczników | **Niestandardowe ikony SVG** (generowane przez Leaflet DivIcon) | Pełna kontrola nad kolorami i wyglądem |
| Język | **Mieszany**: nazwy miejsc po polsku i angielsku, reszta interfejsu (filtry, legenda, komunikaty) po polsku |

---

## 3. Miejsca (Points of Interest)

### 3.1 Lista punktów

| Lp. | Nazwa (PL / EN) | Szerokość (N) | Długość (E) | Typ |
|-----|----------------|---------------|-------------|-----|
| 1 | Katedra św. Jana / St. John's Co-Cathedral | 35.8986 | 14.5146 | Atrakcja + Zagadka |
| 2 | Pałac Wielkich Mistrzów / Grandmaster's Palace | 35.8989 | 14.5144 | Atrakcja + Zagadka |
| 3 | Katakumby św. Pawła / St. Paul's Catacombs | 35.8856 | 14.4044 | Atrakcja + Zagadka |
| 4 | Świątynia Ġgantija / Ġgantija Temples | 36.0475 | 14.2675 | Atrakcja + Zagadka |
| 5 | Fort św. Anioła / Fort St. Angelo | 35.8897 | 14.5222 | Atrakcja + Zagadka |
| 6 | Gardjola / Gardjola Garden | 35.8906 | 14.5175 | Atrakcja + Zagadka |
| 7 | Kościół św. Wawrzyńca / St. Lawrence's Church | 35.8889 | 14.5206 | Rozwiązanie Zagadki |
| 8 | Ramla Bay / Ramla Bay | 36.0667 | 14.2500 | Plaża |
| 9 | Mdina Gate / Mdina Gate | 35.8858 | 14.4075 | Atrakcja |
| 10 | Blue Grotto / Blue Grotto | 35.8250 | 14.4667 | Atrakcja |
| 11 | Marsaxlokk Targ Rybacki / Marsaxlokk Fish Market | 35.8431 | 14.5350 | Atrakcja |

### 3.2 Kategoryzacja typów

| Typ | Kolor znacznika | Uwagi |
|-----|----------------|-------|
| **Atrakcja** | 🟢 Zielony (#2ECC71) | Zwykłe atrakcje turystyczne |
| **Zagadka** | 🔴 Czerwony (#E74C3C) | Miejsca powiązane z zagadkami. W tej kategorii mieszczą się: „Zagadka", „Atrakcja + Zagadka" (część zagadkowa) oraz „Rozwiązanie Zagadki" |
| **Plaża** | 🔵 Niebieski (#3498DB) | Plaże i miejsca wypoczynku |
| **Atrakcja + Zagadka** | 🟢+🔴 Podzielony | Pojedynczy znacznik podzielony w pionie: lewa połowa w kolorze Atrakcji (zielony), prawa połowa w kolorze Zagadki (czerwony) |
| **Rozwiązanie Zagadki** | 🔴 Czerwony (#E74C3C) | Ten sam kolor co Zagadka — traktowany jako punkt zagadkowy |

### 3.3 Opisy miejsc (do wyświetlenia w popupach)

Każdy punkt powinien mieć krótki, ciekawy opis (2-3 zdania) po polsku. Przykładowe opisy:

1. **Katedra św. Jana** — Arcydzieło baroku, słynące ze wspaniałych malowideł Caravaggia. To jedna z najważniejszych świątyń zakonu joannitów na Malcie.
2. **Pałac Wielkich Mistrzów** — Dawna siedziba Wielkich Mistrzów Zakonu Joannitów, dziś mieści siedzibę prezydenta Malty i bogate zbiory broni.
3. **Katakumby św. Pawła** — Podziemny kompleks grobowy z czasów rzymskich, jeden z największych na Malcie. Świadectwo wczesnochrześcijańskiej historii wyspy.
4. **Świątynia Ġgantija** — Megalityczna świątynia na Gozo, starsza od piramid egipskich (ok. 3600 p.n.e.). Obiekt wpisany na listę UNESCO.
5. **Fort św. Anioła** — Warownia w Birgu (Vittoriosa) odegrała kluczową rolę podczas Wielkiego Oblężenia Malty w 1565 roku.
6. **Gardjola** — Punkt widokowy w Senglei z charakterystycznym strażniczym balkonem w kształcie żurawia. Stąd rozpościera się widok na Wielki Port.
7. **Kościół św. Wawrzyńca** — Barokowa świątynia w Birgu, jeden z pierwszych kościołów wybudowanych przez joannitów. Miejsce szczególne dla rozwiązania zagadki.
8. **Ramla Bay** — Najpiękniejsza plaża na Gozo z charakterystycznym czerwono-złotym piaskiem. Idealna na relaks i kąpiele słoneczne.
9. **Mdina Gate** — Główna brama do „Cichego Miasta" – Mding, dawnej stolicy Malty. Piękny przykład architektury barokowej.
10. **Blue Grotto** — Malowniczy system morskich jaskiń o krystalicznie błękitnej wodzie, dostępny łodzią z Wied iż-Żurrieq.
11. **Marsaxlokk Targ Rybacki** — Kolorowy targ rybny w malowniczej wiosce rybackiej, odbywający się w niedziele. Słynie z tradycyjnych łodzi luzzu.

---

## 4. Trasy autobusowe

### 4.1 Lista tras

| Linia | Start | Koniec | Godziny odjazdów |
|-------|-------|--------|-------------------|
| **202** | Valletta | Mdina/Rabat | 6:00, 7:00, 8:00, 9:00, 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:00, 17:00, 18:00 |
| **203** | Mdina | Dingli Cliffs | 7:30, 8:30, 9:30, 10:30, 11:30, 12:30, 13:30, 14:30, 15:30, 16:30 |
| **222** | Valletta | Ċirkewwa (prom na Gozo) | 5:30, 6:30, 7:30, 8:30, 9:30, 10:30, 11:30, 12:30, 13:30, 14:30, 15:30 |
| **13** | Valletta | Marsaxlokk | 6:30, 7:30, 8:30, 9:30, 10:30, 11:30, 12:30, 13:30, 14:30, 15:30, 16:30 |
| **74** | Marsaxlokk | Wied iż-Żurrieq (Blue Grotto) | 7:00, 8:00, 9:00, 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:00 |
| **71** | Wied iż-Żurrieq | Trzy Miasta (Vittoriosa/Birgu) | Zakładana częstotliwość co 30-60 minut (np. 7:00, 8:00, 9:00, 10:00, 11:00, 12:00, 13:00, 14:00, 15:00, 16:00) |

### 4.2 Linie autobusowe — kolory i styl

| Linia | Kolor | Styl linii |
|-------|-------|-----------|
| 202 | #E67E22 (pomarańczowy) | Ciągła, grubość 3px |
| 203 | #9B59B6 (fioletowy) | Ciągła, grubość 3px |
| 222 | #1ABC9C (turkusowy) | Ciągła, grubość 3px |
| 13 | #F1C40F (żółty) | Ciągła, grubość 3px |
| 74 | #E74C3C (czerwony) | Ciągła, grubość 3px |
| 71 | #3498DB (niebieski) | Ciągła, grubość 3px |

### 4.3 Rysowanie tras

- **Trasy przybliżone do dróg**: linie powinny w przybliżeniu podążać za rzeczywistymi drogami Malty. W przypadku Leaflet z OpenStreetMap, można użyć OSRM, GraphHopper lub innych serwisów routingu, aby uzyskać przybliżone trasy, lub ręcznie zdefiniować punkty pośrednie (via points) wzdłuż głównych dróg dla każdej trasy.
- **Prom na Gozo**: Trasa 222 kończy się w Ċirkewwa (port promowy). Dodaj przerywaną linię (dashed) promową z Ċirkewwa do Mgarr na Gozo, w kolorze turkusowym (#1ABC9C), aby pokazać połączenie promowe.

### 4.4 Przystanki autobusowe

Dla każdej trasy, oprócz punktu początkowego i końcowego, należy dodać **przynajmniej 2–3 przystanki pośrednie** (ważne miejscowości), aby trasa była bardziej realistyczna. Przykładowe przystanki pośrednie:

| Linia | Przystanki pośrednie (współrzędne) |
|-------|-----------------------------------|
| **202** | Valletta (35.8997, 14.5147) → Birkirkara (35.8972, 14.4625) → Attard (35.8933, 14.4425) → Mdina/Rabat (35.8858, 14.4075) |
| **203** | Mdina (35.8858, 14.4075) → Rabat (35.8819, 14.3986) → Dingli (35.8600, 14.3833) → Dingli Cliffs (35.8569, 14.3828) |
| **222** | Valletta (35.8997, 14.5147) → St. Julian's (35.9186, 14.4903) → St. Paul's Bay (35.9486, 14.4000) → Mellieħa (35.9564, 14.3622) → Ċirkewwa (35.9869, 14.3319) |
| **13** | Valletta (35.8997, 14.5147) → Paola (35.8728, 14.4989) → Żejtun (35.8556, 14.5328) → Marsaxlokk (35.8431, 14.5350) |
| **74** | Marsaxlokk (35.8431, 14.5350) → Żurrieq (35.8308, 14.4742) → Wied iż-Żurrieq (35.8250, 14.4667) |
| **71** | Wied iż-Żurrieq (35.8250, 14.4667) → Żurrieq (35.8308, 14.4742) → Birgu/Vittoriosa (35.8889, 14.5206) |

Uwaga: powyższe współrzędne są przybliżone — w implementacji można je dostosować, aby lepiej odwzorowywały rzeczywisty przebieg dróg.

---

## 5. Interaktywność i UI

### 5.1 Filtry

Mapa ma zawierać panel filtrów umożliwiający włączanie/wyłączanie:

**Filtry kategorii miejsc (checkboxy):**
- [x] Atrakcje (zielone znaczniki)
- [x] Zagadki (czerwone znaczniki — obejmuje też „Rozwiązanie Zagadki" i część „Atrakcja+Zagadka")
- [x] Plaże (niebieskie znaczniki)

**Filtry linii autobusowych (checkboxy):**
- [x] Linia 202 (pomarańczowa)
- [x] Linia 203 (fioletowa)
- [x] Linia 222 (turkusowa)
- [x] Linia 13 (żółta)
- [x] Linia 74 (czerwona)
- [x] Linia 71 (niebieska)

Domyślnie wszystkie filtry są włączone.

### 5.2 Popupy po kliknięciu w znacznik

Po kliknięciu w znacznik miejsca wyświetla się dymek (popup) zawierający:

1. **Nazwa** (po polsku i angielsku) — **nagłówek**
2. **Typ miejsca** — np. "🏛️ Atrakcja + 🧩 Zagadka"
3. **Opis miejsca** (2-3 zdania po polsku)
4. **Najbliższe przystanki autobusowe** — lista linii autobusowych obsługujących dane miejsce (np. "🚌 Najbliższe przystanki: Linia 202, Linia 71")

### 5.3 Popupy po kliknięciu w trasę

Po kliknięciu w linię trasy autobusowej wyświetla się dymek zawierający:

1. **Numer linii** (np. "Linia 202")
2. **Trasa**: Przystanek początkowy → Przystanek końcowy
3. **Godziny odjazdów** — lista godzin w formacie HH:MM

### 5.4 Legenda

Stała legenda w rogu mapy (domyślnie prawy dolny róg) zawierająca:

**Miejsca:**
- 🟢 Zielone kółko — Atrakcja
- 🔴 Czerwone kółko — Zagadka
- 🔵 Niebieskie kółko — Plaża
- 🟢🔴 Podzielone kółko — Atrakcja + Zagadka

**Linie autobusowe:**
- 🟠 Pomarańczowa linia — 202 Valletta → Mdina/Rabat
- 🟣 Fioletowa linia — 203 Mdina → Dingli Cliffs
- 🔵 Turkusowa linia — 222 Valletta → Ċirkewwa (+ prom na Gozo)
- 🟡 Żółta linia — 13 Valletta → Marsaxlokk
- 🔴 Czerwona linia — 74 Marsaxlokk → Blue Grotto
- 🔵 Niebieska linia — 71 Blue Grotto → Trzy Miasta

---

## 6. Wygląd i UX

| Aspekt | Decyzja |
|--------|---------|
| Styl podkładu | **Turystyczny** — stonowane kolory, wyraźne drogi i POI. Użyj dedykowanego tile layera turystycznego (np. OpenStreetMap z `CartoDB positron` lub `OpenTopoMap`) |
| Widok domyślny | **Cała Malta** — wycentrowana tak, aby obejmować zarówno główną wyspę, jak i Gozo. Przybliżone współrzędne centrum: (35.9375, 14.3754), zoom 11 |
| Responsywność | **W pełni responsywna** — mapa i panel filtrów dostosowują się do rozmiaru ekranu (desktop, tablet, telefon). Panel filtrów zwija się w hamburger menu na małych ekranach lub przesuwa pod mapę |
| Panel filtrów | Panel boczny po lewej stronie na desktopie, z nagłówkami grup "Miejsca" i "Linie autobusowe" |

---

## 7. Struktura plików

```
malta-map/
├── index.html          # Główny plik z mapą (HTML + CSS + JS w jednym pliku)
└── malta-map-spec.md   # Niniejszy plik specyfikacji
```

Plik `index.html` ma być **samodzielnym, kompletnym plikiem** — wszystkie style CSS i skrypty JS (oprócz zewnętrznych bibliotek ładowanych z CDN) są osadzone w jednym pliku HTML.

---

## 8. Wymagania techniczne (Leaflet)

- Użyj **Leaflet.js** z CDN (https://unpkg.com/leaflet@1.9.x/dist/leaflet.js)
- Użyj arkusza stylów Leaflet z CDN (https://unpkg.com/leaflet@1.9.x/dist/leaflet.css)
- Znaczniki niestandardowe: użyj `L.divIcon` z kolorowymi kółkami SVG dla każdej kategorii
- Trasy: użyj `L.polyline` z opcją `weight: 3` i odpowiednimi kolorami
- Prom: użyj `L.polyline` z opcją `dashArray: "10, 10"` (linia przerywana)
- Filtr realizowany przez grupy warstw (`L.layerGroup`) — włączanie/wyłączanie przez dodawanie/usuwanie z mapy
- Nie używaj zewnętrznych serwisów routingu (np. OSRM) — trasy będą rysowane jako **linie poprzez punkty pośrednie** (ok. 3-5 punktów na trasę), które w przybliżeniu podążają za głównymi drogami

---

## 9. Przyszłe rozszerzenia (poza zakresem v1)

- Możliwość zapisywania ulubionych miejsc (localStorage)
- Przycisk „Pobierz GPX" dla tras
- Wyszukiwarka miejsc
- Tryb offline (PWA)
- Statystyki odległości między punktami

---

## 10. Decyzje podjęte w trakcie interview

| Decyzja | Opcja wybrana |
|---------|---------------|
| Biblioteka mapowa | Leaflet.js (wybór optymalny — brak preferencji) |
| Język | Nazwy miejsc PL/EN, reszta PL |
| Filtrowanie | Pełne — kategorie miejsc + linie autobusowe |
| Styl | Turystyczny |
| Trasa 71 | Częstotliwość co 30-60 min |
| Popupy | Nazwa + typ + opis + najbliższe autobusy |
| Kolory znaczników | Osobne dla Atrakcja, Zagadka (z Rozwiązaniem), Plaża |
| Atrakcja+Zagadka | Jeden znacznik, podzielony na dwa kolory |
| Trasy autobusowe | Przybliżone do dróg (via points) |
| Połączenie 13-74-71 | Oddzielne linie |
| Prom na Gozo | Tak, linia przerywana Ċirkewwa → Mgarr |
| Lokalizacja pliku | Nowy podfolder `malta-map/` |
| Opisy w popupach | Opis miejsca + najbliższe autobusy |
| Widok domyślny | Cała Malta (wyspa główna + Gozo) |
| Legenda | Pełna — miejsca i linie autobusowe |
