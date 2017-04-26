## Component Input

O component `input` utiliza o seletor `<svl-input> </svl-input>` que não possui valores default.

### Seletor a ser Utilizado:
```html
<svl-input></svl-input>
```



### Atributos utilizados



- `type`: O atributo `type` é do tipo `string` e deve conter `empty / success / error`, e controla o estilo CSS utilizado quando o seletor é chamado.
###### Exemplo de utilização
```html
<svl-input [type]="'empty'">
</svl-input>
```

- `typeInput` é do tipo `string` e controla o tipo de validação do input. Podem ser setados os valores `text / number / email `.
###### Exemplo de utilização
```html
<svl-input [typeInput]="'text'">
</svl-input>
```

- `size` é do tipo `number` e se refere ao tamanho do campo input. Deverá ser informado valores entre `1` e `12`.
###### Exemplo de utilização
```html
<svl-input [size]="9">
</svl-input>
```

- `name` é do tipo `string` e deverá conter o título do input, o que será utilizado também como name do form.
###### Exemplo de utilização
```html
<svl-input [name]="'Nome do Usuário'">
</svl-input>
```

###### Exemplo de utilização
```html
<svl-input
  [type] = "'empty'"
  [typeInput] = "'email'"
  [size] = "9"
  [name] = "'Insira seu e-mail'"
></svl-input>
```
