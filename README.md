# useGoogleOptimize

`useGoogleOptimize` is a React Hook that makes it easy to initialize Google Optimize experiments and add variant dependent logic to your components. It is assumed that Google Optimize source and `dataLayer` are already initialised on the `window`.

### Simple Usage
```
function Experiment() {
  const variant = useGoogleOptimize('XXXXXXXXXXXX');

  return (
    <div>
      { variant
        ? <button disabled>Can't click</button>
        : <button>Click me</button>
      }
    </div>
  )
}
```
### Multi Variant Usage

```
function Experiment() {
  const variant = useGoogleOptimize('XXXXXXXXXXXX');

  const activeVariant = () => (
    switch(variant) {
      case 1: {
        return 'First Variant text';
        break;
      }
      case 2: {
        return 'Second Variant text';
        break;
      }
      default: {
        return 'Default text'
        break;
      }
    }
  )

  return (
    <button>
      {activeVariant}
    </button>
  )
}
```
