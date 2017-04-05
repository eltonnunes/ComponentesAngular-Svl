## Component Datepicker

O component `datepicker` utiliza o seletor `<svl-datepicker> </svl-datepicker>` que possui valores default, dados e filtros.
 Para alterar os dados default utilize os atributos.

### Seletor a ser Utilizado:
```html
     <svl-datepicker></svl-datepicker>
```

### Atributos utilizados

- `timerpicker`: O atributo `timerpicker` é do tipo `boolean` e deve conter `true / false`, serve para ativar a opção de inserir hora na data.
###### Exemplo de utilização
```html
<svl-datepicker timerpicker=true></svl-datepicker>
```

---
- `singleDatePicker` é do tipo `boolean` para o uso de uma data simples.
###### Exemplo de utilização
```html
<svl-datepicker singleDatePicker=true></svl-datepicker>
```

---
- `showWeekNumbers` é do tipo `boolean` e serve para mostrar ao lado do calendário o numero da semana referente.
###### Exemplo de utilização
```html
<svl-datepicker showWeekNumbers=true></svl-datepicker>
```

---

- `minDate` é do tipo `string` onde pode ser atribuído uma data mínima a ser selecionada.
###### Exemplo de utilização
```html
<svl-datepicker minDate="01/01/1950"></svl-datepicker>
```

---
- `maxDate` é do tipo `string` onde pode ser atribuído uma data máxima a ser selecionada.
###### Exemplo de utilização
```html
<svl-datepicker maxDate="01/01/2150"></svl-datepicker>
```

---
- `startDate` é do tipo `string` serve para atribuir a data inicial padrão.
###### Exemplo de utilização
```html
<svl-datepicker startDate="01/01/2150"></svl-datepicker>
```

---
- `endDate` é do tipo `string`  serve para atribuir a data final padrão.
###### Exemplo de utilização
```html
<svl-datepicker endDate="01/01/2150"></svl-datepicker>
```
---
- `autoApply` é do tipo `boolean` ao ativar, a opção de aplicar alteração de faixa de datas é automática e não precisará clicar no botão aplicar para realizar as mudanças.
###### Exemplo de utilização
```html
<svl-datepicker autoApply="01/01/2150"></svl-datepicker>
```
---
- `showDropdowns` é do tipo `boolean` onde pode ser atribuído uma data máxima a ser selecionada.
###### Exemplo de utilização
```html
<svl-datepicker showDropdowns="01/01/2150"></svl-datepicker>
```
---
- `showISOWeekNumbers` é do tipo `boolean` onde pode ser atribuído uma data máxima a ser selecionada.
###### Exemplo de utilização
```html
<svl-datepicker showISOWeekNumbers="01/01/2150"></svl-datepicker>
```
---
- `showCustomRangeLabel` é do tipo `boolean` onde pode ser atribuído uma data máxima a ser selecionada.
###### Exemplo de utilização
```html
<svl-datepicker showCustomRangeLabel="01/01/2150"></svl-datepicker>
```
---
- `timePicker24Hour` é do tipo `boolean` onde pode ser atribuído uma data máxima a ser selecionada.
###### Exemplo de utilização
```html
<svl-datepicker timePicker24Hour="01/01/2150"></svl-datepicker>
```
---
- `timePickerSeconds` é do tipo `boolean` onde pode ser atribuído uma data máxima a ser selecionada.
###### Exemplo de utilização
```html
<svl-datepicker timePickerSeconds="01/01/2150"></svl-datepicker>
```
---
- `linkedCalendars` é do tipo `boolean` onde pode ser atribuído uma data máxima a ser selecionada.
###### Exemplo de utilização
```html
<svl-datepicker linkedCalendars="01/01/2150"></svl-datepicker>
```
---
- `autoUpdateInput` é do tipo `boolean` onde pode ser atribuído uma data máxima a ser selecionada.
###### Exemplo de utilização
```html
<svl-datepicker autoUpdateInput="01/01/2150"></svl-datepicker>
```
---
- `alwaysShowCalendars` é do tipo `boolean` onde pode ser atribuído uma data máxima a ser selecionada.
###### Exemplo de utilização
```html
<svl-datepicker alwaysShowCalendars="01/01/2150"></svl-datepicker>
```
---
- `ranges` é do tipo `object` onde pode ser atribuído uma data máxima a ser selecionada.
###### Exemplo de utilização
```html
<svl-datepicker ranges="01/01/2150"></svl-datepicker>
```
---


