# eslint-plugin-classes

custom ESLint rule, checks class style.
(will adding more rules for class)

## Rule Details

### space

should be space between method name and parens.

The following patterns are considered warnings:

```js
class Foo {
  bar () {
  }
}

class Foo {
  static bar () {
  }
}

class Foo {
  bar () {
  }

  buz() {
  }
}
```

The following patterns are not warnings:

```js
class Foo {
  bar() {
  }
}

class Foo {
  static bar() {
  }
}

class Foo {
  bar() {
  }

  buz() {
  }
}
```


## Usage

```yaml
plugins:
  - classes

rules:
  # Plugins
  classes/space  : 2
```

## License

MIT
