## Component Alerts

O component `alerts` utiliza o seletor `<svl-alerts> </svl-alerts>` Não possui valores default e precisam ser informados quando o component for chamado.

### Seletor a ser Utilizado:
```html
     <svl-alerts></svl-alerts>
```



### Atributos utilizados



- `typeAlert`: O atributo `typeAlert` é do tipo `number` e deve conter valores entre `0 e 3`, sendo `0` para alert de informações, `1` para ações completadas com sucesso, `2` para algum aviso e `3` para erros, lembrando que estas, ficam a critério de utilização do desenvolvedor.
###### Exemplo de utilização
```html
<svl-alerts [typeAlert]="1">
</svl-alerts>
```

- `messageText` é do tipo `string` e deve conter a mensagem de texto que será exibida no alert quando for chamado.
###### Exemplo de utilização
```html
<svl-alerts [messageText]="'Solicitação realizada com sucesso'">
</svl-alerts>
```

###### Exemplo de utilização
```html
<svl-alerts
  [typeAlert]   = "1",
  [messageText] = "'Solicitação realizada com sucesso'">
</svl-alerts>
```
