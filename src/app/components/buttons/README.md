## Component Button

O component `button` utiliza o seletor `<svl-button> </svl-button>` possui valores default e não precisam ser informados quando o component for chamado.

### Seletor a ser Utilizado:
```html
<svl-button></svl-button>
```



### Atributos utilizados



- `format`: é do tipo `string` e deve conter o valor `quadrado` ou `redondo`, determinando assim o formato do botão. Caso este atributo não seja informado, por padrão, ele assumirá o valor `quadrado`.
###### Exemplo de utilização
```html
<svl-button [format] = "'quadrado'">
</svl-button>
```

- `size` é do tipo `string` e deve conter o valor `mini`, `pequeno`, `medio` ou `grande`, determinando assim o tamanho do botão. Caso valor deste atributo não seja informando, por padrão, ele assumirá o valor `medio`.
###### Exemplo de utilização
```html
<svl-button [size] = "'medio'">
</svl-button>
```

- `color` é do tipo `string` e deve conter o valor `padrao`, `verde`, `laranja` ou `vermelho`, determinando assim a cor do botão. Estas cores são predeterminadas pelo padrão do template usado pela Serveloja. Caso valor deste atributo não seja informando, por padrão, ele assumirá o valor `padrao`.
###### Exemplo de utilização
```html
<svl-button [color] = "'verde'">
</svl-button>
```

- `title` é do tipo `string` e deve conter o título que será exibido no botão. Caso valor deste atributo não seja informando, por padrão, ele assumirá o valor `OK`.
###### Exemplo de utilização
```html
<svl-button [title] = "'Nome do botão'">
</svl-button>
```

- `icon` é do tipo `boolean` e deve conter o valor `true` ou `false`. Caso o atributo seja setado como `true`, será necessário informar no atributo `title`, qual é o ícone que será exibido. A lista de ícones encontra-se em `https://material.io/icons/`. Caso valor deste atributo não seja informando, por padrão, ele assumirá o valor `false`.
###### Exemplo de utilização
```html
<svl-button
  [icon] = true
  [title] = "'print'">
</svl-button>
```

###### Exemplo de utilização
```html
<svl-button
  [format] = "'quadrado'"
  [size] = "'medio'"
  [color] = "'verde'"
  [icon] = true
  [title] = "'print'">
</svl-button>
```
