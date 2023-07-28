---
layout: post
title:  "JavaScript - this"
tags: JavaScript
excerpt_separator: <!--more-->
---

# this
자바스크립트에서 함수는 호출될 때 암묵적으로 this를 할당받는다.
함수의 호출 방식에 따라 this에 바인딩 될 객체가 결정된다.<!--more-->

<br>

## 함수 호출 방식과 this 바인딩
### 함수 호출
{% highlight js %}
var a = "Global";

function whatsThis() {
  return this.a;
}

whatsThis(); // 'Global';
{% endhighlight %}
this는 기본적으로 전역 객체(Global Object)에 바인딩한다. 전역객체는 모든 객체의 최상위 객체를 의미하며 일반적으로 브라우저 사이드에서는 window, 서버 사이드(Node.js)에서는 global 객체를 의미한다.
<br>
내부함수는 일반 함수, 메소드, 콜백함수 어디에서 선언되었든 this는 전역객체를 바인딩한다. 콜백함수도 함수이므로 this는 전역객체에 바인딩한다.
> 콜백함수란 자기 자신을 다른 함수의 인자로 넘겨 실행하도록 하는 함수로, 함수의 제어권도 같이 넘긴다. ex) sort(), setInterval()

### 메소드 호출
{% highlight js %}
const obj = { a: "Custom" };

var a = "Global";

function whatsThis() {
  return this.a;
}

obj.whatsThis = whatsThis;
obj.whatsThis(); // 'Custom';
{% endhighlight %}
메소드 내의 this는 해당 함수를 호출한 객체에 바인딩한다.

### 생성자 함수 호출
{% highlight js %}
function C() {
  this.a = 37;
}

let o = new C();
console.log(o.a); // 37
{% endhighlight %}
기존 함수에 new 연산자를 붙여서 호출하면 해당 함수는 생성자 함수로 동작한다.
1. 빈 객체가 생성되면 생성자 함수 내의 this는 이 빈 객체를 가리킨다.
2. this를 이용해 생성자 함수 내 프로퍼티와 메소드 정의한다.
3. 암묵적으로 this를 반환한다. this를 반환하지 않으면 생성자 함수가 아니다.

### apply/call/bind 호출
apply/call/bind로 this를 특정 객체에 명시적으로 할당한다.
{% highlight js %}
function add(c, d) {
  return this.a + this.b + c + d;
}

const o = { a: 1, b: 3 };

add.call(o, 5, 7); // 16
add.apply(o, [10, 20]); // 34
{% endhighlight %}
함수 내부의 this에 바인딩할 객체와 함수에 전달할 argument를 넘긴다. apply는 배열로 call은 나열해서 argument를 전달한다.
{% highlight js %}
function f() {
  return this.a;
}

const g = f.bind({ a: "azerty" });
console.log(g()); // azerty

const h = g.bind({ a: "yoo" });
console.log(h()); // azerty
{% endhighlight %}
bind는 argument를 나열해서 전달한다. bind는 this를 바꾼 새로운 함수를 생성하지만 함수 호출은 하지않는다. 한번만 동작해서 this의 변경이 불가하다.
