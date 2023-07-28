---
layout: post
title:  "JavaScript - 객체(Objects)"
tags: JavaScript
excerpt_separator: <!--more-->
---

# 객체
자바스크립트에서 원시(primitive) 타입을 제외한 데이터 타입은 객체이다.<!--more-->

<br>

## 프로퍼티
key(name) : value 형태의 객체 내부의 속성이다.
* 프로퍼티 키는 문자열(또는 symbol)만 가능하다.
* 프로퍼티 값은 문자열, 함수 등 모든 데이터 타입이 가능하다.
* 프로퍼티 값이 함수일 경우 메소드(Method)라고 부른다.
* JS에서는 객체가 생성된 뒤에도 프로퍼티를 동적으로 할당하여 객체에 추가할 수 있다.

<br>

## 객체 생성 방법
### 객체 리터럴
{% highlight js %}
const person = {
  name: "Bob",
  age: 32,
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};
{% endhighlight %}
### new 연산자와 Object 생성자 함수
{% highlight js %}
const person = new Object();
person.name = "Bob";
person.age = 32;
person.introduceSelf() = function () {
    console.log(`Hi! I'm ${this.name}.`);
}
{% endhighlight %}
### 생성자 함수
생성자(constructor) 함수란 함수에 new 연산자를 사용하여 호출하면 객체를 생성하는 함수이다. 생성자 함수로 생성된 객체는 인스턴스라고 한다.
{% highlight js %}
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduceSelf = function(){
        console.log(`Hi! I'm ${this.name}.`);
  };
}
const person1 = new Person("Bob", "32");
person1.introduceSelf();
{% endhighlight %}