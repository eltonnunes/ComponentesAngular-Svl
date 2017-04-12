## Component Input

O component `radio` utiliza o seletor `<svl-radio> </svl-radio>` que não possui valores default.

### Seletor a ser Utilizado:
```html
<svl-radio></svl-radio>
```



### Atributos utilizados



- `data`: O atributo `data` é um `array` e deve receber informações referentes aos itens que fazem parte do grupo radio a ser utilizado.
###### Exemplo de utilização
```html
<svl-radio [data]="['Primeiro Item','Segundo Item','Terceiro Item']">
</svl-radio>
```

- `size` é do tipo `number` e controla o tamanho da área em que se encontra o grupo radio utilizado. Deverão ser infomados valores entre 1 e 12.
###### Exemplo de utilização
```html
<svl-radio [size]="9">
</svl-radio>
```

- `name` é do tipo `string` e se refere ao nome do grupo radio utilizado.
###### Exemplo de utilização
```html
<svl-radio [name]="'serveloja'">
</svl-radio>
```

###### Exemplo de utilização
```html
<svl-radio
  [data] = "['Primeiro Item','Segundo Item','Terceiro Item']"
  [size] = "9"
  [name] = "'serveloja'"
></svl-radio>
```
