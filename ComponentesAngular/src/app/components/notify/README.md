## Component Notify

O component `notify` utiliza o seletor `<svl-notify> </svl-notify>` que possui valores default, dados e filtros.
 Para alterar os dados default utilize os atributos.

### Seletor a ser Utilizado:
```html
     <svl-notify></svl-notify>
```

### Atributos utilizados

- `icon`: O atributo `icon` é do tipo `string` e deve conter o texto usada para representar o ícone desejado usando o ***[Font Awesome](http://fontawesome.io/icons/)***  caso o tipo atribuição do ícone seja [`class*`](#iconType)  e é exibido antes do título da notificação no [`template*`](#template) padrão .
###### Exemplo de utilização
```html
<svl-notify icon="fa fa-info-circle"></svl-notify>
```
---

- `type`: O atributo `type` é do tipo `string` e é responsável pela alteração de tipo (cor) da notificação.
###### Exemplo de utilização
```html
<svl-notify type="success"></svl-notify>
```
######Alguns modelos pré-definidos :
- primary 
- success 
- info
- warning 
- rose

---

- `align`: O atributo `align` é do tipo `string` e é responsável por determinar a posição no eixo x em que a notificação é exibida.
###### Exemplo de utilização
```html
<svl-notify align="right"></svl-notify>
```
###### Podendo ser somente :
- right
- left

---

- `from`: O atributo `from` é do tipo `string` e é responsável por determinar a posição no eixo y em que a notificação é exibida.
###### Exemplo de utilização
```html
<svl-notify from="top"></svl-notify>
```
###### Podendo ser somente :
- top
- bottom

---
- `title`: O atributo `title` é do tipo `string` e é o texto que é exibido em destaque na notificação.
###### Exemplo de utilização
```html
<svl-notify title="<strong>Exemplo de notificação do tipo sucesso!</strong>"></svl-notify>
```
###### OBS : São suportadas as maiorias das tags HTML 5.

---
- `message`: O atributo `message` é do tipo `string` e é o texto exibido no corpo da notificação.
###### Exemplo de utilização
```html
<svl-notify message="<br> Está é uma notificação com link. Clique aqui e visite nosso site. <br><br>"></svl-notify>
```
###### OBS : São suportadas as maiorias das tags HTML 5.

---
- `url`: O atributo `url` é do tipo `string` e transforma a notificação em um `link` podendo atribuir o target para esse link com outro parâmetro [`target`](#target).
###### Exemplo de utilização
```html
<svl-notify message="<br> Está é uma notificação com link. Clique aqui e visite nosso site. <br><br>"></svl-notify>
```
###### OBS : São suportadas as maiorias das tags HTML 5.

---
- `target`: O atributo `target` é do tipo `string` e é responsável por especificar onde abrir o link vinculado.
###### Exemplo de utilização
```html
<svl-notify target="_blank"></svl-notify>
```
###### Podendo ser:
- _blank 
- _self 
- _parent 	
- _top 
- Nome do frame

---
- `element`: O atributo `element` é do tipo `string` e é responsável por definir dentro de qual elemento(tag) será renderizada a notificação.
###### Exemplo de utilização
```html
<svl-notify element="body"></svl-notify>
```
---
- `allowDismiss`: O atributo `allowDismiss` é do tipo `boolean` e deve conter `true \ false`, é responsável por exibir o botão de fechar a notificação caso seu valor seja `true` , e ocultar caso seu valor seja `false`.
###### Exemplo de utilização
```html
<svl-notify allowDismiss=true></svl-notify>
```
---
- `showProgressBar`: O atributo `showProgressBar` é do tipo `boolean` e deve conter `true \ false`, é responsável por exibir uma barra de progresso com o "tempo de vida" da  notificação.
###### Exemplo de utilização
```html
<svl-notify showProgressBar=true></svl-notify>
```
---

- `<a name="iconType">iconType</a>`: O atributo `iconType` é do tipo `string` e deve conter o tipo da `tag` que serve como seletor do ícone.
###### Exemplo de utilização
```html
<svl-notify iconType="class"></svl-notify>
```
###### Podendo ser:
-  class - fontawesome
- i - Material icon

---
- `delay`: O atributo `delay` é do tipo `number` que representa quanto milissegundos a notificação ficará ativa.
###### Exemplo de utilização
```html
<svl-notify delay=5000></svl-notify>
```
---
- `offset`: O atributo `offset` é do tipo `number` que representa a margem relativa à posição em que a notificação se encontre, ou seja, a notificação está alinhada no topo à direita, o valor definido no `offset` será a margem em relação ao topo e à direita da página. A escala usada é o pixel (px).
###### Exemplo de utilização
```html
<svl-notify offset=20></svl-notify>
```
---

- `timer`: O atributo `timer` é do tipo `number` que representa  a quantidade de milissegundos removida da notificação em cada milissegundos de `delay`. Portanto,  a cada 1000 milissegundos haverá 1000 milissegundos removidos do tempo restante do `delay` da notificação. Se este for definido mais alto, em seguida, atrasar a notificação não será removido até que o temporizador tenha esgotado, ou seja, para 1000 milissegundos de `delay` o timer definido como 500 milissegundos você perceberá que a tava de atualização do `progress bar` será em "duas etapas".

###### Exemplo de utilização
```html
<svl-notify timer=100></svl-notify>
```
---


- `animateEnter`: O atributo `animateEnter` é do tipo `string` e é a animação de entrada da notificação devendo conter a `classe css` que "representa a animação" dentro do padrão de animações definidas pelo css em *`assets/css/animate.min.css`*
###### Exemplo de utilização
```html
<svl-notify animateEnter="animated fadeInDown"></svl-notify>
```
###### Exemplo de aplicação :  https://daneden.github.io/animate.css/

---
- `animateExit`: O atributo `animateExit` é do tipo `string` e é a animação de saída da notificação devendo conter a `classe css` que "representa a animação" dentro do padrão de animações definidas pelo css em *`assets/css/animate.min.css`*
###### Exemplo de utilização
```html
<svl-notify animateEnter="animated fadeOutUp"></svl-notify>
```
###### Exemplo de aplicação :  https://daneden.github.io/animate.css/

---

- `mouseOver`: O atributo `mouseOver` é do tipo `string` e deve conter `pause \ null` onde o pause ao colocar o mouse sobre a notificação pausa o temporizador de fechamento da notificação e null não realiza nenhuma mudança. 
###### Exemplo de utilização
```html
<svl-notify mouseOver="pause"></svl-notify>
```
---

-  <a name="template">template</a> : O atributo `template` é do tipo `string` e é o html do template da notificação.
###### Exemplo de utilização
```html
<svl-notify template="[1]"></svl-notify>
[1] = <div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">
	<button type="button" aria-hidden="true" class='close' data-notify="dismiss">×</button>
	<span data-notify="icon"></span> 
	<span data-notify="title">{1}</span> 
	<span data-notify="message">{2}</span>
	<div class="progress" style="margin:10px;" data-notify="progressbar">
	<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>" +
</div>
	<a href="{3}" target="{4}" data-notify="url"></a>
</div>
```
---
- `onShow`: O atributo `onShow` é do tipo `object` e deve ser passada uma `function` *javascript* ou `null`. Este evento é acionado imediatamente quando o método que inicia a notificação é chamado.
###### Exemplo de utilização
```html
<svl-notify onShow=null></svl-notify>
```
---
- `onShown`: O atributo `onShown` é do tipo `object` e deve ser passada uma `function` *javascript* ou `null`. Este evento é disparado quando o modal da notificação ficou visível para o usuário (aguardará as transições / animações CSS serem concluídas).
###### Exemplo de utilização
```html
<svl-notify onShown=null></svl-notify>
```
---
- `onClose`: O atributo `onClose` é do tipo `object` e deve ser passada uma `function` *javascript* ou `null`. Esse evento é disparado imediatamente quando a notificação está fechando.
###### Exemplo de utilização
```html
<svl-notify onClose=null></svl-notify>
```
---
- `onClosed`: O atributo `onClosed` é do tipo `object` e deve ser passada uma `function` *javascript* ou `null`. Seu evento é disparado quando o modal acabou de fechar e é removido do documento (aguardará as transições CSS).
###### Exemplo de utilização
```html
<svl-notify onClosed=null></svl-notify>
```
---
