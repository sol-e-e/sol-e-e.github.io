---
layout: post
title: "JavaScript - 실행 컨텍스트(Execution Context)"
tags: JavaScript
excerpt_separator: <!--more-->
---

# 실행 컨텍스트(Execution Context)

실행 컨텍스트는 자바스크립트 코드가 실행되는 환경의 추상적인 개념이다.<!--more--> 자바스크립트에서 코드가 어디서 실행되던, 실행 컨텍스트 안에서 실행된다.
> 실행 컨텍스트를 이해하면 호이스팅이나 스코프, 클로저 등을 이해하기 쉬워진다.

<br>

## 실행 컨텍스트 종류

### Global Execution Context

기본 실행 컨텍스트로 하나의 프로그램에 하나의 전역 실행 컨텍스트만 있을 수 있다.

- window와 같은 전역 객체를 생성한다.
- this를 전역 객체로 설정한다.

### Functional Execution Context

함수가 호출될 때마다, 새로운 실행 컨텍스트가 생성된다.

### Eval Function Execution Context

eval 함수안에 실행되는 코드가 갖는 실행 컨텍스트이다. (보안상 eval 사용하지 말 것!)

<br>

## 실행 컨텍스트 생성 과정

> 1) Creation Phase 2) Execution Phase

<br>

## Creation Phase

Creation Phase에서는 두 가지가 생성됩니다.

1. LexicalEnvironment
2. VariableEnvironment

따라서 아래와 같이 표현할 수 있다.
{% highlight js %}
ExecutionContext = {
    LexicalEnvironment = <ref. to LexicalEnvironment in memory>,
    VariableEnvironment = <ref. to VariableEnvironment in memory>,
}
{% endhighlight %}

<br>

### 1. Lexical Environment
#### Environment Record
![image](https://github.com/sol-e-e/LeetCode-Problems/assets/105342384/fd61041f-cb52-4aa2-8068-7393e64edeaf)
변수와 함수 선언을 lexical environment 안에 저장한다.
- Declarative environment record: 변수와 함수 선언을 저장
- Object environment record: 전역 코드의 lexical environment는 객체 환경 레코드를 포함한다. 전역 바인딩 객체를 저장하고 각각의 객체 프로퍼티를 위한 새로운 엔트리를 생성한다.

#### Reference to the outer environment
outer lexical environment를 접근한다. 현재 lexical environment에서 변수를 찾을 수 없을 때, JS 엔진이 outer environment에서 찾을 수 있게 한다.

#### This binding
this의 값을 결정한다.

<br>

### 2. Variable Environment
variable environment 또한 lexical environment를 갖는다. ES6에선 LexicalEnvironment는 let과 const로 선언된 변수나 함수를 저장하고 VariableEnvironment는 오직 var 변수만 저장한다.

<br>

## Execution Phase
Execution Phase에서는 모든 변수가 할당되고 코드가 마침내 실행된다.

[참조](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)