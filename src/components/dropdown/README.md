# BaseDropdown Component

Il componente `BaseDropdown` è un dropdown completamente personalizzabile con **auto-sizing intelligente** e supporto per **slot personalizzati**.

## 🚀 Nuove Funzionalità v2.0

### ✨ **Auto-Sizing Intelligente**
- **Nessun parametro necessario**: Il dropdown si adatta automaticamente all'opzione più lunga
- **Bottone auto-width**: Si ridimensiona in base al contenuto selezionato
- **Menu ottimizzato**: Si posiziona intelligentemente per evitare overflow

### 🎨 **Layout Personalizzabili**
- `default`: Icona + testo (se disponibili)
- `icon-only`: Solo l'icona  
- `text-only`: Solo il testo
- `custom`: Layout personalizzato tramite funzione
- `slot`: **NUOVO** - Slot completamente personalizzabile

### 📏 **Controllo Larghezza**

- `fullWidth`: Forza il dropdown a occupare tutta la larghezza disponibile (default: auto-sizing)

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
  selectedLayout?: 'default' | 'icon-only' | 'text-only' | 'custom' | 'slot';
  customSelectedRender?: (option: { value: string; label: string; img?: string; alt?: string }) => string;
  fullWidth?: boolean; // Forza full width invece di auto-sizing
}
```

## Esempi di Utilizzo

### 1. Dropdown Auto-Width (Default)

```astro
<BaseDropdown 
  id="auto-width"
  options={[
    { value: "short", label: "Breve" },
    { value: "very-long", label: "Questa è un'opzione molto lunga" }
  ]}
/>
<!-- Il dropdown si adatterà automaticamente all'opzione più lunga -->
```

### 2. Dropdown con Slot Personalizzato

```astro
<BaseDropdown 
  id="custom-slot"
  selectedLayout="slot"
  options={languageOptions}
>
  <div slot="selected" class="flex items-center gap-2">
    <img src="current-flag.png" class="w-4 h-4" />
    <span class="font-medium">Lingua Selezionata</span>
  </div>
</BaseDropdown>

<script>
// Ascolta gli eventi per aggiornare lo slot dinamicamente
document.addEventListener('slotUpdate', (e) => {
  const { value, label, img } = e.detail;
  // Aggiorna il contenuto dello slot con i nuovi dati
});
</script>
```

### 3. Dropdown Semplice con Slot

```astro
<BaseDropdown id="simple" placeholder="Scegli un'opzione">
  <option value="1">Opzione 1</option>
  <option value="2">Opzione 2</option>
</BaseDropdown>
```

### 4. Dropdown con Array di Opzioni

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
