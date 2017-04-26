## Component Alerts

O component `alerts` utiliza o seletor `<svl-alerts> </svl-alerts>`. Possui valores padrão e quem pode ser modificados quando o component é utilizado.

### Seletor a ser Utilizado:
```html
     <svl-alerts></svl-alerts>
```



### Atributos utilizados



- `type`: é do tipo `string` e deve conter um valor que pode ser `informacao`, `sucesso`, `alerta` ou `erro`. Cada um desses itens, carrega um conjunto de ícones e cores referente a cada um deles. Caso nenhum valor ser informado, por padrão, ele usa o valor `informacao`.
###### Exemplo de utilização
```html
<svl-alerts [type]="'informacao'">
</svl-alerts>
```

- `message` é do tipo `string` e deve conter a mensagem de texto que será exibida no alert quando for chamado.
###### Exemplo de utilização
```html
<svl-alerts [message]="'Solicitação realizada com sucesso'">
</svl-alerts>
```

###### Exemplo de utilização
```html
<svl-alerts
  [typeAlert]   = "1",
  [messageText] = "'Solicitação realizada com sucesso'">
</svl-alerts>
```
