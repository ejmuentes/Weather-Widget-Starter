# Weather-Widget-Starter
Simple ReactJS Pair-Programming Exercise


# Helpful Notes

## These are included to keep your time focused on delivering the features, rather than looking up any of the simple things mentioned below.

### HTML Entity for the "degrees" symbol

```html
&deg;
```

### Convert full "day of the week" string to shorthand in JSX

```jsx
<div>{dateInfo.dayOfWeekName.substr(0, 3)}</div>
```

### Weather Icon Code Snippet
This is a JSX `<img>` tag with the weather-status icon image's URL

Follow these steps to make it dynamically render the icon specified in the data:
1. Drop this into your UI to render the placeholder icon
2. replace the icon code with the one in the data for the weather tile that you're rendeing

```jsx
<img
  alt={weatherDataPlaceholders.icon.desc}
  src={`http://openweathermap.org/img/w/${weatherDataPlaceholders.icon.code}.png`}
/>
```

