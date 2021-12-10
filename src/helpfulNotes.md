# These notes are included to keep your time focused on delivering the features rather than looking up the simple things mentioned below.

## HTML Entity for the "degrees" symbol

```html
&deg;
```

## Convert full "day of the week" string to shorthand in JSX

```jsx
<div>{dateInfo.dayOfWeekName.substr(0, 3)}</div>
```

## Example of rendering time from dateInfo method in JSX

```jsx
<div>
  {hours}:{minutes}
</div>
```

## Example of the icon image tag in JSX

```jsx
<img
  alt={openWeatherMapExample.icon.desc}
  src={`http://openweathermap.org/img/w/${openWeatherMapExample.icon.code}.png`}
/>
```
