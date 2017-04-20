## Component Dropdown / Dropup

O component `Dropdown / Dropup` utiliza o seletor `<svl-dropdown> </svl-dropdown>` que possui valores default.

### Seletor a ser Utilizado:
```html
<svl-dropdown></svl-dropdown>
```



### Atributos utilizados


#### Atributo 'menu'

- `menu`: O atributo `menu` é um `string` e deve receber o título que irá aparecer no botão dropdown. Caso nenhum valor seja informado, será exibido por padrão o título `Item`.
###### Exemplo de utilização
```html
<svl-dropdown [menu]="'Serviços'">
</svl-dropdown>
```

#### Atributo 'title'

- `title` é do tipo `string` e deve receber o título que será exibido quando o botão dropdown for clicado. Caso não seja informado nenhum valor, por padrão ele permanerá vazio.
###### Exemplo de utilização
```html
<svl-dropdown [title]="'Clique sobre um item'">
</svl-dropdown>
```

#### Atributo 'options'

- `options` é um `array` que irá conter itens do menu e link para o qual cada item será direcionado.
###### Exemplo de utilização
```html
<svl-dropdown [options]="
                [
                    {link: 'link', item: 'Item menu 1'},
                    {link: 'link', item: 'Item menu 2'},
                    {link: 'link', item: 'Item menu 3'}
                ]">
</svl-dropdown>
```

#### Atributo 'type'

- `type` é do tipo `string` e deve receber o valor `dropdown` ou `dropup`, indicando em que posição os itens do botão serão exibidos, sendo que dropdown exibirá os itens abaixo do botão e dropup acima. Caso não seja informado nenhum valor, por padrão, o atributo assumirá o valor dropdown.
###### Exemplo de utilização
```html
<svl-dropdown [type]="'dropdown'">
</svl-dropdown>
```

#### Atributo 'format'

- `format` é do tipo `string` e deve receber o valor `quadrado` ou `redondo`, indicando o formato do que o botão dropdown será exibido. Caso não seja informado nenhum valor, por padrão, o atributo assumirá o valor quadrado.
###### Exemplo de utilização
```html
<svl-dropdown [format]="'quadrado'">
</svl-dropdown>
```

#### Atributo 'color'

- `color` é do tipo `string` e deve receber o valor `padrao`, `verde`, `laranja` ou `vermelho`, indicando a cor que o botão dropdown será exibido. Caso não seja informado nenhum valor, por padrão, o atributo assumirá o valor padrao.
###### Exemplo de utilização
```html
<svl-dropdown [color]="'padrao'">
</svl-dropdown>
```

#### Atributo 'smart'

- `smart` é do tipo `number` e deve receber um valor entre 1 e 12 (sendo que 12 equivale a 100%), indicando o tamanho do botão para telas de smartphone. Caso não seja informado nenhum valor, por padrão, o atributo assumirá o valor 12.
###### Exemplo de utilização
```html
<svl-dropdown [smart]="12">
</svl-dropdown>
```

#### Atributo 'tablet'

- `tablet` é do tipo `number` e deve receber um valor entre 1 e 12 (sendo que 12 equivale a 100%), indicando o tamanho do botão para telas de tablets. Caso não seja informado nenhum valor, por padrão, o atributo assumirá o valor 2.
###### Exemplo de utilização
```html
<svl-dropdown [tablet]="'2'">
</svl-dropdown>
```

#### Atributo 'small'

- `small` é do tipo `number` e deve receber um valor entre 1 e 12 (sendo que 12 equivale a 100%), indicando o tamanho do botão para telas menores de computador ou tabets maiores. Caso não seja informado nenhum valor, por padrão, o atributo assumirá o valor 2.
###### Exemplo de utilização
```html
<svl-dropdown [small]="'2'">
</svl-dropdown>
```

#### Atributo 'large'

- `large` é do tipo `number` e deve receber um valor entre 1 e 12 (sendo que 12 equivale a 100%), indicando o tamanho do botão para telas maiores. Caso não seja informado nenhum valor, por padrão, o atributo assumirá o valor 2.
###### Exemplo de utilização
```html
<svl-dropdown [large]="'2'">
</svl-dropdown>
```


###### Exemplo de utilização
```html
<svl-dropdown
    [menu] = "'Serviços'"
    [title] = "'Clique em um dos itens'"
    [options] = "[
                    {link: 'globo', item: 'Globo'},
                    {link: 'google', item: 'Google'},
                    {link: 'infonet', item: 'Infonet'}
                ]"
    [type] = "'dropdown'"
    [format] = "'quadrado'"
    [color] = "'padrao'"
    [smart] = "6"
    [tablet] = "2"
    [small] = "2"
    [large] = "2"
></svl-dropdown>
```
