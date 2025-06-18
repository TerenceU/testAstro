# BaseInput - Validazione isEqualTo

## Descrizione

La proprietà `isEqualTo` permette di validare che due campi di input abbiano lo stesso valore. Questa funzionalità è particolarmente utile per:

- Conferma email
- Conferma password  
- Conferma di qualsiasi campo che richieda doppia verifica

## Utilizzo

```astro
<!-- Campo principale -->
<BaseInput 
  type="password"
  id="password"
  name="password"
  label="Password"
  required={true}
/>

<!-- Campo di conferma -->
<BaseInput 
  type="password"
  id="confirmPassword"
  name="confirmPassword"
  label="Conferma Password"
  required={true}
  isEqualTo="password"
/>
```

## Parametri

### `isEqualTo: string`

Specifica l'ID o il nome del campo con cui confrontare il valore. Il componente cercherà prima per ID, poi per attributo name.

**Esempi di riferimento:**
- `isEqualTo="myFieldId"` - cerca un campo con `id="myFieldId"`
- `isEqualTo="myFieldName"` - cerca un campo con `name="myFieldName"`

## Comportamento

1. **Validazione in tempo reale**: La validazione avviene durante la digitazione (`input` event)
2. **Validazione bidirezionale**: Quando uno dei due campi cambia, entrambi vengono ri-validati
3. **Messaggi di errore**: Mostra automaticamente il messaggio di errore localizzato
4. **Stati visivi**: Applica le classi CSS appropriate per gli stati di errore

## Messaggi di errore

I messaggi sono localizzati e disponibili in tutte le lingue supportate:

- **IT**: "Questo campo deve corrispondere all'altro campo"
- **EN**: "This field must match the other field"
- **DE**: "Dieses Feld muss mit dem anderen Feld übereinstimmen"
- **FR**: "Ce champ doit correspondre à l'autre champ"
- **ES**: "Este campo debe coincidir con el otro campo"
- **PT**: "Este campo deve corresponder ao outro campo"
- **RU**: "Это поле должно совпадать с другим полем"

## Esempio completo

```astro
---
import BaseInput from '../components/inputs/BaseInput.astro';
---

<form>
  <!-- Email -->
  <BaseInput 
    type="email"
    id="email"
    label="Email"
    required={true}
  />
  
  <!-- Conferma Email -->
  <BaseInput 
    type="email"
    id="confirmEmail"
    label="Conferma Email"
    required={true}
    isEqualTo="email"
  />
  
  <!-- Password -->
  <BaseInput 
    type="password"
    id="password"
    label="Password"
    required={true}
    minLength={8}
  />
  
  <!-- Conferma Password -->
  <BaseInput 
    type="password"
    id="confirmPassword"
    label="Conferma Password"
    required={true}
    isEqualTo="password"
  />
</form>
```

## Note tecniche

- La validazione `isEqualTo` viene eseguita solo se il campo ha un valore
- È compatibile con tutte le altre validazioni esistenti (required, minLength, pattern, etc.)
- La ricerca del campo di confronto avviene nel seguente ordine:
  1. `document.getElementById(isEqualTo)`
  2. `document.querySelector('[name="' + isEqualTo + '"]')`
- Se il campo di confronto non viene trovato, la validazione viene ignorata silenziosamente

## Combinazione con altre validazioni

```astro
<BaseInput 
  type="password"
  id="confirmPassword"
  label="Conferma Password"
  required={true}
  minLength={8}
  maxLength={50}
  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
  isEqualTo="password"
  showErrors={true}
/>
```

In questo esempio, il campo verrà validato per:
- Campo obbligatorio (required)
- Lunghezza minima di 8 caratteri
- Lunghezza massima di 50 caratteri  
- Pattern regex per password sicura
- Uguaglianza con il campo "password"
