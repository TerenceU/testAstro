# BaseDropdown Component

Il componente `BaseDropdown` è un dropdown completamente personalizzabile che supporta più modalità di utilizzo e layout.

## Funzionalità

### 🎯 **Modalità di Utilizzo**

1. **Dropdown con Slot Content** (HTML nativo)
2. **Dropdown con Array di Opzioni** (select nativo)
3. **Dropdown Custom con Immagini** (completamente personalizzato)

### 🎨 **Layout per Voce Selezionata**

- `default`: Icona + testo (se disponibili)
- `icon-only`: Solo l'icona
- `text-only`: Solo il testo
- `custom`: Layout personalizzato tramite funzione

### 📏 **Controllo Larghezza**

- `autoWidth`: Il bottone si adatta alla larghezza del contenuto
- `menuAutoWidth`: Il menu delle opzioni si adatta alla larghezza del proprio contenuto

## Props

```typescript
interface Props {
  id?: string;
  value?: string;
  options?: Array<{ value: string; label: string; img?: string; alt?: string }>;
  placeholder?: string;
  class?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  customDropdown?: boolean;
  selectedLayout?: 'default' | 'icon-only' | 'text-only' | 'custom';
  customSelectedRender?: (option: { value: string; label: string; img?: string; alt?: string }) => string;
  autoWidth?: boolean; // Per il bottone trigger
  menuAutoWidth?: boolean; // Per il menu delle opzioni
}
```

## Esempi di Utilizzo

### 1. Dropdown Semplice con Slot

```astro
<BaseDropdown id="simple" placeholder="Scegli un'opzione">
  <option value="1">Opzione 1</option>
  <option value="2">Opzione 2</option>
</BaseDropdown>
```

### 2. Dropdown con Array di Opzioni

```astro
<BaseDropdown 
  id="array-options"
  options={[
    { value: "tech", label: "Tecnologia" },
    { value: "design", label: "Design" }
  ]}
/>
```

### 3. Dropdown con Immagini

```astro
<BaseDropdown 
  id="with-images"
  customDropdown={true}
  options={[
    { value: "it", label: "Italiano", img: "https://flagsapi.com/IT/flat/32.png" },
    { value: "en", label: "English", img: "https://flagsapi.com/GB/flat/32.png" }
  ]}
/>
```

### 4. Dropdown Solo Icone

```astro
<BaseDropdown 
  id="icon-only"
  selectedLayout="icon-only"
  customDropdown={true}
  options={[
    { value: "it", label: "Italiano", img: "https://flagsapi.com/IT/flat/32.png" },
    { value: "en", label: "English", img: "https://flagsapi.com/GB/flat/32.png" }
  ]}
/>
```

### 5. Dropdown con Larghezza Automatica

```astro
<BaseDropdown 
  id="auto-width"
  autoWidth={true}
  menuAutoWidth={true}
  customDropdown={true}
  options={[
    { value: "short", label: "Breve" },
    { value: "long", label: "Opzione molto lunga" }
  ]}
/>
```

## TranslateDropdown

Il `TranslateDropdown` è un componente specializzato che utilizza `BaseDropdown` per la selezione delle lingue.

### Esempio

```astro
<TranslateDropdown lang={lang} />
```

### Caratteristiche

- Layout "icon-only" per mostrare solo le bandiere
- Larghezza automatica per bottone e menu
- Immagini delle bandiere da flagsapi.com
- Navigazione automatica al cambio lingua

## Styling

Il componente utilizza:
- **Tailwind CSS** per tutte le classi
- **Variabili CSS Custom** definite in `global.css`
- **BaseButton** per il trigger del dropdown custom

### Variabili CSS Utilizzate

```css
--color-dropdown-background
--color-dropdown-text
--color-dropdown-border
--color-focus
--color-second
--color-input-placeholder
--font-default
```

## Eventi

Il dropdown custom emette un evento `change` quando viene selezionata un'opzione:

```javascript
dropdown.addEventListener('change', function(e) {
  console.log('Valore selezionato:', e.detail.value);
  console.log('Label selezionata:', e.detail.label);
});
```

## Accessibilità

- Supporto per navigazione da tastiera (Enter, Spazio)
- Attributi ARIA appropriati
- Focus management
- Screen reader friendly
