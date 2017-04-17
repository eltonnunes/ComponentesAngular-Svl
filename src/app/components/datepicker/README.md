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
<svl-datepicker timerpicker=false></svl-datepicker>
```
---
- `singleDatePicker` é do tipo `boolean` e deve conter `true / false`,  para o uso de uma data simples.
###### Exemplo de utilização
```html
<svl-datepicker singleDatePicker=false></svl-datepicker>
```
---
- `showWeekNumbers` é do tipo `boolean` e deve conter `true / false`,  serve para mostrar ao lado do calendário o numero da semana referente.
###### Exemplo de utilização
```html
<svl-datepicker showWeekNumbers=false></svl-datepicker>
```
---
- `minDate` é do tipo `string` onde pode ser atribuído uma data mínima a ser selecionada no formato dd/MM/yyyy.
###### Exemplo de utilização
```html
<svl-datepicker minDate="01/01/1950"></svl-datepicker>
```
---
- `maxDate` é do tipo `string` onde pode ser atribuído uma data máxima a ser selecionada no formato dd/MM/yyyy.
###### Exemplo de utilização
```html
<svl-datepicker maxDate="01/01/2200"></svl-datepicker>
```
---
- `startDate` é do tipo `string` serve para atribuir a data inicial padrão no formato dd/MM/yyyy.
###### Exemplo de utilização
```html
<svl-datepicker startDate="08/03/2017"></svl-datepicker>
```
---
- `endDate` é do tipo `string`  serve para atribuir a data final padrãono formato dd/MM/yyyy.
###### Exemplo de utilização
```html
<svl-datepicker endDate="06/04/2017"></svl-datepicker>
```
---
- `autoApply` é do tipo `boolean` e deve conter `true / false`, onde no seu valor true e é usado para aplicar automaticamente as mudanças de filtro na data. No entanto passando- se valor como false é exibido os botões aplicar e cancelar alterações ao mudar o filtro da data.
###### Exemplo de utilização
```html
<svl-datepicker autoApply=false></svl-datepicker>
```
---
- `showDropdowns` é do tipo `boolean` e deve conter `true / false`,  serve para exibir os labels de mês e ano como dropdown.
###### Exemplo de utilização
```html
<svl-datepicker showDropdowns=false></svl-datepicker>
```
---
- `showCustomRangeLabel` é do tipo `boolean`e deve conter `true / false`, é usado para exibir o botão de faixa personalizada de datas, que ao clicar abre o calendário.
###### Exemplo de utilização
```html
<svl-datepicker showCustomRangeLabel=true></svl-datepicker>
```
---
- `timePicker24Hour` é do tipo `boolean`e deve conter `true / false`,  é usado para alterar o formato da exibição da hora, em 12 ou 24 horas. É usando em conjunto com o `timerpicker` que ativa a exibição de horas no calendário.
###### Exemplo de utilização
```html
<svl-datepicker timePicker24Hour=true></svl-datepicker>
```
---
- `timePickerSeconds` é do tipo `boolean` e deve conter `true / false`,  serve para ativar o `dropdown` de segundos à seleção de horas no calendário. Só é visível com a opção de `timerpicker=true` 
###### Exemplo de utilização
```html
<svl-datepicker timePickerSeconds=false></svl-datepicker>
```



- `alwaysShowCalendars` é do tipo `boolean`e deve conter `true / false`, é usado quando é necessário que o calendário seja sempre exibido no `dropdown`.
###### Exemplo de utilização
```html
<svl-datepicker alwaysShowCalendars=false></svl-datepicker>
```
---
- `ranges` é do tipo `object` e é usado para definir os botão de faixa de datas pré-definidas.
###### Exemplo de utilização
```js
<svl-datepicker ranges={
    'Hoje': ['06/04/2017'],
    'Ontem': ['05/04/2017'],
    'Últimos 7 Dias': ['31/04/2017','07/04/2017'],
    'Últimos 30 Dias': ['08/03/2017','06/04/2017'],
    'Este Mês': ['01/04/2017','30/04/2017']
    'Mês Passado': ['01/03/2017','31/03/2017']]
  }></svl-datepicker>
```
---




