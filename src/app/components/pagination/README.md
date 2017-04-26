## Component Pagination

O component `pagination` utiliza o seletor `<svl-pagination> </svl-pagination>` que possui valores default.
 Para alterar os dados default utilize os atributos.

### Seletor a ser Utilizado:
```html
     <svl-pagination></svl-pagination>
```



### Atributos utilizados



- `pagination`: O atributo `pagination` é do tipo `boolean` e deve conter `true / false`, para exibir ou desativar a paginação.
###### Exemplo de utilização
```html
<svl-pagination [pagination]="true">
</svl-pagination>
```

- `current` é do tipo `number` e deve conter a página atual.
###### Exemplo de utilização
```html
<svl-pagination [current]="4">
</svl-pagination>
```

- `totalRecords` é do tipo `number` e deve conter o total de registros contido no resultado da consulta.
###### Exemplo de utilização
```html
<svl-pagination [totalRecords]="50">
</svl-pagination>
```

- `recordPerPage` é do tipo `number` e deve conter o total de registros a ser exibido por página.
###### Exemplo de utilização
```html
<svl-pagination [recordPerPage]="4">
</svl-pagination>
```

- `currentUpdate` é o evento que informa qual o número da página foi selecionada
###### Exemplo de utilização
```html
<svl-pagination (currentUpdate)="currentUpdate($event)">
</svl-pagination>
```

###### Exemplo de utilização
```html
<svl-pagination
  [current]       = "4",
  [totalRecords]  = "50",
  [recordPerPage] = "4",
  [pagination]    = "true"
  (currentUpdate)="currentUpdate($event)">
</svl-pagination>
```
