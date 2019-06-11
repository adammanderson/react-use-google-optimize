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

  const messages = {
    '0': 'Default text',
    '1': 'Second Variant text',
    '2': 'Third Variant text',
  };

  return (
    <button>
      {messages[variant]}
    </button>
  )
}
```
