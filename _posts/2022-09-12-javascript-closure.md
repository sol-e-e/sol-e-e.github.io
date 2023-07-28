---
layout: post
title: "JavaScript - 클로저(Closure)"
tags: JavaScript
excerpt_separator: <!--more-->
---

# Closure
클로저는 함수와 그 함수의 주변 환경(렉시컬 환경)과의 조합이다. <!--more-->
함수가 자신이 선언됐을 때의 환경인 스코프를 기억하여 자신이 선언됐을 때의 환경 밖에서 호출되어도 그 환경에 접근할 수 있는 함수를 뜻한다. 

<br>

## 스코프(Scope)
스코프는 JS 엔진이 식별자를 검색할 때 사용하는 규칙으로, 자신의 위치에 의해 다른 코드가 식별자 자신을 참조할 수 있는 범위이다. 렉시컬 스코프(Lexical scope)는 함수를 어디에 선언하였는지에 따라 결정되는 환경이다
> 식별자(identifier): 변수, 함수의 이름과 같이 어떤 대상을 다른 대상과 구분하여 식별할 수 있는 유일한 이름

<br>

## 클로저의 활용
클로저를 이용해 비공개(private) 변수를 만들 수 있다. 비공개 선언은 전역스코프의 변수를 최소화하고 외부로부터의 접근을 제한한다. 
{% highlight js %}
const makeCounter = function () {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0.

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2.

counter1.decrement();
console.log(counter1.value()); // 1.
console.log(counter2.value()); // 0.
{% endhighlight %}
이 makeCounter()는 아래와 같이 구성되어있다.
{% highlight js %}
public increment();
public decrement();
public value();

private privateCounter;
private changeBy();
{% endhighlight %}
세 개의 public 함수들은 클로저를 생성하고 같은 렉시컬 환경을 공유한다. private 변수와 함수는 렉시컬 환경에 존재하고 외부에서는 return된 public 함수로만 접근할 수 있다. 

또한 두 개의 카운터가 각자의 독립성을 유지한다. 각자의 클로저가 서로 다른 privateCounter를 참조하여 변수 값 변경에 영향을 주지 않는다.

<br>

### 정리하면
함수 내부에서 다시 함수를 반환하면 반환된 함수는 최초 선언될 때 담고 있는 렉시컬 환경을 유지한다. 이를 이용해 외부에 노출하고자 하는 데이터들 외에는 모두 외부에서 접근을 제한할 수 있고 지역변수를 안전하게 보호할 수 있다.

[MDN 참조](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#emulating_private_methods_with_closures)